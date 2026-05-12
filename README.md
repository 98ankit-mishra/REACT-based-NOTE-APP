# Notes App (React + Vite)

A simple notes app built with React and Vite.

You can:
- Add a note title and description
- View notes instantly in the recent notes panel
- Delete any note

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/98ankit-mishra/REACT-based-NOTE-APP.git
cd REACT-based-NOTE-APP
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open the app in your browser using the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```text
13-notes-app/
	public/
	src/
		assets/
		App.jsx
		index.css
		main.jsx
	index.html
	package.json
	vite.config.js
```

## Common Issue (Windows + OneDrive)

If you get this error while starting dev server:

```text
EPERM: operation not permitted, rmdir ...\node_modules\.vite\deps
```

It means the Vite cache folder is locked (commonly by OneDrive sync).

Quick fix (PowerShell):

```powershell
icacls "node_modules\.vite\deps" /grant:r "$env:USERNAME`:F" /t /c 2>$null
Remove-Item -Path "node_modules\.vite\deps" -Force -Recurse -ErrorAction SilentlyContinue
npm run dev
```

Permanent fix:
- Move project outside OneDrive synced folders
- Or exclude `node_modules` from sync

## Author

Ankit Mishra
