function registerEvent(eventId) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to register for events");
    window.location.href = "login.html";
    return;
  }

  fetch("http://localhost:5000/register-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({ eventId })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
  });
}
