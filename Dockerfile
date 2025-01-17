FROM node

WORKDIR /nodeapp

COPY . .

RUN yarn 

EXPOSE 3000

CMD ["yarn", "start"]