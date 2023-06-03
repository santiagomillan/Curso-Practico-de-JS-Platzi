// console.log("hello Word")

// const h1 = document.querySelector('h1')
// const p = document.querySelector('p')
// const parrafito = document.querySelector('.parrafito')
// const pid = document.querySelector('#pid')
// const input = document.querySelector('input')

// console.log([
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// ])

// console.log(input.value)

// h1.innerHTML = "Patito <br> Feo"
// h1.innerText = "Patito"
// console.log(h1.getAttribute('class'))
// h1.setAttribute('class', "rojo")
// console.log(h1.getAttribute('class'))
// h1.classList.add("rojo")
// h1.classList.remove("verde")
// h1.classList.toggle("verde")
// h1.classList.contains("verde")

// input.value = 456

// console.log(document.createElement('img'))
// const img = document.createElement('img')
// img.setAttribute("src" ,  "https://cdn.pixabay.com/photo/2023/05/19/13/28/bird-8004544_1280.jpg")

// // pid.append(img)
// pid.appendChild(img)

const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

// btn.addEventListener('click', btnOnClick)

// function btnOnClick() {
//     const suma = input1.value + input2.value;
//     pResult.innerHTML = "Resultado: " + suma;
// }
form.addEventListener('submit', btnOnClick)

function btnOnClick(event) {
    console.log({event})
    event.preventDefault()
    const suma = Number(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "Resultado: " + suma;
}