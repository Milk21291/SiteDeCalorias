const form = document.getElementById('formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();

        const inputKm = document.getElementById('km');
        const inputPeso = document.getElementById('peso');
        const resultado = document.getElementById('resultado')
        const km = Number(inputKm.value)
        const peso = Number(inputPeso.value)
        const calculo = km * peso * 0.0175
        const caloriasPorHoras = calculo * 60
        console.log(caloriasPorHoras.toFixed(2))
        const soma = caloriasPorHoras / 909.9
        const pesoAtual = peso - soma
        resultado.innerHTML = `${calculo.toFixed(2)} calorias perdidas. Peso atual de ${peso}kg para ${pesoAtual.toFixed(2)}kg`
        console.log(`${calculo.toFixed(2)} calorias perdidas. Peso atual de ${peso}kg para ${pesoAtual.toFixed(2)}kg`)
});
