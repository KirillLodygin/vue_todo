# Используем Node.js версии LTS в качестве базового образа
FROM node:lts-alpine AS builder

RUN apk add --no-cache git openssh-client

# Устанавливаем зависимости
WORKDIR /app
COPY package.json .

RUN npm install

# Копируем весь код проекта
COPY .. .

RUN npm install -g nuxt

# Собираем приложение
RUN npm run build

# Второй этап сборки: используем минимальный образ для запуска приложения
FROM node:lts-alpine AS runner

# Создаем рабочую директорию
WORKDIR /app

# Копируем собранный статический контент
COPY --from=builder /app/.nuxt /app/.nuxt
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/yarn.lock /app/yarn.lock
COPY --from=builder /app/nuxt.config.ts /app/nuxt.config.ts
COPY --from=builder /app/.output/public /app/.output/public
COPY --from=builder /app/.output/server /app/.output/server

RUN npm install

# Экспортируем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "run", "start"]
