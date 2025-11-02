# Investor relations page

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/hubdogestors-projects/v0-investor-relations-page)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/i7M824yyGmI)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/hubdogestors-projects/v0-investor-relations-page](https://vercel.com/hubdogestors-projects/v0-investor-relations-page)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/i7M824yyGmI](https://v0.app/chat/i7M824yyGmI)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Development (npm)

Se você prefere usar `npm` (em vez de `pnpm`), aqui estão os passos para rodar o projeto localmente:

- Instalar dependências:

```powershell
npm install
```

- Rodar o servidor de desenvolvimento:

```powershell
npm run dev
```

- Build de produção e start local:

```powershell
npm run build
npm run start
```

Observações e troubleshooting:

- O projeto originalmente incluía um `pnpm-lock.yaml`. Se você estiver migrando para `npm`, remova esse arquivo para evitar confusões:

```powershell
Remove-Item pnpm-lock.yaml -ErrorAction SilentlyContinue
```

- Se o Next.js avisar sobre a versão do TypeScript, atualize para a versão mais recente com:

```powershell
npm install --save-dev typescript@latest @types/react@latest @types/react-dom@latest @types/node@latest
```

- No Windows PowerShell, para reinstalação limpa:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item pnpm-lock.yaml -ErrorAction SilentlyContinue
npm cache clean --force
npm install
```

Se quiser, eu posso adicionar um script `reinstall` ao `package.json` para automatizar a limpeza + instalação. Diga qual opção prefere.