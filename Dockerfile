FROM node:16
USER node
RUN mkdir -p /home/node/app/node_modules 
RUN chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json .
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "server.js" ]