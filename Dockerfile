FROM node

COPY . .

CMD node index.js

EXPOSE 8081