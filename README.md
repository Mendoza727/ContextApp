# 05-contextapp

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## Descripción

Este es un proyecto sencillo que utiliza **Zustand** para el manejo del estado en una aplicación de **React Native**. El objetivo del proyecto es demostrar cómo implementar un contexto de estado global utilizando Zustand.

## Estructura del proyecto

El archivo `package.json` se configura de la siguiente manera:

```json
{
  "name": "05-contextapp",
  "version": "1.0.0",
  "main": "expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/native": "^6.1.18",
    "expo": "~51.0.28",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-native": "0.74.5",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "3.31.1",
    "zustand": "^5.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.45",
    "typescript": "^5.1.3"
  },
  "private": true
}
```

## Instalación
- Para instalar las dependencias del proyecto, ejecuta el siguiente comando en tu terminal:

```bash
npm install
```

## Ejecución del proyecto
Puedes iniciar el proyecto en tu entorno local utilizando uno de los siguientes comandos:

Para iniciar en Android:

```bash
npm run android
```

- Para iniciar en iOS:

```bash
npm run ios
```
- Para iniciar en la web:
  
```bash
npm run web
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.
