---
title: "Trabajando en local con Git"
date: 2026-10-26
draft: false
---

Antes de conectarte a GitHub o pensar en subir código a internet, hay un paso previo que es fundamental entender: trabajar en local. Todo empieza acá, en tu propia computadora, antes de que nadie más vea tu código.

Si no leíste el tutorial anterior sobre los primeros pasos en Git, te recomiendo empezar por ahí antes de continuar.

---

## ¿Qué significa trabajar en local?

**Local** significa tu propia computadora. Cuando trabajás en local, todos los cambios que hacés en tus archivos, todos los comandos que ejecutás, todo queda guardado únicamente en tu máquina. No hay internet de por medio, no hay GitHub, no hay nadie más que pueda ver lo que estás haciendo.

Esto es una ventaja enorme: podés experimentar, romper cosas, probar ideas y equivocarte sin consecuencias. Git va registrando todo ese historial en tu computadora, y vos decidís cuándo y qué subir al mundo exterior.

---

## Configuración inicial: decirle a Git quién sos

Antes de empezar a usar Git en tu computadora, hay que hacer una configuración que se realiza **una sola vez**. Git necesita saber tu nombre y tu email para registrar quién hizo cada cambio en el código.

Estos dos comandos se ejecutan una sola vez por computadora. Si ya los ejecutaste cuando configuraste Git, no hace falta repetirlos.

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

El `--global` significa que esa configuración aplica a todos los proyectos de tu máquina. Reemplazá "Tu Nombre" y "tu@email.com" por tus datos reales.

---

## Iniciar un repositorio: git init

Una vez que tenés una carpeta con tu proyecto, el primer comando que ejecutás dentro de ella es:

```bash
git init
```

Esto le dice a Git "empezá a monitorear esta carpeta". A partir de ese momento, Git empieza a registrar cualquier cambio que hagas en los archivos dentro de esa carpeta.

Este comando también se ejecuta **una sola vez por proyecto**. No hace falta repetirlo cada vez que trabajás, solo la primera vez que arrancás un proyecto nuevo.

---

## Guardar los cambios: git add y git commit

Este es el ciclo que vas a repetir cada vez que trabajés. Consta de dos pasos que siempre van juntos.

**Primero: seleccionar los cambios que querés guardar**

```bash
git add .
```

El punto `.` le dice a Git que seleccione todos los archivos que modificaste. Es como decirle "quiero guardar todo lo que cambié". Si solo querés guardar un archivo específico, podés reemplazar el punto por el nombre del archivo.

**Segundo: guardar los cambios con un mensaje**

```bash
git commit -m "Descripción de lo que hiciste"
```

Un **commit** es una foto del estado de tu proyecto en ese momento. El mensaje entre comillas es para que en el futuro vos (o alguien más) entienda qué cambió. Por ejemplo: `git commit -m "Agrego la página de inicio"` o `git commit -m "Corrijo el error en el formulario de contacto"`.

Cuanto más descriptivo sea el mensaje, mejor. Con el tiempo vas a agradecer haber escrito mensajes claros cuando tengas que revisar el historial.

---

## Practicá estos comandos antes de seguir

No sigas adelante sin haber ejecutado estos tres comandos al menos una vez. La mejor manera de aprender Git es usándolo, no solo leerlo.

Creá una carpeta de prueba, escribí algo adentro, ejecutá `git init`, hacé un `git add .` y un `git commit -m "mi primer commit"`. Rompé cosas, volvé a empezar, repetí el ciclo. No hay manera de arruinar nada porque todo está en local: nadie más puede ver lo que hacés.

Si algo no te sale o no entendés un mensaje de error, volvé a leer este tutorial desde el principio. Es completamente normal necesitar releerlo varias veces. Git tiene una curva de aprendizaje y la única forma de superarla es con práctica y paciencia.

---

## ¿Qué sigue? Conectarse a GitHub

Una vez que te sentís cómodo trabajando en local, el siguiente paso es conectar tu computadora a GitHub para poder subir tu código a internet y tenerlo respaldado.

Esa conexión se hace a través de **claves SSH**, que es el método más seguro y cómodo para autenticarte con GitHub. La idea es que tu computadora y GitHub se reconozcan entre sí de forma automática, sin que tengas que escribir contraseñas cada vez.

La configuración de SSH se hace **una sola vez** y después funciona sola para siempre. No es complicada pero requiere seguir los pasos con calma y atención. En el próximo tutorial lo hacemos juntos, paso a paso.

Tomátelo con calma, repasá este tutorial cuantas veces necesites y asegurate de entender el flujo de local antes de avanzar. El aprendizaje de Git es acumulativo: cada concepto se apoya en el anterior.