FROM node:lts-buster
RUN git clone https://github.com/Gmaxtech2024/GMAX-MD-V2/root/GMAX-MD
WORKDIR /root/GMAX-MD
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]