# Eppley Modern

This is a React-based web application. Follow the instructions below to run the site locally.

## Prerequisites
- Node.js (v16 or later recommended)
- npm (comes with Node.js)

## Getting Started

1. **Clone the repository**

   If you have access to the remote repository:
   ```sh
   git clone https://github.com/dkirk12/eppley-modern.git
   cd eppley-modern
   ```
   Or, if you have a zip file, extract it and open the folder in your terminal.

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Start the development server**

   ```sh
   npm start
   ```

   The site will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/` - Source code
  - `components/` - Reusable React components
  - `pages/` - Page components
- `public/` - Static assets

## Creating a Zip for Distribution

To create a zip file of the project (excluding node_modules and build artifacts):

### On Windows (PowerShell)
```powershell
Compress-Archive -Path * -DestinationPath eppley-modern.zip -Force -CompressionLevel Optimal -Exclude node_modules,build,dist,.git
```

### On Mac/Linux
```sh
zip -r eppley-modern.zip . -x 'node_modules/*' -x 'build/*' -x 'dist/*' -x '.git/*'
```

Share the `eppley-modern.zip` file. Recipients can extract it and follow the steps above to run the site locally.

---

For any issues, contact the repository owner.
