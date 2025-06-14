import './feedbackBlock.css'
import {Fragment, React, useState} from "react";
import axios from "axios";


export default function FeedbackBlock({enLan}) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        description: ''
    });

    const [files, setFiles] = useState(new Map());
    const [messages, setMessages] = useState([]);
    const [fieldErrors, setFieldErrors] = useState(new Set());
    const [requestIsLoading, setRequestIsLoading] = useState(false);
    const [isDragActive, setIsDragActive] = useState(false);
    const [messageIsShow, setMessageIsShow] = useState(true);

    const maxFileSize = 50 * 1024 * 1024; // 50 МБ

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Убираем ошибку поля при вводе
        if (fieldErrors.has(name)) {
            setFieldErrors(prev => {
                const newErrors = new Set(prev);
                newErrors.delete(name);
                return newErrors;
            });
        }
    };

    const processFiles = (selectedFiles) => {
        selectedFiles.forEach(file => {
            console.log('попытка загрузки файла - ', file.name);
            if (file.size > maxFileSize) {
                if (enLan) {
                    showMessage(`The file "${file.name}" exceeds the maximum size of 50 MB`, 'error');
                } else {
                    showMessage(`Файл "${file.name}" превышает максимальный размер 50 МБ`, 'error');
                }
                return;
            }

            const fileId = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            setFiles(prev => new Map(prev).set(fileId, {name: file.name, size: file.size, isLoad: false, tgId: ''}));

            // Создаем FormData объект для отправки файла
            const formData = new FormData();
            formData.append('file', file); // Используем более стандартное имя поля
            // console.log('FormData содержимое:');
            // for (let [key, value] of formData.entries()) {
            //     console.log(key, value);
            // }


            // Отправляем файл на сервер
            fetch('/api/file', {
                method: 'POST',
                body: formData,
            })
                    .then(response => {
                        if (!response.ok) {
                            console.log('Ошибка при загрузке файла на сервер (код ответа не ок)')
                            if (enLan) {
                                throw new Error('Error uploading file to server');
                            } else {
                                throw new Error('Ошибка при загрузке файла на сервер');
                            }
                        } else {
                            // console.log('с ответом от сервера на загрузку файла всё ок');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('ответ от сервера на загруженный файл: ', data)

                        setFiles((oldFiles) => {
                            const newFiles = new Map(oldFiles)
                            // console.log('меняем tgId у элемента файла на ', data.fileId)
                            // // newFiles[fileId] = {name: file.name, size: file.size, isLoad: true, tgId: data.fileId};
                            newFiles.set(fileId, {name: file.name, size: file.size, isLoad: true, tgId: data.fileId});
                            // console.log('новый стэйт фалов:')
                            // console.log(newFiles);
                            return newFiles
                        });

                    })
                    .catch(error => {
                        console.error('Ошибка:', error);
                        setFiles((oldFiles) => {
                            const newFiles = new Map(oldFiles)
                            newFiles.delete(fileId)
                            return newFiles
                        });
                        if (enLan) {
                            showMessage('Error loading file', 'error');
                        } else {
                            showMessage('Ошибка при загрузке файла', 'error');
                        }
                        // showMessage('Ошибка при загрузке файла', 'error');
                    });
        });
    };

    const handleFileUpload = (e) => {
        const selectedFiles = Array.from(e.target.files);
        processFiles(selectedFiles);
        e.target.value = '';
    };

    const removeFile = (fileId) => {
        setFiles(prev => {
            const newFiles = new Map(prev);
            newFiles.delete(fileId);
            return newFiles;
        });
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Байт';
        const k = 1024;
        const sizes = ['Байт', 'КБ', 'МБ', 'ГБ'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const validateForm = () => {
        const errors = [];
        const newFieldErrors = new Set();

        // Проверка имени
        if (!formData.name.trim()) {
            if (enLan) {
                errors.push('The “Name” field is required');
            } else {
                errors.push('Поле "Имя" обязательно для заполнения');
            }
            newFieldErrors.add('name');
        }

        // Проверка телефона
        if (!formData.phone.trim()) {
            if (enLan) {
                errors.push('The “Phone” field is required');
            } else {
                errors.push('Поле "Телефон" обязательно для заполнения');
            }
            newFieldErrors.add('phone');
        }

        // Проверка email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            if (enLan) {
                errors.push('The “Email” field is required');
            } else {
                errors.push('Поле "Email" обязательно для заполнения');
            }
            newFieldErrors.add('email');
        } else if (!emailRegex.test(formData.email)) {
            if (enLan) {
                errors.push('Enter a valid email address');
            } else {
                errors.push('Введите корректный email адрес');
            }
            newFieldErrors.add('email');
        }

        // Проверка описания
        if (!formData.description.trim()) {
            if (enLan) {
                errors.push('The “Problem description” field is required');
            } else {
                errors.push('Поле "Описание проблемы" обязательно для заполнения');
            }
            newFieldErrors.add('description');
        } else if (formData.description.length > 2000) {
            if (enLan) {
                errors.push('The description of the problem should not exceed 2000 characters');
            } else {
                errors.push('Описание проблемы не должно превышать 2000 символов');
            }
            newFieldErrors.add('description');
        }

        // Проверка загрузки всех файлов
        const hasUnloadedFiles = Array.from(files.values()).some(file => file.isLoad === false);
        if (hasUnloadedFiles) {
            if (enLan) {
                errors.push('Wait until all files are downloaded.');
            } else {
                errors.push('Дождитесь загрузки всех файлов');
            }
        }

        setFieldErrors(newFieldErrors);

        if (errors.length > 0) {
            showMessage(errors.join('\n'), 'error');
            return false;
        }

        return true;
    };

    const showMessage = (message, type) => {
        const messageId = Date.now();
        const newMessage = {id: messageId, text: message, type};

        setMessages(prev => [...prev, newMessage]);

        setTimeout(() => setMessageIsShow(true), 100);

        // Автоматически удаляем сообщение через 5 секунд
        setTimeout(() => {
            setMessageIsShow(false);
            setTimeout(() => setMessages(prev => prev.filter(msg => msg.id !== messageId)), 1000);

        }, 5000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        setMessages([]);

        if (validateForm()) {
            console.log('запрос на отправку формы, мапа файлов:');
            console.log(files)

            const filesArray = [];

            for (const fileData of files.values()) {
                console.log('элемент файла в массиве: ', fileData);

                console.log('тгАйди1: ', fileData.tgId);
                console.log('тгАйди2: ', fileData['tgId']);

                // Создаём новый объект без поля isLoad
                const newObj = {
                    name: fileData.name,
                    size: fileData.size,
                    tgId: fileData.tgId
                };
                filesArray.push(newObj);
            }


            console.log('подготовленный массив файлов для отправки на сервер:')
            console.log(filesArray);

            setRequestIsLoading(true);
            axios.post('/api/application', {
                ...formData, filesArray
            })
                    .then(response => {
                        console.log('код ответа: ', response.status, 'ответ:', response.data);
                        if (enLan) {
                            showMessage('Your message has been sent successfully! We will contact you shortly.', 'success')
                        } else {
                            showMessage('Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.', 'success')
                        }
                        setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            description: ''
                        });
                        setFiles(new Map());
                        setFieldErrors(new Set());
                        setRequestIsLoading(false)
                    })
                    .catch(error => {
                        if (enLan) {
                            showMessage('Sending error 🤔.', 'error')
                        } else {
                            showMessage('Ошибка отправки 🤔.', 'error')
                        }
                        console.error('Ошибка! - ', error.message);
                        setRequestIsLoading(false)
                    });

        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const droppedFiles = Array.from(e.dataTransfer.files);
        processFiles(droppedFiles);
        setIsDragActive(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
    };

    return (
            <div className='feedback_block'>
                {/*<p className='text2 feedback_block-text'>*/}
                {/*    Расскажите нам о вашем проекте и мы предложим оптимальное решение для автоматизации вашего производства*/}
                {/*</p>*/}
                <form
                        onSubmit={handleSubmit}
                        autoComplete={'on'}
                        className='feedback_block-form'
                >
                    <div className='feedback_block-form-grid'>
                        <div className='feedback_block-form-grid-element'>
                            <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder={enLan ? 'Name *' : 'Ваше имя *'}
                                    // autoComplete='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    maxLength="150"
                                    className={`feedback_block-form-grid-element-input_text ${fieldErrors.has('name') ? 'feedback_block-form-grid-element-input_text-error' : ''}`}
                            />
                        </div>
                        <div className='feedback_block-form-grid-element'>
                            <input
                                    type="tel"
                                    id='phone'
                                    name='phone'
                                    placeholder={enLan ? 'Phone *' : 'Телефон *'}
                                    // autoComplete='tel'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    maxLength="20"
                                    className={`feedback_block-form-grid-element-input_text ${fieldErrors.has('phone') ? 'feedback_block-form-grid-element-input_text-error' : ''}`}
                            />
                        </div>
                        <div className='feedback_block-form-grid-element feedback_block-form-grid-element-fullwidth'>
                            <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    placeholder='Email *'
                                    // autoComplete='on'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    maxLength="100"
                                    className={`feedback_block-form-grid-element-input_text ${fieldErrors.has('email') ? 'feedback_block-form-grid-element-input_text-error' : ''}`}
                            />
                        </div>
                        <div className='feedback_block-form-grid-element feedback_block-form-grid-element-fullwidth'>
                            <div className='feedback_block-form-grid-element-textarea_wrapper'>
                            <textarea
                                    id='description'
                                    name='description'
                                    placeholder={enLan ? 'Brief description of the question/problem' : 'Описание проблемы или вопроса *'}
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    maxLength="2000"
                                    className={`feedback_block-form-grid-element-input_textarea ${fieldErrors.has('email') ? 'feedback_block-form-grid-element-input_text-error' : ''}`}
                            />
                                {
                                        formData.description.length > 2000 &&
                                        <div className='feedback_block-form-grid-element-input_textarea-char_counter_over_limit'>{formData.description.length}/2000</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div
                            className={`feedback_block-form-file_upload-sec${isDragActive ? ' feedback_block-form-file_upload-sec-drag-active' : ''}`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                    >
                        <input
                                type='file'
                                name='filetoupload'
                                id="fileInput"
                                className='feedback_block-form-file_upload-sec-file_input'
                                onChange={handleFileUpload}
                                multiple
                                accept="image/*,.pdf,.doc,.docx,.txt,.zip,.rar"
                        />
                        <label
                                htmlFor="fileInput"
                                className="feedback_block-form-file_upload-btn"
                        >
                            <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7,10 12,15 17,10"></polyline>
                                <line
                                        x1="12"
                                        y1="15"
                                        x2="12"
                                        y2="3"
                                ></line>
                            </svg>
                            {enLan ? 'Attach a file' : 'Прикрепить файлы'}
                        </label>
                        <div className="feedback_block-form-file_upload-text">
                            {/*Поддерживаемые форматы: изображения, PDF, DOC, TXT, ZIP<br />*/}
                            {enLan ? 'Maximum file size: 50 MB' : 'Максимальный размер файла: 50 МБ'}
                        </div>
                        <div
                                className="feedback_block-form-file_upload-uploaded_files"
                                id="uploadedFiles"
                        >
                            {files.size > 0 && (
                                    <div className='feedback_block-form-file_upload-uploaded_files'>
                                        {Array.from(files.entries()).map(([fileId, file]) => (
                                                <div
                                                        key={fileId}
                                                        className={`feedback_block-form-file_upload-uploaded_files-item ${file.isLoad ? 'feedback_block-form-file_upload-uploaded_files-item-loaded' : 'feedback_block-form-file_upload-uploaded_files-item-loading'}`}
                                                >
                                                    <div className='feedback_block-form-file_upload-uploaded_files-item-info'>
                                                        {!file.isLoad &&
                                                                <div className="feedback_block-form-file_upload-uploaded_files-item-uploading_indicator"></div>}
                                                        <svg
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                        >
                                                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                                        </svg>
                                                        <div className='feedback_block-form-file_upload-uploaded_files-item-info-group'>
                                                            <div className='feedback_block-form-file_upload-uploaded_files-item-name'>
                                                                {file.name}
                                                            </div>
                                                            <div className='feedback_block-form-file_upload-uploaded_files-item-size'>
                                                                {formatFileSize(file.size)}
                                                            </div>
                                                            <div>
                                                                <div
                                                                        className={`feedback_block-form-file_upload-uploaded_files-item-status ${file.isLoad ?
                                                                                'feedback_block-form-file_upload-uploaded_files-item-status-loaded' :
                                                                                'feedback_block-form-file_upload-uploaded_files-item-status-loading'}`}
                                                                >{enLan ? file.isLoad ? 'Uploaded' : 'Is loading...' : file.isLoad ? 'Загружен' : 'Загружается...'}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                            disabled={!file.isLoad}
                                                            type="button"
                                                            onClick={() => removeFile(fileId)}
                                                            className='feedback_block-form-file_upload-uploaded_files-item-remove'
                                                    >
                                                        {enLan ? 'Delete' : 'Удалить'}
                                                    </button>
                                                </div>
                                        ))}
                                    </div>
                            )}
                        </div>
                    </div>
                    <div className={`feedback_block-form-message_container ${messages.length === 0 ? 'feedback_block-form-message_container-hidden' : ''}`}>
                        {messages.map(message => (
                                <div
                                        key={message.id}
                                        className={`feedback_block-form-message ${messageIsShow ? 'feedback_block-form-message-show' : ''} ${message.type === 'error' ? 'feedback_block-form-message-error' : 'feedback_block-form-message-success'}`}
                                >
                                    {message.text.split('\n').map((line, index) => (
                                            <Fragment key={index}>
                                                {line}
                                                {index < message.text.split('\n').length - 1 && <br />}
                                            </Fragment>
                                    ))}
                                </div>
                        ))}
                    </div>
                    <button
                            type="submit"
                            className="feedback_block-form-submit_btn"
                            disabled={requestIsLoading}
                    >
                        {enLan ? requestIsLoading ? 'Sending...' : 'Send message' : requestIsLoading ? 'Отправляем...' : 'Отправить сообщение'}
                    </button>
                </form>
            </div>
    )
}