let divsNumber = 10

// let count = 0
// while (count < divsNumber) {
//   let div = document.createElement('div')
//   document.body.append(div)
//   count += 1
// }

for (let i = 0; i < divsNumber; i+=1) {
  let div = document.createElement('div')
  div.style.cssText = `
    background: rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)});
    transform: translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg);
    width: ${anime.random(0, 500)}px;
    height: ${anime.random(0, 500)}px;
  `
  div.onmouseenter = function(event) {
    event.target.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`
  }
  document.body.append(div)
}






//
