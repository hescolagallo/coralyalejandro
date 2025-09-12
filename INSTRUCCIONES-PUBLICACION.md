# 🌐 Guía de Publicación - Página Web de Boda

## 📋 Pasos para Publicar tu Página Web

### Opción 1: Netlify (Recomendado - Gratis y Fácil)

1. **Preparar los archivos**
   - Asegúrate de que tienes todos estos archivos en una carpeta:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `hero-image.jpg` (tu imagen de fondo)

2. **Ir a Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Haz clic en "Sign up" y crea una cuenta gratuita

3. **Subir tu sitio**
   - En el dashboard de Netlify, arrastra y suelta la carpeta con tus archivos
   - O haz clic en "Deploy manually" y selecciona la carpeta

4. **Tu sitio estará online**
   - Netlify te dará una URL automática (ej: `amazing-wedding-123.netlify.app`)
   - Puedes personalizar la URL en Settings > Domain management

### Opción 2: GitHub Pages (Gratis)

1. **Crear repositorio en GitHub**
   - Ve a [github.com](https://github.com)
   - Crea un nuevo repositorio llamado `coral-alejandro-boda`

2. **Subir archivos**
   ```bash
   git init
   git add .
   git commit -m "Primera versión de la página web de boda"
   git remote add origin https://github.com/tu-usuario/coral-alejandro-boda.git
   git push -u origin main
   ```

3. **Activar GitHub Pages**
   - Ve a Settings > Pages
   - En Source, selecciona "Deploy from a branch"
   - Selecciona la rama "main"
   - Tu sitio estará en: `tu-usuario.github.io/coral-alejandro-boda`

### Opción 3: Vercel (Gratis y Rápido)

1. **Ir a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub

2. **Importar proyecto**
   - Haz clic en "New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente que es un sitio estático

3. **Desplegar**
   - Haz clic en "Deploy"
   - Tu sitio estará online en segundos

### Opción 4: Hosting Tradicional

1. **Comprar hosting**
   - Empresas recomendadas: Hostinger, SiteGround, Bluehost
   - Plan básico es suficiente (5-10€/mes)

2. **Subir archivos via FTP**
   - Usa FileZilla o similar
   - Sube todos los archivos a la carpeta `public_html`

3. **Configurar dominio**
   - Apunta tu dominio al hosting
   - Espera 24-48 horas para propagación

## 🔧 Configuración del Formulario

### Para que el formulario funcione realmente:

1. **EmailJS (Gratis)**
   ```html
   <!-- Añade esto en el <head> de index.html -->
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>
     emailjs.init("TU_USER_ID");
   </script>
   ```

2. **Netlify Forms (Si usas Netlify)**
   - Añade `netlify` al formulario:
   ```html
   <form class="rsvp-form" id="rsvpForm" netlify>
   ```

3. **Google Forms**
   - Crea un formulario en Google Forms
   - Copia el código de incrustación
   - Reemplaza el formulario actual

## 📱 Optimización para Móviles

### Verificar que funciona bien:

1. **Google Mobile-Friendly Test**
   - Ve a [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
   - Introduce tu URL
   - Debe mostrar "Page is mobile-friendly"

2. **Test en diferentes dispositivos**
   - Usa las herramientas de desarrollador del navegador
   - Prueba en iPhone, Android, tablet

## 🔍 SEO Básico

### Para que Google encuentre tu sitio:

1. **Meta tags en index.html**
   ```html
   <meta name="description" content="Página web de la boda de Coral y Alejandro - 3 de enero 2026 en Barcelona">
   <meta name="keywords" content="boda, Coral, Alejandro, Barcelona, 2026">
   <meta name="author" content="Coral y Alejandro">
   ```

2. **Google Search Console**
   - Ve a [search.google.com/search-console](https://search.google.com/search-console)
   - Añade tu sitio
   - Envía el sitemap

## 📊 Analytics

### Para ver visitas:

1. **Google Analytics**
   ```html
   <!-- Añade esto en el <head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Obtener ID de Google Analytics**
   - Ve a [analytics.google.com](https://analytics.google.com)
   - Crea una cuenta
   - Crea una propiedad para tu sitio web

## 🚀 Despliegue Rápido (5 minutos)

### Si quieres estar online YA:

1. **Ve a [netlify.com](https://netlify.com)**
2. **Crea cuenta gratuita**
3. **Arrastra tu carpeta del proyecto**
4. **¡Listo! Tu sitio estará online**

## 📞 Soporte

### Si tienes problemas:

1. **Verificar archivos**
   - Todos los archivos deben estar en la misma carpeta
   - Las rutas en HTML deben ser correctas

2. **Consola del navegador**
   - F12 → Console
   - Busca errores en rojo

3. **Verificar hosting**
   - Asegúrate de que subiste TODOS los archivos
   - Incluyendo la imagen `hero-image.jpg`

## 🎯 Próximos Pasos

1. **Elegir método de publicación**
2. **Subir archivos**
3. **Probar en diferentes dispositivos**
4. **Compartir la URL con invitados**
5. **Configurar formulario real (opcional)**

---

**¡Tu página web de boda estará online en minutos! 🎉**
