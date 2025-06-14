const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const axios = require('axios');
const formidable = require('formidable');
const FormData = require('form-data');

const distDir = path.join(__dirname, 'dist');

const PORT = process.env.PORT || 3000;

// Константы для Telegram
const TELEGRAM_BOT_TOKEN = '7634754756:AAFbVy0Eujw-rzcfeSvi4sAp1QU74znblXA';
//const TELEGRAM_USER_ID_FIRST = '1009651022'; // Первый пользователь
const TELEGRAM_USER_ID_FIRST = -1002888150428;
const TELEGRAM_REQUESTS_CHAT_ID = -1002673909381; // Второй пользователь

const routes = [
    '/',
    '/cases',
    '/manufacturing',
    '/catalog',
    '/catalog/rotary-crusher',
    '/catalog/isolators',
    '/catalog/drying-cabinets',
    '/en',
    '/en/cases',
    '/en/manufacturing',
    '/en/catalog',
    '/en/catalog/rotary-crusher',
    '/en/catalog/isolators',
    '/en/catalog/drying-cabinets',
];

// Массив расширений файлов, которые нужно вернуть напрямую
const fileExtensions = [
    '.otf', '.ico', '.svg', '.html', '.ttf', '.mp4',
    '.webm', '.webp', '.mov', '.css', '.js', '.png'
];

// Функция для установки корректного Content-Type
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.otf': 'font/opentype',
    '.ttf': 'font/ttf',
    '.webm': 'video/webm',
    '.mp4': 'video/mp4',
    '.mov': 'video/quicktime',
    '.webp': 'image/webp',
};

