# Stage 1
FROM node:latest as build
WORKDIR /usr/src/app
ENV PATH = ${PATH}:./node_modules/.bin
ENV NODE_PATH = /usr/src/app/node_modules
COPY package.json yarn.lock decorate-angular-cli.js ./
RUN yarn install --frozen-lockfile
RUN ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN yarn build:remote

# Stage 2
FROM nginx:latest
COPY ./nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/dist/apps/remote /usr/share/nginx/html

# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
