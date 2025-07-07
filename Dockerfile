# Используем nginx для обслуживания статических файлов
FROM nginx:alpine

# Создаем рабочую директорию
WORKDIR /usr/share/nginx/html

# Копируем файлы приложения
COPY index.html .
COPY styles.css .
COPY script.js .
COPY README.md .
COPY QUICK_START.md .

# Примечание: Оригинальные markdown файлы не копируются в production контейнер
# так как контент уже встроен в JavaScript

# Создаем кастомную конфигурацию nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"] 