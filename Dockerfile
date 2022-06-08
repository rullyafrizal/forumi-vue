# build stage
FROM node:14.19.3-alpine as build-stage
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

# Copy build artifacts (the file generated after running npm run build)
COPY --from=build-stage /app/dist /usr/share/nginx/html

# This is just a documentation to show where the app is running on which port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
