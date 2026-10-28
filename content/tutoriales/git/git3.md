---
title: "Conectar tu computadora a GitHub con SSH"
date: 2026-10-27
draft: false
---

Este es uno de los pasos que más puede intimidar al principio, pero si lo seguís con calma y en orden, no tiene ninguna complicación. La configuración SSH se hace **una sola vez** y después funciona sola para siempre: nunca más vas a tener que escribir tu contraseña de GitHub.

Antes de empezar, asegurate de haber leído el tutorial anterior sobre trabajar en local, porque este paso se apoya en lo que vimos ahí.

---

## ¿Qué es una clave SSH?

SSH es un sistema de autenticación que funciona con dos claves que se generan juntas:

- **Clave privada:** queda guardada en tu computadora. Nunca la compartís con nadie.
- **Clave pública:** la registrás en GitHub. Es la que le permite a GitHub reconocer tu computadora.

Cuando subís código, tu computadora y GitHub se identifican mutuamente usando estas dos claves. No hace falta contraseña porque la autenticación es automática.

---

## Paso 1: verificar si ya tenés claves SSH

Antes de crear claves nuevas, revisá si ya tenés alguna guardada. Abrí la terminal y ejecutá:

**En Mac:**
```bash
ls ~/.ssh
```

**En Windows (PowerShell):**
```bash
ls $env:USERPROFILE\.ssh
```

Si ves archivos con nombres como `id_ed25519` y `id_ed25519.pub`, ya tenés claves creadas y podés saltear el paso 2 e ir directo al paso 3.

Si la terminal dice que la carpeta no existe o está vacía, seguí al paso 2.

---

## Paso 2: crear las claves SSH

Ejecutá este comando reemplazando el email por el que usás en GitHub:

**En Mac y Windows (es igual en los dos):**
```bash
ssh-keygen -t ed25519 -C "tu@email.com"
```

La terminal te va a hacer tres preguntas:

**¿Dónde guardar la clave?**
Presioná Enter sin escribir nada para usar la ubicación por defecto. Es la ubicación correcta.

**¿Contraseña para la clave (passphrase)?**
Podés dejarla vacía presionando Enter dos veces. Para uso personal está bien sin contraseña. Si le ponés una, te la va a pedir cada vez que uses SSH.

Cuando termine vas a ver un dibujo ASCII en la terminal. Eso confirma que las claves se crearon correctamente.

---

## Paso 3: iniciar el agente SSH

El agente SSH es un programa que corre en segundo plano y administra tus claves para no tener que cargarlas manualmente cada vez.

**En Mac:**
```bash
eval "$(ssh-agent -s)"
```

**En Windows (PowerShell como administrador):**
```bash
Start-Service ssh-agent
```

Deberías ver un mensaje como `Agent pid 12345` en Mac, o ningún error en Windows. Eso significa que el agente está corriendo.

---

## Paso 4: agregar la clave al agente

**En Mac:**
```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

**En Windows:**
```bash
ssh-add $env:USERPROFILE\.ssh\id_ed25519
```

Si todo salió bien, la terminal dice algo como `Identity added`.

---

## Paso 5: copiar la clave pública

Ahora necesitás copiar el contenido de tu clave pública para pegarlo en GitHub. La clave pública es el archivo que termina en `.pub`.

**En Mac** (copia al portapapeles automáticamente):
```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

**En Windows (PowerShell):**
```bash
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | clip
```

En los dos casos el comando no imprime nada en la terminal. Eso es normal: la clave ya está en tu portapapeles lista para pegar.

---

## Paso 6: registrar la clave en GitHub

Ahora vas a GitHub a decirle que reconozca tu computadora:

1. Entrá a **github.com** e iniciá sesión
2. Hacé clic en tu foto de perfil arriba a la derecha
3. Seleccioná **Settings**
4. En el menú de la izquierda buscá **SSH and GPG keys**
5. Hacé clic en el botón verde **New SSH key**
6. En el campo **Title** escribí algo que identifique tu computadora, por ejemplo `MacBook Personal` o `PC Windows`
7. En el campo **Key** pegá la clave que copiaste en el paso anterior (`Cmd + V` en Mac, `Ctrl + V` en Windows)
8. Hacé clic en **Add SSH key**
9. GitHub puede pedirte que confirmes tu contraseña

---

## Paso 7: verificar que la conexión funciona

Este es el momento de la verdad. Ejecutá este comando (es igual en Mac y Windows):

```bash
ssh -T git@github.com
```

La primera vez te va a preguntar si confiás en el servidor de GitHub:

```
Are you sure you want to continue connecting (yes/no)?
```

Escribí `yes` y presioná Enter. Si todo está bien, vas a ver un mensaje como:

```
Hi tu-usuario! You've successfully authenticated, but GitHub does not provide shell access.
```

Ese mensaje confirma que la conexión está funcionando. La parte que dice "does not provide shell access" es normal y no es un error.

---

## ¿Qué pasa si algo no funciona?

Lo más común es que algún paso haya quedado incompleto. Antes de entrar en pánico, revisá estas cosas en orden:

- ¿Ejecutaste el comando del agente SSH antes de agregar la clave?
- ¿Copiaste la clave pública (el archivo `.pub`) y no la privada?
- ¿La clave que pegaste en GitHub no tiene espacios extra al principio o al final?

Si después de revisar todo sigue sin funcionar, volvé al principio y repetí cada paso con calma. Es completamente normal necesitar más de un intento.

---

## ¿Qué sigue?

Con la conexión SSH configurada, ya podés vincular tus repositorios locales con GitHub y empezar a subir tu código. Eso lo vemos en el próximo tutorial, donde conectamos el repo local con GitHub y hacemos nuestro primer `git push`.

Tomátelo con calma. Este es uno de los pasos más técnicos de toda la configuración, y una vez que lo tenés resuelto no lo volvés a pensar nunca más.