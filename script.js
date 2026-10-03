$(document).ready(function () {

    $("#togglePassword").click(function () {

        let passwordField = $("#password");

        if (passwordField.attr("type") === "password") {
            passwordField.attr("type", "text");
            $(this).text("Hide");
        } else {
            passwordField.attr("type", "password");
            $(this).text("Show");
        }
    });

   
    $("#phone").on("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });

   
    function showError(message) {
        $("#message")
            .removeClass("success")
            .addClass("error")
            .text(message)
            .show();
    }

    
    function showSuccess(message) {
        $("#message")
            .removeClass("error")
            .addClass("success")
            .text(message)
            .show();
    }

    
    function validateEmail(email) {

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);
    }

   
    function validatePassword(password) {

        let passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        return passwordPattern.test(password);
    }

   
    $("#registrationForm").submit(function (event) {

        event.preventDefault();

   
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();

       
        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            showError("All fields are required!");
            return;
        }

     
        if (!validateEmail(email)) {
            showError("Please enter a valid email address!");
            return;
        }

    
        if (!/^\d{10}$/.test(phone)) {
            showError("Phone number must contain exactly 10 digits!");
            return;
        }

    
        if (!validatePassword(password)) {
            showError(
                "Password must contain at least 8 characters, " +
                "one uppercase letter, one lowercase letter and one number!"
            );
            return;
        }

    
        if (password !== confirmPassword) {
            showError("Passwords do not match!");
            return;
        }

       
        showSuccess("Registration successful! All fields are valid.");

      
        this.reset();

   
        $("#togglePassword").text("Show");

    });

    $("#registrationForm").on("reset", function () {

        $("#message")
            .removeClass("error success")
            .hide();

        $("#togglePassword").text("Show");

    });

});
