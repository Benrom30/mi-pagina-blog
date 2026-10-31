---
title: "Primeros pasos en Git"
date: 2026-10-27
weight: 1
draft: false
---

Git es una herramienta que registra los cambios que hacés en tu código a lo largo del tiempo. Podés pensar en él como un historial de versiones: si en algún momento algo se rompe, podés volver atrás. Si trabajás en equipo, cada persona puede trabajar en su parte sin pisar el trabajo de los demás.

Esta guía es una introducción a los conceptos principales. Cada tema lo vamos a desarrollar en profundidad en tutoriales separados.

---

## Tipos de configuración en Git

Una de las primeras cosas que hay que entender es que no todos los comandos de Git se usan de la misma manera ni con la misma frecuencia. Hay tres tipos de configuración según cuándo se ejecutan:

**Configuración global (una sola vez por computadora):** Son ajustes que aplican a todos tus proyectos, como tu nombre y tu email. Los configurás una vez cuando instalás Git en tu máquina y no volvés a tocarlos salvo que cambies de computadora o de email.

**Configuración por repositorio (una sola vez por proyecto):** Cuando arrancás un proyecto nuevo, hay que decirle a Git que empiece a monitorearlo. Esto se hace una vez por carpeta de proyecto. Si el proyecto ya existe en GitHub, hay una variante para traerlo a tu computadora en vez de crearlo desde cero.

**Comandos del flujo diario (cada vez que trabajás):** Son los que usás todo el tiempo: guardar los cambios en tu computadora, ver qué modificaste, subir todo a GitHub. Este es el ciclo que vas a repetir en cada sesión de trabajo.

---

## ¿Qué significa trabajar "en local"?

Cuando hablamos de **local** nos referimos a tu propia computadora. Todo lo que hacés en tus archivos existe primero ahí. Nadie más lo ve hasta que lo subís a GitHub.

**GitHub** es el servidor remoto: el lugar en internet donde se guarda una copia de tu proyecto. Podés trabajar sin conexión, hacer todos los cambios que quieras en local, y recién subirlos cuando tengas internet.

Esta separación entre local y remoto es clave para entender cómo funciona Git.

---

## Las dos formas de conectarse a GitHub

Para subir y bajar código entre tu computadora y GitHub, hay dos formas de autenticarte:

**HTTPS:** Es la forma más simple de configurar al principio. Usás tu usuario y contraseña de GitHub (o un token de acceso). El problema es que cada vez que subís cambios te puede pedir que te identifiques de nuevo, lo que se vuelve incómodo con el tiempo.

**SSH:** Usás un par de claves criptográficas — una privada que queda en tu computadora y una pública que registrás en GitHub. Una vez configurado, nunca más te pide contraseña. Es más seguro y más cómodo para el uso diario.

**¿Por qué es mejor SSH?** Porque la autenticación es automática, no depende de contraseñas que podés olvidar o que pueden ser comprometidas, y es el estándar que usan los desarrolladores profesionales. La configuración inicial lleva unos minutos pero vale la pena: la hacés una vez y no la volvés a pensar.

---

## Ramas y merge: una introducción

A medida que tu proyecto crece, vas a necesitar trabajar en cosas nuevas sin arriesgarte a romper lo que ya funciona. Para eso existen las **ramas**.

Una rama es una copia paralela de tu proyecto donde podés experimentar libremente. La rama principal se llama `main` y es la versión "oficial" de tu sitio. Cuando querés agregar algo nuevo, creás una rama separada, trabajás ahí, y cuando estás conforme lo integrás de vuelta a `main`.

Esa integración se llama **merge**. Git intenta combinar los cambios automáticamente. Cuando dos personas modificaron el mismo archivo en el mismo lugar, se genera un **conflicto** que hay que resolver manualmente. Es algo normal y tiene su propio flujo de trabajo que vamos a ver en detalle más adelante.

Por ahora lo importante es entender la idea: las ramas te permiten trabajar con seguridad, y el merge es la forma de unir ese trabajo al proyecto principal.w