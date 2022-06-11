FROM node:16.9
WORKDIR .
COPY ./package.json ./
RUN npm install --save --legacy-peer-deps
RUN npm run build
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm" ]
CMD ["run", "start"]