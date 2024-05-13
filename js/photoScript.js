let images = [
  {name:'bull.jpg',
    pos: 'One'},
  {name:'dringkingHabits.jpg',
  pos: 'Two'},
  {name:'group.jpg',
  pos: 'Three'},
  {name:'gypsy.jpg',
  pos: 'Four'},
  {name:'hartman.jpg',
  pos: 'Five'},
  {name:'jyon.jpg',
  pos: 'Six'},
  {name:'liverpool.jpg',
  pos: 'Seven'},
  {name:'mainImage.jpg',
  pos: 'Eight'},
  {name:'miracleWorker.jpg',
  pos: 'Nine'},
  {name:'oz.jpg',
  pos: 'Ten'}

];

for (let t = 0; t <= images.length - 1;t++){
  let tPos = t + 1
  let cnt = images.length 
  // $('#imgZone').append('<div class="mySlides fade" ><div class="numbertext">' + tPos + ' / ' + cnt +'</div><img id="imgCar" src="img/photos/' + images[t] + '"><div class="text">text</div></div>');
  // $('#imgZone').append('<a class="carousel-item" href="#"><img class= "carImg" src="img/photos/' + images[t].name + '"></a>')
  if (t === 0){
    $('#imgZone').append('<li class="slide" data-active ><img src="img/photos/' + images[t].name + '" alt="' + images[t].pos + '"></li>')

  } else {

    $('#imgZone').append('<li class="slide"><img src="img/photos/' + images[t].name + '" alt="' + images[t].pos + '"></li>')
  }



  // $('#imgZone').append('<div class="mySlides fade" ><div class="numbertext">'+tPos + ' / ' + images.length - 1 +'</div><img style="width:100%" src="img/photos/'+images[t]+'"><div class="text"></div></div>')


  // $('#photoDots').append('<span class="dot" onclick="currentSlide(' + tPos + ')"></span>')

}
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]')
    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0 ) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0


    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
