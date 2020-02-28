let divsNumber = 10

// let count = 0
// while (count < divsNumber) {
//   let div = document.createElement('div')
//   document.body.append(div)
//   count += 1
// }

for (let i = 0; i < divsNumber; i+=1) {
  let div = document.createElement('div')

  div = makeRect(div)
  div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`

  div.onmouseenter = function(event) {
    event.target.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`
  }

  document.body.append(div)
}

function makeRect(element) {
  element.style.width = `${anime.random(0, 500)}px`
  element.style.height = `${anime.random(0, 500)}px`
  return element
}

function makeCircle(element) {
  let size = `${anime.random(0, 500)}px`
  element.style.width = size
  element.style.height = size
  element.style.borderRadius = '100%'
  return element
}




//
