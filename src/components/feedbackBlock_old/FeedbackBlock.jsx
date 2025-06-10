import React, { useRef, useState } from 'react';
import styles from './feedbackBlock.module.css';

export default function FeedbackBlock() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef();
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleFileRemove = (idx) => {
    setFiles(files.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь обработка отправки формы
    // Например, отправка на сервер или показ уведомления
  };

  return (
    <section className={styles.feedbackBlock + ' adli'}>
      <h2 className="heading1">Обратная связь</h2>
      <p className="text2">Оставьте ваши контакты и опишите вопрос — мы свяжемся с вами в ближайшее время.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <span className="text4">Имя</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleInput}
            required
          />
        </label>
        <label className={styles.label}>
          <span className="text4">Телефон</span>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            value={form.phone}
            onChange={handleInput}
            required
          />
        </label>
        <label className={styles.label}>
          <span className="text4">Email</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="example@mail.ru"
            value={form.email}
            onChange={handleInput}
            required
          />
        </label>
        <label className={styles.label}>
          <span className="text4">Описание проблемы</span>
          <textarea
            className={styles.input + ' ' + styles.textarea}
            name="message"
            rows={4}
            placeholder="Опишите ваш вопрос..."
            value={form.message}
            onChange={handleInput}
            required
          />
        </label>
        <div className={styles.filesBlock}>
          <label className={styles.fileLabel}>
            <input
              type="file"
              multiple
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <span className={styles.fileButton}>Прикрепить файлы</span>
          </label>
          <ul className={styles.fileList}>
            {files.map((file, idx) => (
              <li key={idx} className={styles.fileItem}>
                <span>{file.name}</span>
                <span className={styles.fileSize}>{(file.size / 1024).toFixed(1)} КБ</span>
                <button type="button" className={styles.removeBtn} onClick={() => handleFileRemove(idx)} title="Удалить файл">×</button>
              </li>
            ))}
          </ul>
        </div>
        <button className="button" type="submit" style={{ marginTop: '2vw' }}>Отправить</button>
      </form>
    </section>
  );
} 