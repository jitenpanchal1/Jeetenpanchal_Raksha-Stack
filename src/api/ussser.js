let USERS_BASE_URL = "";

if (import.meta.env.DEV) {
  USERS_BASE_URL = "http://localhost:3000"; // works on your local machine only
} else {
  USERS_BASE_URL = "https://jeetenpanchal-raksha-stack.vercel.app"; // correct production URL
}

export const USERS_API = `${USERS_BASE_URL}/api/users`;
