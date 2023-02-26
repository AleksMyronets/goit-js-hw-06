const loginForm = document.querySelector("form.login-form");

  loginForm.addEventListener('submit', event => {
    event.preventDefault(); 

    const formData = new FormData(loginForm);

    const formValues = Object.fromEntries(formData.entries());

    if (formValues.email.trim() === '' || formValues.password.trim() === '') {
      alert("Please fill in all the fields!");
    } else {
      console.log(formValues); 
      loginForm.reset();
    }
  });