<script>

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function(e) {

    e.preventDefault(); // stop page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields!");
      return;
    }

    alert("Message sent successfully! Thank you, " + name + "!");
    form.reset();

  })
}

</script>