document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const department = document.getElementById("department").value;
    const role = document.getElementById("role").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    // Email validation
    if (!email.endsWith("@uppolice.in")) {
        message.style.color = "red";
        message.textContent = "Email must end with @uppolice.in";
        return;
    }

    // Mobile validation
    if (mobile.length !== 10 || isNaN(mobile)) {
        message.style.color = "red";
        message.textContent = "Enter valid 10 digit mobile number";
        return;
    }

    // Password match
    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match";
        return;
    }

    message.style.color = "white";
    message.textContent = "Processing...";

    // Dummy API call
    fetch("https://dummyapi.invalid/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, email, mobile, department, role, password
        })
    })
        .then(() => {
            throw new Error("API failed");
        })
        .catch(() => {
            message.style.color = "lightgreen";
            message.textContent = "Login successful (dummy)";
        });
});