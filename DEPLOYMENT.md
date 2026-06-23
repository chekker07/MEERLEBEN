# Deployment

MEERLEBEN ist eine standardisierte Next.js-Anwendung und kann ohne projektspezifische Umbauten bei Vercel oder auf einem Hostinger-Node.js-Hosting veröffentlicht werden.

## Vercel

1. In Vercel **Add New → Project** wählen.
2. Das GitHub-Repository `MEERLEBEN` importieren.
3. Vercel erkennt Next.js automatisch.
4. Die Standardwerte verwenden:
   - Install Command: `pnpm install`
   - Build Command: `pnpm build`
   - Output: automatisch
5. **Deploy** wählen.

Jeder spätere Push auf `main` erzeugt automatisch ein neues Production Deployment.

## Hostinger

Für einen Hostinger-Tarif mit Node.js-Unterstützung:

1. Das GitHub-Repository als Quelle verbinden oder das Repository auschecken.
2. Node.js 20 auswählen.
3. Folgende Befehle konfigurieren:
   - Install: `pnpm install`
   - Build: `pnpm build`
   - Start: `pnpm start`
4. Als Port die von Hostinger bereitgestellte `PORT`-Umgebungsvariable verwenden. Next.js berücksichtigt diese automatisch.

## Lokale Produktionsprüfung

```bash
pnpm install
pnpm build
pnpm start
```

Die Anwendung ist anschließend standardmäßig unter `http://localhost:3000` erreichbar.
