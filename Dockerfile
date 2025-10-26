FROM node:20-alpine as builder
WORKDIR /app

# Копируем package.json и package-lock.json для лучшего кэширования
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

COPY .env .env
COPY . .

RUN npm run build 

FROM nginx:alpine as production

# Устанавливаем openssl для создания сертификата
RUN apk add --no-cache openssl

# Создаем директорию для SSL сертификатов
RUN mkdir -p /etc/nginx/ssl

# Создаем самоподписанный SSL сертификат
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/privkey.pem \
    -out /etc/nginx/ssl/fullchain.pem \
    -subj "/C=RU/ST=Moscow/L=Moscow/O=Nirvana/OU=IT/CN=nirvana-music"

COPY  --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]