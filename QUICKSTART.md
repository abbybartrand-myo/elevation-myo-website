# Quick Start Guide

## Running the Website Locally (Fast Version)

### Step 1: Open Two Terminals

You'll need TWO terminal windows/tabs open at the same time.

---

### Terminal 1 - Frontend

```bash
cd /home/jonah/myofunctional-website
npm run dev
```

**Expected Output:**
```
VITE v4.5.14  ready in 523 ms
➜  Local:   http://localhost:5173/
```

✓ **Your website is now running at http://localhost:5173**

---

### Terminal 2 - Backend

```bash
cd /home/jonah/myofunctional-website
npm run server
```

**Expected Output:**
```
✓ Server running on http://localhost:3001
✓ API endpoint: http://localhost:3001/api/contact
```

✓ **Your API server is now running at http://localhost:3001**

---

### Step 3: View the Website

Open your browser and go to: **http://localhost:5173**

---

## What You'll See

- **Home Page**: Hero with Colorado mountains, services overview
- **Information**: Treatment details, FAQs, timeline
- **Contact**: Contact form (submissions saved to server/data/submissions.json)
- **Booking**: Appointment request form
- **Resources**: Educational materials

---

## Testing the Contact Form

1. Fill out the form on the Contact or Booking page
2. Click submit
3. Check `server/data/submissions.json` to see the stored data
4. If email is configured, you'll also receive an email notification

---

## Stopping the Servers

Press `Ctrl + C` in each terminal window to stop the servers.

---

## Next Steps

- Set up email notifications (see README.md)
- Replace logo placeholder with your actual logo
- Update content with your specific information
- Customize colors in `src/styles/global.css`

---

## Common Issues

**"Port already in use":**
```bash
lsof -ti:5173 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

**"Module not found":**
```bash
cd /home/jonah/myofunctional-website
npm install
```

**Frontend shows but forms don't work:**
- Make sure Terminal 2 (backend) is running
- Check that it says "Server running on http://localhost:3001"

---

For full documentation, see [README.md](README.md)
