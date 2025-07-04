const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')    
const resultado = document.getElementById('resultado')

function somar(){
    if(num1.value === '' || num2.value === '') {
        resultado.innerHTML = 'Por favor, preencha ambos os campos.'
        return
    }
    const soma = Number(num1.value) + Number(num2.value)
    resultado.innerHTML = `Resultado: ${soma}`
}
function subtrair(){
    if(num1.value === '' || num2.value === '') {
        resultado.innerHTML = 'Por favor, preencha ambos os campos.'
        return
    }
    const subtracao = Number(num1.value) - Number(num2.value)
    resultado.innerHTML = `Resultado: ${subtracao}`
}
function multiplicar(){
    if(num1.value === '' || num2.value === '') {
        resultado.innerHTML = 'Por favor, preencha ambos os campos.'
        return
    }
    const multi = Number(num1.value) * Number(num2.value)
    resultado.innerHTML = `Resultado: ${multi}`
}
function dividir(){
    if(num1.value === '' || num2.value === '') {
        resultado.innerHTML = 'Por favor, preencha ambos os campos.'
        return
    }
    if (Number(num2.value) === 0){
        resultado.innerHTML = 'Divisão por zero não é permitida.'
        return
    }
    const div = Number(num1.value) / Number(num2.value)
    resultado.innerHTML = `Resultado: ${div.toFixed(2)}`
}
function limpar() {
    num1.value = ''
    num2.value = ''
    num1.focus()
    resultado.innerHTML = ''
}

const ap1 = document.getElementById('ap1')
const ap2 = document.getElementById('ap2')
const as = document.getElementById('as')
const notaFinal = document.getElementById('notaFinal')

function verificarAp1(){
    if(Number(ap1.value) < 0 || Number(ap1.value) > 2) {
        notaFinal.innerHTML = 'A nota deve estar entre 0 e 2.'
        notaFinal.style.color = 'red'
        ap1.focus()
        ap1.value = ''
    }else{
        notaFinal.innerHTML = ''
        notaFinal.style.color = 'black'
    }
}
function verificarAp2(){
    if(Number(ap2.value) < 0 || Number(ap2.value) > 3) {
        notaFinal.innerHTML = 'A nota deve estar entre 0 e 3.'
        notaFinal.style.color = 'red'
        ap2.focus()
        ap2.value = ''
    }else{
        notaFinal.innerHTML = ''
        notaFinal.style.color = 'black'
    }
}
function verificarAs(){
    if(Number(as.value) < 0 || Number(as.value) > 5) {
        notaFinal.innerHTML = 'A nota deve estar entre 0 e 5.'
        notaFinal.style.color = 'red'
        as.focus()
        as.value = ''
    }else{
        notaFinal.innerHTML = ''
        notaFinal.style.color = 'black'
    }
}

function calcular(){
    if(ap1.value === '' || ap2.value === '' || as.value === '') {
        notaFinal.innerHTML = 'Por favor, preencha todos os campos.'
        return
    }
    const nota = Number(ap1.value) + Number(ap2.value) + Number(as.value)

    if(nota < 6){
        notaFinal.innerHTML = `Nota final: ${nota} - Reprovado. Reforce os estudos para a AF.`
    }else{
        notaFinal.innerHTML = `Nota final: ${nota} - Aprovado. Parabéns!`
    }
    
}