# Email Service Setup

## Formspree Integration

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form endpoint URL (looks like: `https://formspree.io/f/xxxxx`)
4. Create a `.env` file in your project root
5. Add: `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID`
6. Restart your dev server

The form will now send emails to ShaanWocker@gmail.com

## Alternative Services
- EmailJS
- Netlify Forms (if deployed on Netlify)
- SendGrid
