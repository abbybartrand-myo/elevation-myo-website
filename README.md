# Elevation Myofunctional Therapy Website

Professional website for Elevation Myofunctional Therapy - Abigail Bartrand, RDH
Located in Grand Junction, Colorado

## Project Overview

This is a modern, responsive website built with React + Vite featuring:
- **Home Page**: Hero section with Colorado mountain imagery, introduction to myofunctional therapy
- **Information Page**: Detailed information about services, treatment process, and FAQs
- **Contact Page**: Contact form with backend integration
- **Booking Page**: Appointment request form
- **Resources Page**: Educational materials and recommended reading
- **Backend API**: Node.js/Express server for form submissions with email notifications

## Technology Stack

- **Frontend**: React 18, Vite, React Router
- **Backend**: Node.js, Express, Nodemailer
- **Styling**: Custom CSS with Colorado-inspired color palette
- **Data Storage**: JSON file storage (can be upgraded to database later)

## Prerequisites

**IMPORTANT**: This project requires Node.js version 14 or higher.

Your current Node.js version is v12.22.9, which may cause issues. We recommend upgrading to Node.js 18 LTS or higher.

### Upgrade Node.js (Recommended)

**Option 1: Using NodeSource (Recommended)**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Option 2: Using NVM (Node Version Manager)**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

After upgrading, verify your Node.js version:
```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
```

## Installation

1. **Navigate to the project directory**:
   ```bash
   cd /home/jonah/myofunctional-website
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

## Running the Website Locally

You need to run **two separate terminals** - one for the frontend and one for the backend.

### Terminal 1: Start the Frontend (React + Vite)

```bash
cd /home/jonah/myofunctional-website
npm run dev
```

The frontend will be available at: **http://localhost:5173**

You should see output like:
```
VITE v4.5.14  ready in 523 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Terminal 2: Start the Backend (API Server)

```bash
cd /home/jonah/myofunctional-website
npm run server
```

The backend API will run on: **http://localhost:3001**

You should see output like:
```
✓ Server running on http://localhost:3001
✓ API endpoint: http://localhost:3001/api/contact
✓ Submissions stored in: /home/jonah/myofunctional-website/server/data/submissions.json
```

### Viewing the Website

1. Open your web browser
2. Navigate to: **http://localhost:5173**
3. The website should load with the home page

## Email Notifications Setup

The contact form sends email notifications to `contactelevationmyo@gmail.com` when someone submits a form.

### To Enable Email Notifications:

1. **Set up Gmail App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Sign in with the Gmail account (contactelevationmyo@gmail.com)
   - Create a new App Password for "Mail"
   - Copy the 16-character password

2. **Update the Server Configuration**:

   **Option A: Environment Variable (Recommended)**
   ```bash
   export EMAIL_PASSWORD="your-16-char-app-password"
   npm run server
   ```

   **Option B: Edit server/index.js**
   Open `/home/jonah/myofunctional-website/server/index.js` and replace:
   ```javascript
   pass: process.env.EMAIL_PASSWORD || 'YOUR_APP_PASSWORD_HERE'
   ```
   with:
   ```javascript
   pass: 'your-actual-app-password'
   ```

3. **Test Email Notifications**:
   - Submit a test form on the Contact or Booking page
   - Check that you receive an email notification

### Viewing Form Submissions

All form submissions are stored locally in:
```
/home/jonah/myofunctional-website/server/data/submissions.json
```

You can view all submissions by visiting:
```
http://localhost:3001/api/submissions
```

Or open the file directly:
```bash
cat /home/jonah/myofunctional-website/server/data/submissions.json
```

## Project Structure

```
myofunctional-website/
├── public/
│   ├── logo.svg                    # Placeholder logo (replace with your .png)
│   └── logo-placeholder.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── Footer.jsx             # Footer with contact info
│   │   └── ContactForm.jsx        # Reusable contact form
│   ├── pages/
│   │   ├── Home.jsx               # Home page
│   │   ├── Information.jsx        # Information page
│   │   ├── Contact.jsx            # Contact page
│   │   ├── Booking.jsx            # Booking page
│   │   └── Resources.jsx          # Resources page
│   ├── styles/
│   │   ├── global.css             # Global styles
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Information.css
│   │   ├── Contact.css
│   │   ├── Booking.css
│   │   ├── Resources.css
│   │   └── ContactForm.css
│   ├── App.jsx                    # Main app component with routing
│   └── main.jsx                   # Entry point
├── server/
│   ├── index.js                   # Express API server
│   └── data/
│       └── submissions.json       # Form submissions storage
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies
└── README.md                      # This file
```

## Customization

### Replacing the Logo

1. Place your logo file (PNG format) in the `/public` directory
2. Rename it to `logo.png` or update references in the code:
   - Update `src/components/Navbar.jsx` line with `.logo-image`
   - Update `index.html` favicon reference

### Updating Colors

The color scheme is defined in `/src/styles/global.css`:

```css
:root {
  --primary-color: #2C5F7D;      /* Mountain blue */
  --secondary-color: #7FB3D5;     /* Sky blue */
  --accent-color: #5FAD56;        /* Forest green */
}
```

### Adding Content

- **Home Page**: Edit `/src/pages/Home.jsx`
- **Information**: Edit `/src/pages/Information.jsx`
- **Resources**: Edit `/src/pages/Resources.jsx`
- **Contact Info**: Edit `/src/components/Footer.jsx`

## Building for Production

To create a production build:

```bash
npm run build
```

This creates optimized static files in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

## Deployment Options

### Frontend Deployment (Recommended: Netlify)

1. **Build the frontend**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Sign up at https://netlify.com
   - Drag and drop the `dist/` folder
   - Or connect your Git repository for automatic deployments

**Alternative**: Vercel, GitHub Pages, Cloudflare Pages

### Backend Deployment (Recommended: Render)

1. **Deploy to Render**:
   - Sign up at https://render.com
   - Create a new "Web Service"
   - Connect your repository
   - Set build command: `npm install`
   - Set start command: `node server/index.js`
   - Add environment variable: `EMAIL_PASSWORD=your-app-password`

2. **Update Frontend API URL**:
   After deploying backend, update the API URL in `/src/components/ContactForm.jsx`:
   ```javascript
   const response = await fetch('https://your-backend-url.onrender.com/api/contact', {
   ```

**Alternative**: Railway, Heroku, AWS

## Troubleshooting

### Port Already in Use

If you see "Port 5173 is already in use" or "Port 3001 is already in use":

```bash
# Find and kill the process
lsof -ti:5173 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### Frontend Not Loading

1. Make sure dependencies are installed: `npm install`
2. Check that you're using Node.js 14+ : `node --version`
3. Clear cache: `rm -rf node_modules/.vite`
4. Restart dev server: `npm run dev`

### Contact Form Not Working

1. Make sure the backend is running on port 3001
2. Check browser console for errors (F12 → Console tab)
3. Verify the API URL in ContactForm.jsx matches your backend URL
4. Check CORS settings if deploying to different domains

### Email Notifications Not Sending

1. Verify you've set up a Gmail App Password
2. Check the `EMAIL_PASSWORD` environment variable
3. Look for error messages in the server terminal
4. Test with: `curl http://localhost:3001/api/health`

## Support

For issues or questions:
- Email: contactelevationmyo@gmail.com
- Phone: (970) 462-7675

## License

© 2026 Elevation Myofunctional Therapy. All rights reserved.
