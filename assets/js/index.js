const form = document.getElementById('formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();

        const inputKm = document.getElementById('km');
        const inputHoras = document.getElementById('horas')
        const inputPeso = document.getElementById('peso');
        const resultado = document.getElementById('resultado')
        const km = Number(inputKm.value)
        const horas = Number(inputHoras.value)
        const peso = Number(inputPeso.value)
        const calculo = km * peso * 0.0175
        console.log(calculo.toFixed(2) + ' calorias por minutos')
        const horasParaMinutos = horas * 60
        const caloriasPorHoras = calculo * horasParaMinutos
        console.log(caloriasPorHoras.toFixed(2) + ' calorias por horas')
        const soma = caloriasPorHoras / 909.9
        const pesoAtual = peso - soma
        resultado.innerHTML = `${caloriasPorHoras.toFixed(2)} calorias perdidas. Peso atual de ${peso}kg para ${pesoAtual.toFixed(2)}kg`
        console.log(`${caloriasPorHoras.toFixed(2)} calorias perdidas. Peso atual de ${peso}kg para ${pesoAtual.toFixed(2)}kg`)
});
