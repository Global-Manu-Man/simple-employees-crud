# Establecer la imagen base
FROM node:18.2.0


# Crear la carpeta app
RUN mkdir -p /usr/src/app

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json
COPY package*.json .

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . . /

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 8082

# Comando para iniciar la aplicación
CMD [ "npm", "run", "dev"  ]
