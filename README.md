### PLEASE, NOTE!!!

The project set up was made under the **'George "G" Le'** guide,
available on YouTube: [LINK](https://www.youtube.com/watch?v=5vdooX7g7AE)

## Setup

Requirements:
- Node.js `20.9.0+`
- npm

Bootstrap the project:

```bash
npm run setup
```

What it does:
- checks `node` and `npm`
- verifies Node.js version
- creates `.env.local` from `.env.example` if no local env exists
- installs dependencies with `npm ci`
- verifies `sharp` is available

Start development:

```bash
npm run dev
```
