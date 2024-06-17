function showForm(formType) {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const tabs = document.querySelectorAll('.tab');

    if (formType === 'registration') {
        registrationForm.style.display = 'block';
        loginForm.style.display = 'none';
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        registrationForm.style.display = 'none';
        loginForm.style.display = 'block';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
}

function registerUser(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    document.getElementById('userFullname').innerText = fullname;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userAddress').innerText = address;

    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('userDetails').style.display = 'block';
}

function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;

    // Simulate login validation for demo purposes
    if (email === 'user@example.com') {
        document.getElementById('userFullname').innerText = 'Nome de Exemplo';
        document.getElementById('userEmail').innerText = email;
        document.getElementById('userAddress').innerText = 'Endereço de Exemplo';

        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('userDetails').style.display = 'block';
    } else {
        alert('Login inválido');
    }
}

function logout() {
    document.getElementById('userDetails').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
    document.querySelector('.tab.active').classList.remove('active');
    document.querySelector('.tab').classList.add('active');
}
