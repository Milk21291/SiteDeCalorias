const form = document.getElementById('formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputKm = e.target.querySelector('#km');
    const inputPeso = e.target.querySelector('#peso');
});
