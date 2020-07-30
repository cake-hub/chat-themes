FROM node:10
WORKDIR /var/www/html
COPY ./Container .
ENV HOST 0.0.0.0
EXPOSE 2022
CMD ["npm", "start"]
