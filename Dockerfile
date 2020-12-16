# Stage 1 - build the application
FROM node:14-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

# Intermediary layer to download and cache the dependencies
RUN npm install

COPY . .

ARG PUBLIC_URL
ENV NEXT_PUBLIC_URL=$PUBLIC_URL

ARG BIRDY_API_BASE_URL
ENV NEXT_PUBLIC_BIRDY_API_BASE_URL=$BIRDY_API_BASE_URL

RUN npm run build

# Stage 2 - run the application
FROM nginx:1.19-alpine

RUN rm -rf /usr/share/nginx/html/

COPY --from=builder /usr/src/app/out /usr/share/nginx/html/
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/app.conf
