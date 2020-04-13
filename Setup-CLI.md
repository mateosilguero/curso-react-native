# Usando CLI:

Instalaremos los siguientes programas y herramientas:

- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
- [Android Studio](https://developer.android.com/studio)
- [Xcode](https://developer.apple.com/xcode/resources/) (para quienes tengan mac)
- [(Windows) Python 2](https://www.python.org/download/releases/2.7/)

debemos instalar previamente algunas herramientas corriendo los siguientes comandos en la terminal:

Mac:

- brew install watchman
- sudo gem install cocoapods

---

Mac/Linux:

Hay que agregar las siguiente lineas en los archivos `~/.bash_profile` o `~/.bashrc`:

> tip: Si usamos VS code, desde su terminal integrada, podemos acceder a este archivo con el comando: `code ~/.bashrc`

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Windows:

debemos configurar la variable `ANDROID_HOME` en nuestras variables de entorno.

https://developer.android.com/studio/command-line/variables?hl=es

## Creando un emulador de Android:

Para crear un emulador debemos ir al menú AVD, (android virtual devices) desde android studio, descargar las versiones de android que queramos usar, y crear un dispositivo:

ver https://developer.android.com/studio/run/managing-avds?hl=es-419

La primera vez puede tarde un rato largo, ya que las versiones de android tienen un peso considerable.

## Inicializando el proyecto:

correr en la terminal el siguiente comando, donde 'AwesomeProject' será el nombre de nuestra app:

`npx react-native init AwesomeProject`

> (npx nos deja usar el comando sin necesidad de instalarlo)

Luego navegaremos a la carpeta creada: `cd AwesomeProject` y ejecutaremos el comando para correr app en un emulador:

`npm run android` o `npm run ios` (solo mac)
