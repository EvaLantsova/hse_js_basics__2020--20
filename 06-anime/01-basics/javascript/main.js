let targetsExample01 = anime({
  targets: '.box',
  translateX: 250,
  autoplay: false
})
let targetsBtn01 = document.querySelector('#targetsBox')
targetsBtn01.onclick = targetsExample01.play

let targets02 = anime({
  targets: '.triangle',
  translateX: 150,
  autoplay: false
})
let targetsBtn02 =
  document.querySelector('#targetsTriangle')
targetsBtn02.onclick = targets02.play




//
