FROM mysql:8.4
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=simpledb
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=userpassword

COPY init.sql /docker-entrypoint-initdb.d/