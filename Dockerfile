FROM node:12.18.2 as build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli@10.0.7 && npm install
COPY . .
RUN ng build --prod
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/
COPY --from=build /app/dist/banco-de-sangue /usr/share/nginx/html/
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
