function checkAuth() {
  const token = localStorage.getItem("token");

  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");
  const logoutLink = document.getElementById("logoutLink");

  const guestHero = document.getElementById("guestHero");
  const memberHero = document.getElementById("memberHero");

  if (token) {
    // Navbar
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    logoutLink.style.display = "block";

    // Hero
    if (guestHero) guestHero.style.display = "none";
    if (memberHero) memberHero.style.display = "block";
  } else {
    // Navbar
    loginLink.style.display = "block";
    registerLink.style.display = "block";
    logoutLink.style.display = "none";

    // Hero
    if (guestHero) guestHero.style.display = "block";
    if (memberHero) memberHero.style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

function scrollToEvents() {
  const eventsSection = document.getElementById("events");

  if (!eventsSection) {
    console.error("❌ Events section not found");
    return;
  }

  eventsSection.scrollIntoView({
    behavior: "smooth"
  });
}


checkAuth();
