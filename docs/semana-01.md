# Documentación de los pasos realizados en la primera semana

## Creación de par clave pública/privada SSH

Para crear la clave pública/privada seguí [este tutorial](https://docs.github.com/es/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

En la siguiente imagen se puede ver la clave agregada a GitHub:
![Captura de pantalla de GitHub SSH](/imgs/semana-01/github-ssh.png)

## Configuración de los remotes correcto para repositorio CC-20-21.

Para realizar la configuración de remotes, una vez situado en la carpeta del repositorio, ejecuté el siguiente comando:
```
git remote add origin https://github.com/JJ/CC-20-21.git
```
La solución la encontré en [este tutorial](https://docs.github.com/es/free-pro-team@latest/github/using-git/adding-a-remote). 

## Configuración de git local correcta: nombre, dirección de correo electrónico, configuración de rebase.

Para configurar el nombre y la dirección de correo electrónico en git utilicé [este tutorial](https://docs.github.com/es/free-pro-team@latest/github/using-git/setting-your-username-in-git).

Para establecer mi nombre en git usé el siguiente comando:
```
git config --global user.name "Marcin Januszewski"
```

Para establecer mi correo en git usé el comando que viene a continuación:
```
git config --global user.email "januszewskimar@gmail.com"
```

En cuanto a la configuración de rebase, configuré git con el siguiente comando:
```
git config --global pull.rebase true
```

Usando el comando `git config --list --global` se pueden ver los ajustes establecidos.
![Captura de pantalla ajustes de git](/imgs/semana-01/git-config.png)

## Configuración de los datos personales en GitHub

Los datos personales se configuran en la página de ajustes de GitHub. El resultado está reflejado en la imagen de abajo:
![Captura de pantalla ajustes datos personales GitHub](/imgs/semana-01/github-personal-data.png)


## Configuración de la autenticación de dos factores

La autenticación de dos factores se establece en la página de configuración de GitHub. He utilizado la opción del envío de mensajes de texto a mi número de móvil. El resultado se puede ver en la siguiente imagen:
![Captura de pantalla autenticación de dos factores](/imgs/semana-01/git-two-factor-auth.png)
