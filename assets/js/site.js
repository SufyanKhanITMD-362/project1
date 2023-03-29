<button id="submit-btn">Create Account</button>

<script>
  document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // TODO: Add validation logic here

    // If the form is valid, submit it
    document.getElementById("signup-form").submit();
  });
</script>

