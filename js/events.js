document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/events")
    .then(res => res.json())
    .then(events => {
      const container = document.getElementById("events-container");
      container.innerHTML = "";

      events.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(() => {
      document.getElementById("events-container").innerHTML =
        "<p>Unable to load events</p>";
    });
});

