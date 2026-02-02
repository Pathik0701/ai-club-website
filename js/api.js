const BASE_URL = "https://ai-club-website.onrender.com";

async function apiRequest(endpoint, method = "GET", data = null, token = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" }
  };

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(BASE_URL + endpoint, options);
  return res.json();
}
