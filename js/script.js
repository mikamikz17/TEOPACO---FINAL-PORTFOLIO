const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const submitBtn = form.querySelector(".submit-btn");
    submitBtn.textContent = "sending...";
    submitBtn.disabled = true;

    const data = new FormData(form);
    const json = Object.fromEntries(data.entries());

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(json)
    });

    const result = await res.json();
    const msg = document.getElementById("form-message");

    if (result.success) {
      msg.textContent = "message sent! thank you, " + json.name + "!";
      msg.style.color = "var(--green-dark)";
      form.reset();
    } else {
      msg.textContent = "something went wrong. please try again.";
      msg.style.color = "var(--pink-dark)";
    }

    submitBtn.textContent = "submit";
    submitBtn.disabled = false;
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", function() {
    navLinks.classList.toggle("open");
  });

  document.addEventListener("click", function(e) {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("open");
    }
  });
}
