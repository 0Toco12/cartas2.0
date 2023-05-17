let naipes = ['ぁ', 'か', 'ご', 'そ']
let faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

let face = faces[Math.floor(Math.random()*13)]
let naipe = naipes[Math.floor(Math.random()*4)]
let carta = document.getElementById("sorteada")

carta.innerHTML = naipe + face