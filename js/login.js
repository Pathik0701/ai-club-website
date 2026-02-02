function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("https://ai-club-website.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "index.html";
    } else {
      alert(data.message);
    }
  });
}
