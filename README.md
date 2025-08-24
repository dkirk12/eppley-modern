# Eppley Modern React Project

This project is a React-based web application for Eppley Laboratory. You can run it locally for development or serve a production build remotely.

---

## Local Development

### Prerequisites
- Node.js (v16 or later recommended)
- npm (comes with Node.js)

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/dkirk12/eppley-modern.git
   cd eppley-modern
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the development server**
   ```sh
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

---

## Production Build (Remote Hosting)

1. **Build the app**
   ```sh
   npm run build
   ```
   This creates a `build/` folder with static files.

2. **Serve the build locally (for testing)**
   ```sh
   npm install -g serve
   serve -s build
   ```
   Open the provided local URL (e.g., http://localhost:5000).

3. **Deploy Remotely**
   - Upload the contents of the `build/` folder to your web server or static hosting (e.g., Netlify, Vercel, GitHub Pages, S3, etc.).
   - Ensure your server is configured to serve `index.html` for all routes (for React Router support).

---

## Troubleshooting
- **Blank screen when opening build/index.html directly:** Use a local server (see above) instead of opening the file directly.
- **Asset loading issues:** Make sure the `homepage` field in `package.json` is set to `.` for local builds.

---

For questions or issues, contact the repository owner.
