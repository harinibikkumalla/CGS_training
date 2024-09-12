document.addEventListener('DOMContentLoaded', () => {
    const correctUserId = 'user123';
    const correctPassword = 'pass123';

    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        /*const userId = document.getElementById('user-id').value;
        const password = document.getElementById('password').value;

        if (userId === correctUserId && password === correctPassword) {
            successMessage.textContent = 'Successfully logged in!';
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';*/

            
            setTimeout(() => {
                window.location.href = 'Ecmproject.html'; 
            }, 2000); 
        /*}else {
            errorMessage.textContent = 'Enter correct details';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        }*/