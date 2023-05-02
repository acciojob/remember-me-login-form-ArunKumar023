//your JS code here. If required.

const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      // If saved details exist, show the "existing user" button
      if (savedUsername && savedPassword) {
        const existingButton = document.createElement('button');
        existingButton.id = 'existing';
        existingButton.innerText = 'Login as existing user';
        document.body.appendChild(existingButton);
        existingButton.addEventListener('click', () => {
          alert(`Logged in as ${savedUsername}`);
        });
      }

      // Handle form submission
      const form = document.querySelector('form');
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page refresh
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        const rememberMe = document.querySelector('#remember-me').checked;

        // Save login details to local storage if "remember me" is checked
        if (rememberMe) {
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        // Show logged in message
        alert(`Logged in as ${username}`);
      });