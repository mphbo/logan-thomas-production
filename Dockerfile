FROM node:16-alpine as builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json .app
RUN npm install
COPY . ./app
RUN npm run build

# FROM nginx
EXPOSE 3000 
# COPY --from=builder /app/.next /usr/share/nginx/html
CMD npm run start