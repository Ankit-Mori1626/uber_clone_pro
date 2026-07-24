# Node.js base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Package manager files copy karein
COPY package*.json ./

# Dependencies install karein
RUN npm install --production

# Application code copy karein
COPY . .

# Backend port expose karein
EXPOSE 5000

# Start command
CMD ["node", "app.js"]
