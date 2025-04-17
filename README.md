# Instrucciones de Implementación - Template Dinámicas del Norte

## Desarrollado por: Enlaces Digitales

Este documento contiene las instrucciones para implementar correctamente el template de "Dinámicas del Norte" en Shopify.

## Estructura de Archivos

El template está organizado en la siguiente estructura de carpetas:

```
├── assets/
│   ├── theme.css
│   └── theme.js
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/
│   └── theme.liquid
├── locales/
│   └── es.default.json
├── sections/
│   ├── countdown.liquid
│   ├── hero-sorteo.liquid
│   ├── beneficios-sorteo.liquid
│   ├── tabla-puestos.liquid
│   ├── testimonios-sorteo.liquid
│   ├── sobre-nosotros.liquid
│   └── footer-sorteo.liquid
├── snippets/
│   ├── whatsapp-icon.liquid
│   ├── facebook-icon.liquid
│   └── instagram-icon.liquid
└── templates/
    └── page.landing.liquid
```

## Pasos para la Implementación

### 1. Crear un nuevo tema en Shopify

1. Accede al panel de administración de tu tienda Shopify
2. Ve a "Tienda online" > "Temas"
3. Haz clic en "Agregar tema" > "Subir tema"

### 2. Preparar los archivos

1. Crea las carpetas según la estructura mostrada arriba
2. Coloca cada archivo en su ubicación correspondiente
3. Comprime toda la estructura en un archivo .zip

### 3. Subir el tema

1. Sube el archivo .zip a Shopify desde el panel de temas
2. Espera a que la instalación se complete

### 4. Configurar el tema

1. Haz clic en "Personalizar" después de subir el tema
2. Configura los colores, tipografías y otros ajustes según las necesidades de Dinámicas del Norte

### 5. Subir las imágenes necesarias

1. Prepara las siguientes imágenes:
   - Logo (PNG con fondo transparente)
   - Imagen de fondo para la sección Hero
   - Imagen para la sección de Beneficios (personas mostrando dinero ganado)
   - Imagen para la sección Sobre Nosotros (Cesar y Jonathan)
   
2. Sube estas imágenes desde el editor de temas en cada sección correspondiente

### 6. Crear la página para la landing

1. Ve a "Páginas" en el panel de administración de Shopify
2. Crea una nueva página (Ej. "Sorteos Diarios")
3. En el selector de templates, selecciona "page.landing"
4. Guarda la página

### 7. Configurar los enlaces de WhatsApp

1. Personaliza cada botón de WhatsApp con el número correcto
2. El formato recomendado es: `https://wa.me/573XXXXXXXXX?text=Hola,%20quiero%20participar%20en%20los%20sorteos`

### 8. Personalizar la tabla de puestos

Si necesitas modificar qué números están disponibles/no disponibles en la tabla de puestos:
1. Abre el archivo `sections/tabla-puestos.liquid`
2. Busca la condición que muestra los números disponibles (línea 7-9 aproximadamente)
3. Modifica los números según sea necesario

## Notas Importantes

- **Contador regresivo**: Se reinicia a 24 horas cada vez que se recarga la página. Si necesitas un contador fijo, deberás modificar el archivo `theme.js`.
- **Tema responsive**: Prueba la landing en dispositivos móviles para asegurarte de que todo se visualice correctamente.
- **Font Awesome**: El tema utiliza Font Awesome para los iconos. Asegúrate de que la conexión CDN funciona correctamente.

## Soporte

Para cualquier duda o problema relacionado con la implementación, contacta a Enlaces Digitales:

- Email: soporte@enlacesdigitales.com
- WhatsApp: +57 XXX XXX XXXX

---

© 2025 Enlaces Digitales. Todos los derechos reservados.