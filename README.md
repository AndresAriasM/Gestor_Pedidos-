# Sistema de Gestión de Inventario

## Enlace deirecto al proyecto:
https://invetra.vercel.app/login

## Descripción

Este es un sistema de gestión de inventario construido con **Next.js** como framework principal para el frontend y backend. La arquitectura implementada sigue un enfoque por capas, asegurando una separación clara de responsabilidades. Incluye autenticación y autorización basadas en roles para usuarios con distintos permisos (vendedor, bodega y administrador). El sistema está diseñado para ser escalable, seguro y fácil de mantener, con actualizaciones en tiempo real para mantener sincronizados los datos.

## Características Principales

- **Gestión de Estado**: Incluye estado global mediante \`AuthContext\` y estado local con \`useState\`.
- **Rutas Protegidas**: Redirección y protección de rutas basada en roles utilizando Next.js App Router.
- **Diseño Modular**: Componentes reutilizables, separación de responsabilidades y consistencia en la UI.
- **Actualización en Tiempo Real**: Polling cada 5 segundos para datos críticos.
- **Conexión Persistente** a MongoDB usando un patrón singleton, optimización de índices, validaciones robustas y seguridad mejorada.

## Arquitectura

La arquitectura del sistema sigue un enfoque por capas:
- **Presentación**: Vistas responsivas y protegidas por roles para vendedores, personal de bodega y administradores.
- **Lógica de Negocio**: Controladores y servicios que manejan la lógica del sistema, incluyendo validaciones, gestión de pedidos y control de inventario.
- **Acceso a Datos**: Modelos definidos con Mongoose para gestionar productos, usuarios y pedidos, con validaciones y relaciones entre colecciones.

## Instalación

1. Clona este repositorio:
   \`\`\`bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   \`\`\`

2. Instala las dependencias:
   \`\`\`bash
   npm install
   \`\`\`

3. Configura las variables de entorno en un archivo \`.env\` siguiendo el ejemplo de \`.env.example\`.

4. Inicia la aplicación en modo de desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`

## Uso

El sistema de gestión de inventario incluye vistas específicas para cada rol de usuario:

### Vistas
1. **Vendedor**:
   - Panel superior con bienvenida y logout.
   - Sistema de pestañas: \`Búsqueda de Productos\` y \`Mis Pedidos\`.
   - Búsqueda en tiempo real, carrito de compras y notificaciones de éxito.

2. **Bodega**:
   - Panel superior con bienvenida y logout.
   - Sistema Kanban para gestionar el estado de pedidos con funcionalidad de \`drag & drop\`.
   - Códigos de color para identificar el estado de los pedidos.

3. **Administración**:
   - Gestión de usuarios, productos e inventario desde un panel centralizado.

## Contribución

1. Haz un fork del proyecto.
2. Crea una nueva rama para tu funcionalidad:
   \`\`\`bash
   git checkout -b nueva-funcionalidad
   \`\`\`
3. Realiza tus cambios y haz commit:
   \`\`\`bash
   git commit -m 'Añadida nueva funcionalidad'
   \`\`\`

4. Envía tus cambios:
   \`\`\`bash
   git push origin nueva-funcionalidad
   \`\`\`
5. Crea un Pull Request para revisión.

