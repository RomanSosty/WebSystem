document.getElementById("loginForm").addEventListener("submit", function () {
  event.preventDefault();

  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  fetch("http://localhost:8080/authAndGenerateToken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      localStorage.setItem("JWT", await response.text());
    })
    .then((data) => {
      console.log("Success:", data);
      window.location.href = "../main.html";
    })
    .catch((error) => {
      console.log(data);
      console.log("Error:", error);
    });
});
