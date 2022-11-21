# PDF Viewer

This is a simple PDF viewer for the web which can let users sign the PDF document.

### 👷 Some features are working on:

- [ ] Rendering PDFs
- [ ] Editing PDFs
- [ ] Saving PDFs
- [x] Authentication

### 🌐 Demo

- [Railway](https://pdf-viewer-production.up.railway.app)
- [Vercel](https://pdf-viewer-theta.vercel.app)

## Development

### 🔨 Generate `.env` file

Add your DB connection string and Google OAuth credentials.

```bash
cp .env.example .env
```

### 📦 Install dependencies

Using [pnpm](https://pnpm.io/) and also generate `prisma` client and `husky` hooks.

```bash
pnpm install
```

### 🚀 Start development server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```bash
pnpm dev
```

## Folder Structure

- `components` - React components.
- `lib` - Prisma client.
- `pages` - Next.js pages
- `helpers` - Some helper functions (api).
- `hooks` - React hooks.
- `server` - Some server-side functions.
- `styles` - Global styles.
- `shared` - Shared types.
- `utils` - Some utility functions.

## Languages & tools

- [x] [Next.js](https://nextjs.org/)
- [x] [Prisma](https://www.prisma.io/) - Database ORM
- [x] [React](https://reactjs.org/)
- [x] [Tailwind CSS](https://tailwindcss.com/)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] react-pdf
- [x] [framer-motion](https://www.framer.com/motion/) - Animation library
- [x] [next-auth](https://next-auth.js.org/) - To implement OAuth
- [x] react-signature-canvas
- [x] [zod](https://zod.dev) - TypeScript-first schema validation

## Third-party services

- [x] [Railway](https://railway.app/) - Deployment
- [x] [Vercel](https://vercel.com/) - Deployment
- [x] [Google OAuth](https://developers.google.com/identity/protocols/oauth2) - Authentication

## 📄 License

Under [MIT](LICENSE)
