let controller = new ScrollMagic.Controller()

let $box2 = document.getElementById('box-2')

let makeMoveDownAnim = function($id) {
  return anime({
    targets: $id,
    translateX: [0, '80vw'],
    rotate: [0, 360 * 5],
    autoplay: false,
    easing: 'linear'
  })
}

let box2Anim = makeMoveDownAnim($box2)
let $section2 = document.getElementById('section-2')

new ScrollMagic.Scene({
  triggerElement: '#section-2',
  duration: $section2.getBoundingClientRect().height
})
.addTo(controller)
.setPin($box2)
.on('progress', function(event) {
  box2Anim.seek(box2Anim.duration * event.progress)
})








//
