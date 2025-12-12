# Guía de Gestión de Landing Page para Autores

Esta guía te ayudará a personalizar tu sitio web, actualizar imágenes, textos y usarlo como plantilla para futuros libros.

## 1. Gestión de Imágenes y Archivos

Todas las imágenes se encuentran en la carpeta `public`. Para actualizar cualquier imagen:
1.  Coloca tu nuevo archivo en la carpeta `public` (junto al `package.json` y las otras carpetas).
2.  Asegúrate de saber el nombre exacto del archivo (ej: `mi-nueva-portada.jpg`).

### Actualizar Carátula del Libro
**Archivo:** `components/book-section.tsx`
Busca esta línea y cambia el nombre del archivo:
```tsx
<img src="/umbrales-cover.jpg" ... />
```
*Cambia `/umbrales-cover.jpg` por `/tu-nueva-foto.jpg`.*

### Actualizar Foto del Autor (Sección Principal)
**Archivo:** `components/author-section.tsx`
Busca esta línea:
```tsx
<img src="/autor1.jpeg" ... />
```

### Actualizar Carrusel de Imágenes
**Archivo:** `components/gallery-carousel.tsx`
Al inicio del archivo encontrarás una lista llamada `images`. Modifica el `src` (archivo) y el `title` (nombre que se muestra sobre la imagen):
```tsx
const images = [
  {
    src: "/mi-historia-1.jpg", // Tu imagen en carpeta public
    alt: "Descripción accesibilidad",
    title: "Nombre del Cuento" // Título visible
  },
  // ...
]
```

### Actualizar Video Trailer
**Archivo:** `components/video-section.tsx`
1. Sube tu video `.mp4` a la carpeta `public`.
2. Busca esta línea y cambia el nombre:
```tsx
<source src="/Video_Umbrales.mp4" type="video/mp4" />
```

---

## 2. Actualizar Información de Contacto

**Archivo:** `components/contact-section.tsx`

### WhatsApp
Busca el enlace de WhatsApp y cambia el número (formato internacional sin `+`):
```tsx
<a href="https://wa.me/573006104370" ... >
```

### Email
Busca el enlace `mailto` y el texto visible:
```tsx
<a href="mailto:chefrei@gmail.com">chefrei@gmail.com</a>
```

---

## 3. Personalización de Textos y Títulos

### Título Principal y Subtítulo
**Archivo:** `components/hero.tsx`
Aquí puedes cambiar "Umbrales", el nombre del autor y la frase descriptiva.

### Descripciones del Libro
**Archivo:** `components/book-section.tsx`
Busca los párrafos de texto dentro de `<p>` para editar la sinopsis.

### Biografía del Autor
**Archivo:** `components/author-section.tsx`
Edita el texto dentro de los párrafos para actualizar la biografía.

---

## 4. Cambiar Colores (Tema)

Este proyecto usa **Tailwind CSS** y variables CSS para los colores.
**Archivo:** `app/globals.css` (o `styles/globals.css` dependiendo de la estructura base).

Busca la sección `:root` para el modo claro y `.dark` para el modo oscuro. Los colores principales son:

*   `--primary`: Color principal (botones, destacados).
*   `--secondary`: Color secundario (fondos suaves).
*   `--accent`: Color de acento (detalles, líneas decorativas).
*   `--background`: Color de fondo de la página.
*   `--foreground`: Color del texto principal.

Los valores suelen estar en formato HSL (Matiz Saturation% Luminosidad%).
*Ejemplo:* Para cambiar el color principal a rojo, cambiarías `--primary: 0 100% 50%;`.

---

## 5. Reutilizar como Plantilla para Otro Libro

1.  Copia toda la carpeta del proyecto y cámbiale el nombre.
2.  Elimina las imágenes viejas de la carpeta `public` y pon las nuevas.
3.  Sigue los pasos anteriores (1, 2 y 3) para actualizar títulos, portadas y textos.
4.  Si quieres cambiar el estilo visual, ajusta los colores en el paso 4.
