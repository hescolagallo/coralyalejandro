# 💒 Página Web de Boda - Coral y Alejandro

Una hermosa página web de boda moderna y elegante creada para Coral y Alejandro, con fecha de boda el **3 de enero de 2026** en Barcelona.

## ✨ Características

- **Diseño Elegante**: Estilo minimalista en blanco, negro y azules pastel
- **Diseño Responsive**: Se adapta perfectamente a todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones
- **Formulario RSVP**: Sistema de confirmación de asistencia funcional
- **Menú Móvil**: Navegación optimizada para dispositivos móviles
- **Funcionalidad de Copia**: Botón para copiar número de cuenta bancaria
- **Animaciones**: Efectos visuales sutiles y elegantes

## 🎨 Paleta de Colores

- **Primarios**: Blanco (#ffffff) y Negro (#000000)
- **Secundarios**: Azules pastel
  - Azul claro: #87CEEB
  - Azul muy claro: #B0E0E6
  - Azul muy suave: #E6F3FF

## 📅 Información de la Boda

- **Fecha**: 3 de enero de 2026
- **Ceremonia**: 12:00 h - Parroquia de Sant Vicenç de Sarrià
- **Celebración**: 14:00 h - La Centenaria, Gavà
- **Lugar**: Barcelona

## 🚀 Cómo Usar

### 1. Abrir la Página Web
Simplemente abre el archivo `index.html` en tu navegador web favorito.

### 2. Navegación
- **Header Fijo**: El menú de navegación permanece visible al hacer scroll
- **Enlaces Internos**: Haz clic en los enlaces del menú para navegar a las diferentes secciones
- **Menú Móvil**: En dispositivos móviles, usa el botón "Menu" para acceder a la navegación

### 3. Formulario RSVP
- Completa todos los campos obligatorios marcados con *
- Selecciona si asistirás y si usarás el autocar
- Incluye cualquier intolerancia alimentaria
- Sugiere una canción para la boda
- Haz clic en "Enviar" para confirmar

### 4. Copiar Número de Cuenta
- Haz clic en el botón "Copiar" junto al número de cuenta bancaria
- El número se copiará automáticamente al portapapeles

## 📁 Estructura de Archivos

```
Web-Boda-Coral-Alejandro/
├── index.html          # Página principal HTML
├── styles.css          # Estilos CSS con nueva paleta de colores
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
├── INSTRUCCIONES-PUBLICACION.md  # Guía para publicar online
├── 1.1.jpeg           # Imagen de fondo (tu imagen personalizada)
├── 3.1.jpeg           # Imagen adicional disponible
```

## 🎨 Personalización

### Cambiar Colores
Los colores principales están definidos en `styles.css`:
- **Color Negro Principal**: `#000000`
- **Color Blanco**: `#ffffff`
- **Azules Pastel**: `#87CEEB`, `#B0E0E6`, `#E6F3FF`

### Cambiar Tipografías
Las fuentes se cargan desde Google Fonts:
- **Títulos**: Playfair Display (elegante y romántica)
- **Texto**: Montserrat (moderna y legible)

### Modificar Contenido
Edita el archivo `index.html` para cambiar:
- Nombres y fechas
- Direcciones y horarios
- Texto del formulario
- Información de contacto

### Añadir Imágenes
1. Coloca tu imagen de fondo como `hero-image.jpg`
2. O cambia la ruta en el HTML: `<img src="tu-imagen.jpg" alt="Coral y Alejandro" class="hero-img">`

## 📱 Responsive Design

La página web se adapta automáticamente a:
- **Desktop**: Pantallas grandes con navegación horizontal
- **Tablet**: Diseño intermedio optimizado
- **Móvil**: Navegación vertical con menú hamburguesa

## 🔧 Funcionalidades Técnicas

### JavaScript
- **Menú Móvil**: Toggle del menú de navegación
- **Scroll Suave**: Navegación entre secciones
- **Validación de Formulario**: Verificación de campos obligatorios
- **Copia al Portapapeles**: Función para copiar número de cuenta
- **Animaciones**: Efectos visuales al hacer scroll
- **Efectos de Header**: Cambios visuales del header al hacer scroll

### CSS
- **Grid y Flexbox**: Layouts modernos y responsive
- **Transiciones**: Animaciones suaves en hover y focus
- **Backdrop Filter**: Efectos de desenfoque modernos
- **Variables CSS**: Fácil personalización de colores

## 🌐 Despliegue

### Opción 1: Hosting Local
1. Abre `index.html` en tu navegador
2. Perfecto para pruebas y desarrollo

### Opción 2: Hosting Web
1. Sube todos los archivos a tu servidor web
2. Asegúrate de que `hero-image.jpg` esté en la misma carpeta
3. La página funcionará en cualquier servidor web estático

### Opción 3: GitHub Pages
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages en la configuración del repositorio

### Opción 4: Netlify (Recomendado)
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto
3. Tu sitio estará online en segundos

## 📧 Personalización del Formulario

El formulario RSVP actualmente simula el envío. Para conectarlo a un backend real:

1. **EmailJS**: Servicio gratuito para envío de emails
2. **Netlify Forms**: Si usas Netlify para hosting
3. **Google Forms**: Integración con Google Forms
4. **Backend Personalizado**: API REST o servidor Node.js

## 🎵 Añadir Música de Fondo

Para añadir música de fondo:
```html
<audio autoplay loop>
    <source src="tu-cancion.mp3" type="audio/mpeg">
</audio>
```

## 📊 Analytics

Para añadir Google Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Solución de Problemas

### La página no se ve bien
- Verifica que todos los archivos estén en la misma carpeta
- Asegúrate de que `hero-image.jpg` existe
- Comprueba que tu navegador soporte CSS Grid y Flexbox

### El menú móvil no funciona
- Verifica que `script.js` esté correctamente enlazado
- Abre la consola del navegador para ver errores JavaScript

### Los estilos no se cargan
- Verifica que `styles.css` esté en la misma carpeta
- Comprueba que la ruta en el HTML sea correcta

## 📞 Soporte

Si tienes problemas o quieres personalizar algo específico:
1. Revisa la consola del navegador para errores
2. Verifica que todos los archivos estén presentes
3. Asegúrate de que las rutas sean correctas

## 🎊 ¡Disfruta de tu Boda!

Esta página web está diseñada para hacer que tu día especial sea aún más memorable. ¡Que tengas una boda maravillosa!

---

**Creado con ❤️ para Coral y Alejandro - 3 de enero 2026**
