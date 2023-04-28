const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.querySelector('#username').value.trim();
	const password = document.querySelector('#password').value.trim();
	if (username === '' || password === '') {
		alert('Por favor, preencha todos os campos!');
	} else {
		window.location.href = 'home.html';
	}
});
