FROM node:14.15.4-slim
WORKDIR /var/app
COPY . .
EXPOSE 3000
CMD ["npm", "run", "api"]
