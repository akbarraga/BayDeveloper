const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Login
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');

    // Fungsi untuk menyimpan data pengguna di localStorage
    function saveUserData(username, email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // Cek jika email sudah ada
        if (users.some(user => user.email === email)) {
            alert('Email already registered.');
            return false;
        }
        // Simpan data pengguna baru
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    }

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Simpan data pendaftaran di localStorage
        if (saveUserData(username, email, password)) {
            alert('Registration successful!');
            window.location.href = 'index.html'; // Redirect setelah pendaftaran berhasil
        }
    });

    signinForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        // Periksa kredensial login
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful!');
            sessionStorage.setItem('isLoggedIn', 'true');
            window.location.href = '../index.html'; // Redirect setelah login berhasil
        } else {
            alert('Invalid email or password.');
        }
    });

    // Cek status login saat memuat halaman
    function checkLoginState() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        const authBtn = document.getElementById('auth-btn');

        if (isLoggedIn) {
            authBtn.textContent = 'Logout';
            authBtn.setAttribute('href', '#');
        } else {
            authBtn.textContent = 'Login';
            authBtn.setAttribute('href', 'login.html');
        }
    }

    checkLoginState();
});

// Handle login form submission
const signinForm = document.getElementById('signin-form');
if (signinForm) {
    signinForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            sessionStorage.setItem('isLoggedIn', 'true');
            alert('Login successful!');
            window.location.href = '../index.html';
        } else {
            document.getElementById('signin-notification').textContent = 'Invalid email or password';
        }
    });
}

// Handle signup form submission
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            document.getElementById('signup-notification').textContent = 'Email already registered';
        } else {
            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! You can now log in.');
            window.location.href = 'login.html';
        }
    });
}