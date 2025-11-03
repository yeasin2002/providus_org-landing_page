# Project Structure

## Directory Organization

```
src/
├── app/                      # Next.js App Router
│   ├── [locale]/            # Internationalized routes
│   │   ├── layout.tsx       # Root layout per locale
│   │   ├── page.tsx         # Home page
│   │   └── [routes]/        # Feature routes
│   ├── globals.css          # Global styles and Tailwind directives
│   └── favicon.ico          # App favicon
├── assets/                   # Static assets (images, logos)
├── components/              # React components
│   ├── shared/              # Shared/common components
│   └── ui/                  # shadcn/ui components
├── i18n/                    # Internationalization config
│   ├── locales/             # Translation files
│   ├── navigation.ts        # i18n navigation helpers
│   ├── request.ts           # Server-side i18n
│   └── routing.ts           # Locale routing config
├── lib/                     # Utility functions and helpers
│   ├── fonts.ts             # Font configurations
│   └── utils.ts             # Common utilities (cn helper)
└── middleware.ts            # Next.js middleware (i18n routing)

public/                      # Public static files
```

## Key Routes

- `/` - Landing page (home)
- `/join` - Church registration form
- `/join/thank-you` - Registration confirmation page
- `/program/[token]` - Token-protected program submission form (future)

## Conventions

### Routing

- All user-facing routes are under `app/[locale]/` for i18n support
- Use Next.js App Router conventions (layout.tsx, page.tsx, loading.tsx, etc.)
- Middleware handles locale detection and routing
- Default locale is `en`, supported locales: `en`, `bn`

### Components

- UI components from shadcn/ui go in `components/ui/`
- Reusable components go in `components/reUsabale/`
- Page-specific components organized by feature (e.g., `components/home/`, `components/navbar/`)
- Use the `cn()` utility from `@/lib/utils` for conditional class merging

### Data & Backend

- All data stored in Supabase
  - `churches` table: Registration data
  - `projects` table: Program submissions
  - Storage buckets for uploaded media
- Use Supabase client (`@supabase/ssr`) for database operations
- Email notifications via Brevo API (welcome emails, submission confirmations)
- Static data (like countries list) in `src/data/`

### Media Guidelines

- Photos: Required for program submissions, max 5MB, JPG/PNG/WebP
- Videos: Optional, max 50MB or YouTube/Vimeo embed link
- Store in Supabase storage buckets
- Validate file types and sizes on upload
- Use Next.js Image component for optimization



### Styling

- Tailwind utility classes for styling
- CSS variables for theming (defined in globals.css)
- Component variants using class-variance-authority
- Responsive design: mobile-first approach
- Support for RTL languages (future)

### Internationalization

- Translation files in `i18n/locales/[locale]/`
- Use next-intl hooks for translations in components
- Default locale: `en`, supported: `en`, `bn`
- Build with language file structure for easy expansion

### Imports

- Use `@/` path alias for imports from `src/`
- Organize imports (Biome handles this automatically)

### Code Style

- 2-space indentation
- Biome handles formatting and linting
- Follow recommended Next.js and React patterns

### Security & Privacy

- Token-based access for program submission forms
- Never expose church email or personal contact info publicly
- Validate file types and sizes on upload
- Use environment variables for API keys (Supabase, Brevo)
- Server-side validation for all form submissions
