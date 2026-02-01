# Pastelería Bella - Ecommerce V1

Ecommerce completo para pastelería con Next.js, PostgreSQL, Prisma y Tailwind.

## Stack Tecnológico

- Next.js 14+ (App Router)
- PostgreSQL + Prisma
- Tailwind CSS
- TypeScript estricto
- Zod para validación
- bcryptjs para passwords

## Configuración Inicial

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar base de datos

Copia `.env.local.example` a `.env.local` y configura tu `DATABASE_URL`:

```bash
cp .env.local.example .env.local
```

Edita `.env.local` con tu conexión PostgreSQL:

```
DATABASE_URL="postgresql://usuario:password@localhost:5432/pasteleria_bella?schema=public"
SESSION_SECRET="tu-secreto-seguro-aqui"
```

### 3. Ejecutar migraciones y seed

```bash
# Generar cliente Prisma
npm run db:generate

# Ejecutar migraciones
npm run db:migrate

# Ejecutar seed (crea usuario admin y productos de ejemplo)
npm run db:seed
```

### 4. Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Credenciales de Prueba

Después de ejecutar el seed:

- **Email**: `admin@pasteleriabella.cl`
- **Password**: `admin123`

## Estructura del Proyecto

```
app/
├── (cliente)/          # Rutas cliente
├── (admin)/            # Rutas admin
└── api/                # API Routes

components/
├── ui/                 # Componentes reutilizables
└── shared/             # Componentes compartidos

lib/
├── prisma.ts           # Cliente Prisma singleton
├── auth.ts             # Utilidades autenticación
├── rbac.ts             # Helpers RBAC
└── validations.ts      # Schemas Zod

prisma/
├── schema.prisma       # Modelos DB
└── seed.ts             # Datos iniciales
```

## Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run db:generate` - Generar cliente Prisma
- `npm run db:migrate` - Ejecutar migraciones
- `npm run db:seed` - Ejecutar seed
- `npm run db:studio` - Abrir Prisma Studio

## Commits del Proyecto

1. ✅ **COMMIT 1**: Bootstrap + Prisma + Home con productos desde DB
2. ⏳ **COMMIT 2**: Auth real + RBAC + /admin protegido
3. ⏳ **COMMIT 3**: Catálogo + Carrito
4. ⏳ **COMMIT 4**: Checkout + Pago MOCK + Inventario
5. ⏳ **COMMIT 5**: Backoffice completo

## Reglas del Proyecto

Ver `.cursorrules` para reglas completas del proyecto.
