FROM node:24-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --production && \
    npm run build && \
    npm cache clean --force && \
    rm- -rf /root/.npm && \
    rm -rf node_modules
COPY . .
EXPOSE 3003
CMD ["npm", "run", "dev"]
