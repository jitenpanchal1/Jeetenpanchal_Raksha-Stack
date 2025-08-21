let PGLISTINGS_BASE_URL = "";

if (import.meta.env.DEV) {
  // Development (localhost)
  PGLISTINGS_BASE_URL = "http://localhost:3000"; // Your JSON server or other API for pg listings
} else {
  // Production (Vercel)
  PGLISTINGS_BASE_URL = "https://jeetenpanchal-raksha-stack.vercel.app/"; // Usually same production URL (or different if you use other backend)
}

export const PGLISTINGS_API = `${PGLISTINGS_BASE_URL}/api/pglistings`;
