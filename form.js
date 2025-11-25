document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const logoutBtn = document.getElementById("logoutBtn");

    // LOGIN
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Logged in");
            window.location.href = "User Dashboard.html"; 
        });
    }

    // REGISTER with validation
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();
            const phone = document.getElementById("phoneNumber").value.trim();

            // Validate phone:
            const phoneRegex = /^0\d{9}$/;
            if (!phoneRegex.test(phone)) {
                alert("Phone number must start with 0 and be exactly 10 digits.");
                return;
            }

            // Validate password match
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // If all validations pass
            alert("Account created successfully!");
            window.location.href = "login.html";
        });
    }

    // LOGOUT
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            alert("Logged out");
            window.location.href = "Home.html"; 
        });
    }
});

