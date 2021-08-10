FROM nginx:alpine
EXPOSE 8080
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY ./build/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]