document.getElementById("loginForm").addEventListener("submit", function() {
    event.preventDefault();

    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8080/authAndGenerateToken", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            console.log(response.text());
    })
        .then(data => {
            console.log("Success:",data);
        })
        .catch((error) => {
            console.log(data);
            console.log("Error:", error);
        })
})