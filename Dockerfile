FROM node:18
WORKDIR ./
COPY package*.json .
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
