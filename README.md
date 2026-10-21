# StayNest PG & Hostel — Demo Website

A premium, responsive React + Tailwind CSS concept website for a PG/hostel. Includes room cards and food filters, sample facilities, image gallery, placeholder location, and a booking enquiry form that opens WhatsApp with a pre-filled message.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown by Vite.

## Build for deployment

```bash
npm run build
npm run preview
```

The production build is created in `dist/`.

## Before showing/publishing to a real client

- **Sample prices:** ₹8,000 single, ₹5,500 double, ₹4,500 triple, ₹3,500 4/6 sharing per person/month. These are illustrative only.
- **WhatsApp:** update `WHATSAPP_NUMBER` in `src/main.jsx`. For wa.me, use country code + number with digits only (India example: `91XXXXXXXXXX`). The provided number is used as supplied; verify whether it needs the country code before testing.
- **Location:** replace the placeholder with the real address and a real Google Maps link/embed.
- **Photos:** current photos are external Unsplash inspiration images; replace with actual property photos and confirm usage rights.
- **Amenities:** confirm all facilities and food options with the owner.
- This is a frontend demo. It does not store leads, manage availability, accept payments, or create confirmed bookings. WhatsApp opens with a message for the owner to respond manually.

## Stack

- React + Vite
- Tailwind CSS + a small custom stylesheet
- Lucide icons
- WhatsApp `wa.me` click-to-chat
