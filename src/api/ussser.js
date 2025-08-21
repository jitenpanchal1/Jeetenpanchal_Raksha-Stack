let USERS_BASE_URL = "";


if (import.meta.env.DEV) {
  // Development (localhost)
  USERS_BASE_URL = "http://localhost:5000"; // Your backend API for users
  
} else {
  // Production (Vercel)
  USERS_BASE_URL = "https://jeetenpanchal-raksha-stack.vercel.app/"; // Replace with your actual production URL

}

export const USERS_API = `${USERS_BASE_URL}/api/users`;