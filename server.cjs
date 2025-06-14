const http = require('http');
const fs = require('fs');
const path = require('path');
const formidable = require("formidable");
const FormData = require("form-data");
const axios = require("axios");

// const TELEGRAM_BOT_TOKEN = '7634754756:AAFbVy0Eujw-rzcfeSvi4sAp1QU74znblXA';
// const TELEGRAM_USER_ID_FIRST = -1002888150428; // Первый канал/чат (хранилище)
// const TELEGRAM_REQUESTS_CHAT_ID = -1002673909381; // Второй канал/чат (основной)

const TELEGRAM_BOT_TOKEN = '8054114971:AAE-25rC6uj0RX8_jafv0Aj6UD-hICbjxSA';
const TELEGRAM_USER_ID_FIRST = -1002534280928; // Первый канал/чат (хранилище)
const TELEGRAM_REQUESTS_CHAT_ID = -1002657965158; // Второй канал/чат (основной)

// Утилиты для логирования
const getTimestamp = () => new Date().toISOString();
const getClientInfo = (req) => {
    return {
        ip: req.connection.remoteAddress || req.socket.remoteAddress ||
                (req.connection.socket ? req.connection.socket.remoteAddress : null),
        userAgent: req.headers['user-agent'] || 'Unknown',
        referer: req.headers.referer || 'Direct',
        acceptLanguage: req.headers['accept-language'] || 'Unknown'
    };
};

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const logRequest = (req, status, filePath, error = null, fileSize = null) => {
    const client = getClientInfo(req);
    const timestamp = getTimestamp();

    console.log(`\n${'='.repeat(80)}`);
    console.log(`[${timestamp}] REQUEST DETAILS`);
    console.log(`${'='.repeat(80)}`);
    console.log(`🌐 URL: ${req.method} ${req.url}`);
    console.log(`📍 Client IP: ${client.ip}`);
    console.log(`🖥️  User Agent: ${client.userAgent}`);
    console.log(`🔗 Referer: ${client.referer}`);
    console.log(`🌍 Accept-Language: ${client.acceptLanguage}`);
    console.log(`📁 File Path: ${filePath}`);

    if (fileSize !== null) {
        console.log(`📊 File Size: ${formatFileSize(fileSize)}`);
    }

    console.log(`📋 Headers:`);
    Object.keys(req.headers).forEach(key => {
        console.log(`   ${key}: ${req.headers[key]}`);
    });

    if (status >= 200 && status < 300) {
        console.log(`✅ Status: ${status} - SUCCESS`);
    } else if (status >= 300 && status < 400) {
        console.log(`↩️  Status: ${status} - REDIRECT`);
    } else if (status >= 400 && status < 500) {
        console.log(`⚠️  Status: ${status} - CLIENT ERROR`);
    } else if (status >= 500) {
        console.log(`❌ Status: ${status} - SERVER ERROR`);
    }

    if (error) {
        console.log(`💥 Error Details:`);
        console.log(`   Code: ${error.code || 'Unknown'}`);
        console.log(`   Message: ${error.message || 'Unknown error'}`);
        console.log(`   Stack: ${error.stack || 'No stack trace'}`);
    }

    console.log(`${'='.repeat(80)}\n`);
};

const PORT = 3000;
const DIST_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'public');

// MIME типы для разных файлов
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webm': 'video/webm',
    '.mp4': 'video/mp4',
    '.mov': 'video/quicktime',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

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

