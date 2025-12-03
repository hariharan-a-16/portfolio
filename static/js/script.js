
// Contact Us
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  let form = e.target;

  let status = document.getElementById("status");

  let data = new FormData(form);

  try {
    let res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      status.style.color = "green";
      status.innerText = "Message sent successfully!";
      form.reset();
    } else {
      status.style.color = "red";
      status.innerText = "Failed to send message!";
    }
  } catch (error) {
    status.style.color = "red";
    status.innerText = "Something went wrong!";
  }
});
