# Imagen base de Node.js
FROM node:20

# Carpeta de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto de la app
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