const server = http.createServer((req, res) => {
    if (req.url === '/api/file' && req.method === 'POST') {

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

    if (req.url === '/api/application' && req.method === 'POST') {
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


    // if (req.url === '/api/file' && req.method === 'POST') {
    //     console.log("отправка файла");
    //     return;
    // }
    //
    // if (req.url === '/api/application' && req.method === 'POST') {
    //     console.log("отправка формы");
    //     return
    // }

    const requestStartTime = Date.now();
    const timestamp = getTimestamp();

    console.log(`\n🚀 [${timestamp}] Incoming request: ${req.method} ${req.url}`);

    // Получаем путь из URL
    let filePath;

    // Сначала проверяем в папке dist (скомпилированные файлы)
    if (req.url === '/') {
        filePath = path.join(DIST_DIR, 'index.html');
        console.log(`📂 Root request, serving index.html from: ${filePath}`);
    } else {
        // Для статических файлов сначала проверяем public, потом dist
        const publicPath = path.join(PUBLIC_DIR, req.url);
        const distPath = path.join(DIST_DIR, req.url);

        console.log(`🔍 Checking file existence:`);
        console.log(`   Public path: ${publicPath}`);
        console.log(`   Dist path: ${distPath}`);

        // Проверяем существование в public папке
        if (fs.existsSync(publicPath)) {
            filePath = publicPath;
            console.log(`✅ Found in public directory: ${filePath}`);
        } else {
            filePath = distPath;
            console.log(`➡️  Will try dist directory: ${filePath}`);
        }
    }

    // Получаем расширение файла
    const extname = path.extname(filePath).toLowerCase();
    console.log(`📄 File extension: ${extname || 'no extension'}`);

    // Определяем MIME тип
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    console.log(`🎭 MIME type: ${contentType}`);

    // Проверяем существование файла
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`❌ File access error: ${err.message}`);

            // Если файл не найден, пытаемся отдать index.html (для SPA)
            if (extname === '' || extname === '.html') {
                const fallbackPath = path.join(DIST_DIR, 'index.html');
                console.log(`🔄 Trying fallback to index.html: ${fallbackPath}`);
                filePath = fallbackPath;
            } else {
                // Возвращаем 404 для статических файлов
                console.log(`🚫 Returning 404 for static file: ${req.url}`);
                const requestTime = Date.now() - requestStartTime;
                logRequest(req, 404, filePath, err); // ВОТ ВЫЗОВ!
                console.log(`⏱️  Request completed in ${requestTime}ms`);

                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404 - Файл не найден');
                return;
            }
        } else {
            console.log(`✅ File exists and accessible: ${filePath}`);
        }

        // Читаем и отправляем файл
        console.log(`📖 Reading file: ${filePath}`);

        fs.readFile(filePath, (error, content) => {
            const requestTime = Date.now() - requestStartTime;

            if (error) {
                console.log(`❌ Error reading file: ${error.message}`);

                if (error.code === 'ENOENT') {
                    logRequest(req, 404, filePath, error); // ВОТ ВЫЗОВ!
                    console.log(`⏱️  Request completed in ${requestTime}ms`);
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.end('404 - Файл не найден');
                } else {
                    logRequest(req, 500, filePath, error); // ВОТ ВЫЗОВ!
                    console.log(`⏱️  Request completed in ${requestTime}ms`);
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('500 - Внутренняя ошибка сервера');
                }
            } else {
                console.log(`✅ File read successfully, content length: ${formatFileSize(content.length)}`);

                // Устанавливаем заголовки
                const headers = {
                    'Content-Type': contentType,
                    'Content-Length': content.length,
                    'Cache-Control': 'public, max-age=31536000'
                };

                // Для HTML файлов отключаем кеширование
                if (contentType === 'text/html') {
                    headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
                    headers['Pragma'] = 'no-cache';
                    headers['Expires'] = '0';
                    console.log(`🚫 Caching disabled for HTML file`);
                } else {
                    console.log(`💾 Caching enabled for static file (1 year)`);
                }

                console.log(`📤 Response headers:`);
                Object.keys(headers).forEach(key => {
                    console.log(`   ${key}: ${headers[key]}`);
                });

                logRequest(req, 200, filePath, null, content.length); // ВОТ ВЫЗОВ!
                console.log(`⏱️  Request completed in ${requestTime}ms`);

                res.writeHead(200, headers);
                res.end(content, 'utf-8');

                console.log(`✅ Response sent successfully`);
            }
        });
    });
});

// Обработка ошибок сервера
server.on('error', (err) => {
    console.error(`\n❌ КРИТИЧЕСКАЯ ОШИБКА СЕРВЕРА [${getTimestamp()}]:`);
    console.error(`${'='.repeat(60)}`);
    console.error(`Code: ${err.code}`);
    console.error(`Message: ${err.message}`);
    console.error(`Stack: ${err.stack}`);
    console.error(`${'='.repeat(60)}\n`);
});

// Запуск сервера
server.listen(PORT, () => {
    const timestamp = getTimestamp();
    console.log(`\n${'🚀'.repeat(20)}`);
    console.log(`[${timestamp}] СЕРВЕР УСПЕШНО ЗАПУЩЕН`);
    console.log(`${'🚀'.repeat(20)}`);
    console.log(`🌐 URL: http://localhost:${PORT}`);
    console.log(`📁 Папки для файлов:`);
    console.log(`   📂 dist: ${DIST_DIR}`);
    console.log(`   📂 public: ${PUBLIC_DIR}`);
    console.log(`📹 Видео файлы: поместите в папку public/`);
    console.log(`\n⚡ Сервер готов к приёму запросов...`);
    console.log(`${'='.repeat(60)}\n`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Остановка сервера...');
    server.close(() => {
        console.log('✅ Сервер остановлен');
        process.exit(0);
    });
});