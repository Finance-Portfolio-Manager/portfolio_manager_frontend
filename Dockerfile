FROM httpd:2.4-alpine
EXPOSE 80
COPY ./build/ /usr/local/apache2/htdocs
