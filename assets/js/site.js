const form = document.getElementById('signup-form');
const button = document.getElementById('create-account-button');

  function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // TODO: Validate the form data
    // ...

    // Submit the form
    form.submit();
  }

  button.addEventListener('click', handleSubmit);
