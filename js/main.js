jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.64111111
});

var typed = new Typed('.herotext',{
    strings:["Ada Yang Bisa Saya Bantu?", "Selamat Datang Di Website X-1"],
    backSpeed: 40,
    typeSpeed: 70,
    loop: true,
    shuffle: true,
    showCursor: false
  });

  document.getElementById('sosmed-ig').onclick = function () {
      window.open("https://instagram.com/seaofclass_x1", "_blank")
  }

