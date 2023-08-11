'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')


function mudarCor(){  
    forma1.classList.toggle('vermelho')
}

function mudarforma(){
    forma2.classList.toggle('circulo')
}

function mudarImagem() {
    forma3.classList.toggle('imagemSunoo')
}

function girar() {
    forma4.classList.toggle("bolota")
}

function neww(){
    forma5.classList.toggle('newjeans')
}

function morangoo (){
    forma6.classList.toggle('morangoGif')
}

function gato(){
    forma7.classList.toggle('gatinhuo')
}

function solzi(){
    forma8.classList.toggle('formaa')
}





forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarforma)
forma3.addEventListener('click', mudarImagem)
forma4.addEventListener('click', girar)
forma5.addEventListener('click', neww)
forma6.addEventListener('click', morangoo)
forma7.addEventListener('click', gato)
forma8.addEventListener('click', solzi)
