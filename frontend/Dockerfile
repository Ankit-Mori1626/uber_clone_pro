# Step 1: Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Packages install karne ke liye files copy karein
COPY package*.json ./

# Dependencies install karein
RUN npm install

# Source code copy karein
COPY . .

# React/Vite app build karein (package.json ka "build" script run hoga)
RUN npm run build


# Step 2: Production Stage (Nginx Server)
FROM nginx:alpine

# Build folder ko Nginx me copy karein
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
