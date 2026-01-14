async function register() {
  if (password.value !== password2.value) {
    alert("A jelszavak nem egyeznek");
    return;
  }

  const res = await fetch("https://api.yoursite.com/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
      email: email.value
    })
  });

  const data = await res.json();
  if (res.ok) {
    alert("Sikeres regisztráció! Lépj fel a szerverre.");
    window.location = "index.html";
  } else {
    alert(data.error);
  }
}
