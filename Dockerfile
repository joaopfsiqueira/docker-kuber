from node


WORKDIR /app


COPY package*.json .


RUN npm install