# --- Build Stage ---
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Serve Stage ---
FROM nginx:1.25
COPY --from=build /app/build /usr/share/nginx/html

