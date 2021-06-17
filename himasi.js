$(window).scroll(function () {
  var menu = $(window).scrollTop();
  var z = $(window).scrollTop();
  var scroll_up = $(window).scrollTop();
  var social = $(window).scrollTop();

  if (menu >= 440) {
    $('.menu-bawah').css('position', 'relative');
    $('.menu-bawah').css('z-index', '-10');
    $('nav ul').css('top', '100%');
  } else if (menu <= 439) {
    $('.menu-bawah').css('position', 'fixed');
    $('.menu-bawah').css('z-index', '10');
    $('nav ul').css('top', '147%');
  } else {
    $('.menu-bawah').css('position', 'fixed');
  }

  if (z >= 480) {
    $('.logo-events h1').css('background-color', '#ac202e');
    $('.logo-events h1').css('color', 'white');
    $('.logo-events span').css('color', 'white');
    $('.social').css('visibility', 'visible');
  } else if (z >= 0) {
    $('.logo-events h1').css('background-color', 'white');
    $('.logo-events h1').css('color', '#ac202e');
    $('.logo-events span').css('color', '#ac202e');
  } else {
  }

  if (scroll_up >= 100) {
    $('.scroll-up-top').css('visibility', 'visible');
    $('.scroll-up-top').css('transition', '0.6s');
    $('.fa-angle-up').css('transition', '0.5s');
  } else if (scroll_up >= 0) {
    $('.scroll-up-top').css('visibility', 'hidden');
    $('.scroll-up-top').css('transition', '0s');
    $('.fa-angle-up').css('transition', '0s');
  } else {
    $('.scroll-up-top').css('visibility', 'hidden');
  }

  if (social <= 100) {
    $('.social').css('visibility', 'hidden');
  }
  // Ubah Tinggi Apabila ada tambahan Konten agar menyesuaikan Scroll Social
  else if (social >= 5900) {
    $('.social').css('visibility', 'hidden');
  } else {
    $('.social').css('visibility', 'visible');
  }
});

$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('nav ul').toggleClass('active');
    $(this).toggleClass('active');
  });
});
