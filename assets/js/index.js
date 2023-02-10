const form = document.getElementById('formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();

        const inputKm = document.getElementById('km');
        const inputPeso = document.getElementById('peso');
        const resultado = document.getElementById('resultado')
        const km = Number(inputKm.value)
        const peso = Number(inputPeso.value)
        const calculo = km * peso * 0.0175
        resultado.innerHTML = calculo
        console.log(calculo)
});