const server_old = http.createServer((req, res) => {
    console.log('запрос:', req.url);
    const parsedUrl = url.parse(req.url);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Функция для отправки файла с корректным Content-Type
    function sendFile(filePath, statusCode = 200) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(`Ошибка чтения файла ${filePath}:`, err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('500 Internal Server Error');
                return;
            }
            const ext = path.extname(filePath).toLowerCase();
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            res.writeHead(statusCode, {'Content-Type': contentType});
            res.end(data);
        });
    }


    if (parsedUrl.pathname === '/api/file' && req.method === 'POST') {

        const form = new formidable.IncomingForm();

        // Логируем все поля и файлы
        // form.on('field', (name, value) => {
        //     console.log('Поле:', name, value);
        // });

        // form.on('file', (name, file) => {
        //     console.log('Получен файл:', {
        //         fieldName: name,
        //         originalName: file.originalFilename,
        //         tempPath: file.filepath,
        //         size: file.size,
        //         mimeType: file.mimetype
        //     });
        // });

        form.on('error', (err) => {
            console.error('Ошибка formidable:', err);
        });

        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Ошибка парсинга:', err);
                res.writeHead(500, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify({error: 'Server error'}));
            }

            // console.log('Parsed fields:', fields);
            // console.log('Parsed files:', files);

            if (!files.file) { // Теперь ожидаем поле 'file'
                console.error('Файл не найден в запросе');
                res.writeHead(400, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify({error: 'File is required'}));
            }

            const receivedFile = files.file[0];
            console.log('Успешно принят файл:', receivedFile.originalFilename);
            console.log('Размер:', receivedFile.size);

            const filePath = receivedFile.originalFilename;

            const MAX_FILE_SIZE = 50 * 1024 * 1024; // 10MB
            if (receivedFile.size > MAX_FILE_SIZE) {
                res.writeHead(413, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify({error: 'Файл слишком большой'}));
            }

            // Читаем временный файл
            fs.readFile(receivedFile.filepath, (err, data) => {
                if (err) {
                    console.error('Ошибка чтения временного файла:', err);
                    res.writeHead(500, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({error: 'Ошибка чтения файла'}));
                    return;
                }

                const savePath = path.join(__dirname, receivedFile.originalFilename);

                fs.writeFile(savePath, data, async (err) => {
                    if (err) {
                        console.error('Ошибка сохранения файла:', err);
                        res.writeHead(500, {'Content-Type': 'application/json'});
                        res.end(JSON.stringify({error: 'Ошибка сохранения файла'}));
                        return;
                    }

                    try {
                        const fileId = await sendFileToTelegram(filePath, TELEGRAM_USER_ID_FIRST);
                        // await sendFileToTelegramById(fileId, TELEGRAM_USER_ID_SECOND); // Отправка второму пользователю
                        await new Promise(resolve => setTimeout(resolve, 20000)); // 2 секунды ожидания
                        fs.unlink(savePath, (unlinkError) => {
                            if (unlinkError) {
                                console.error('Ошибка удаления файла:', unlinkError);
                                // Даже если не удалось удалить, продолжаем
                            } else {
                                console.log('Файл успешно удален:', savePath);
                                res.writeHead(200, {'Content-Type': 'application/json'});
                                res.end(JSON.stringify({fileId}));
                            }
                        })
                    } catch (error) {
                        console.error('Ошибка при отправке файла в Telegram:', error);
                        res.writeHead(500, {'Content-Type': 'text/plain'});
                        res.end('Ошибка при отправке файла в Telegram');

                        fs.unlink(savePath, (unlinkError) => {
                            if (unlinkError) {
                                console.error('Ошибка удаления файла:', unlinkError);
                                // Даже если не удалось удалить, продолжаем
                            }
                        })
                    }

                });


            });

            // res.writeHead(200, {'Content-Type': 'application/json'});
            // res.end(JSON.stringify({
            //     success: true,
            //     filename: uploadedFile.originalFilename,
            //     size: uploadedFile.size
            // }));
        });
        return;
    }

    if (parsedUrl.pathname === '/api/application' && req.method === 'POST') {
        // Проверяем Content-Type (должен быть application/json)
        if (req.headers['content-type'] !== 'application/json') {
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({error: 'Требуется Content-Type: application/json'}));
            return;
        }

        // Читаем тело запроса целиком (если оно небольшое)
        const chunks = [];
        req.on('data', (chunk) => chunks.push(chunk));
        req.on('end', async () => {
            try {
                const jsonData = JSON.parse(Buffer.concat(chunks).toString());
                console.log('✅ Получен JSON:', jsonData);

                let filesString = ''

                for (let i = 0; i < jsonData.filesArray.length; i++) {
                    filesString += `\n${i + 1}. ${jsonData.filesArray[i].name}`;
                }

                console.log('список файлов: ', filesString);

                const msg = `Новый запрос.\nИмя: ${jsonData.name}\nТелефон: ${jsonData.phone}\nПочта: ${jsonData.email}\nФайлов прикреплено: ${jsonData.filesArray ? jsonData.filesArray.length : '0'}\nОписание заявки: ${jsonData.description}\nФайлы: ${filesString}`

                await sendMessageToTelegram(TELEGRAM_REQUESTS_CHAT_ID, msg);

                //sendMessageToTelegram(TELEGRAM_REQUESTS_CHAT_ID, msg)
                for (const fileData of jsonData.filesArray) {
                    await sendFileToTelegramById(fileData.tgId, TELEGRAM_REQUESTS_CHAT_ID)
                }
                // Отвечаем успехом (200 OK)
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({success: true, data: jsonData}));
            } catch (err) {
                console.error('❌ Ошибка парсинга JSON:', err);
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({error: 'Невалидный JSON'}));
            }
        });
        return;
    }

    // Проверяем, является ли запрошенный путь одним из маршрутов для index.html
    if (routes.includes(pathname)) {
        const indexPath = path.join(distDir, 'index.html');
        console.log(`Отдаем index.html на путь ${pathname}`);
        sendFile(indexPath);
        return;
    }

    // Проверяем, запрашивается ли файл с разрешенным расширением
    const ext = path.extname(pathname).toLowerCase();
    if (fileExtensions.includes(ext)) {
        const filePath = path.join(distDir, pathname);

        // Проверяем, что файл существует
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.warn(`Файл не найден: ${filePath}, отдаём 404`);
                const notFoundPath = path.join(distDir, '404.html');
                sendFile(notFoundPath, 404);
            } else {
                console.log(`Отдаем файл: ${filePath}`);
                sendFile(filePath);
            }
        });
        return;
    }

    // Во всех остальных случаях отдаём 404.html
    console.log(`Путь не найден: ${pathname}, отдаём 404.html`);
    const notFoundPath = path.join(distDir, '404.html');
    sendFile(notFoundPath, 404);

    // Остальная логика обработки запросов...
});

// Функция для отправки файла в Telegram и получения file_id
async function sendFileToTelegram(filePath, userId) {
    const form = new FormData();
    form.append('chat_id', userId);
    form.append('document', fs.createReadStream(filePath));
    // form.append('disable_notification', true)

    const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`, form, {
        headers: {
            ...form.getHeaders(),
        },
    });

    return response.data.result.document.file_id; // возвращаем file_id
}

// Функция для отправки прежнего файла по его ID второму пользователю
async function sendFileToTelegramById(fileId, chatId) {
    const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`, {
        chat_id: chatId,
        document: fileId,
    });

    return await response.data.result; // Вы можете вернуть результат, если нужно
}

async function sendMessageToTelegram(chatId, text,) {
    const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        text: text,
    });

    return await response.data.result;
}

server_old.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});