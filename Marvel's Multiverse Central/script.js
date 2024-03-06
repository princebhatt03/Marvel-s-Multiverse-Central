const URL =
  'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=218f5624c27a8fbb2e61c73ae33e86e4&hash=e7bdccbb012399e5e893e3fad8151b15';

let getFacts = async () => {
  let res = await fetch(URL);
  console.log(res.status);
};
getFacts();

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

document.addEventListener('mousemove', function (e) {
  let body = document.querySelector('body');
  let circle = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
  let size = Math.random() * 100;
  circle.style.width = 20 + size + 'px';
  circle.style.height = 20 + size + 'px';
  body.appendChild(circle);
  setTimeout(() => {
    circle.remove();
  }, 1800);
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('demo');
  let captionText = document.getElementById('caption');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text';

      iconEye.classList.add('ri-eye-line');
      iconEye.classList.remove('ri-eye-off-line');
    } else {
      input.type = 'password';

      iconEye.classList.remove('ri-eye-line');
      iconEye.classList.add('ri-eye-off-line');
    }
  });
};

showHiddenPass('login-pass', 'login-eye');
