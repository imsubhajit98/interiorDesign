// -------------------- Header -----------------------
    // let bar = document.getElementById("icon");
    // let menu = document.getElementById("menu");

    // bar.addEventListener("click", function() {
    //   if (bar.className === "fa fa-bars") {
    //     bar.className = "fa fa-times";
    //     menu.style.right = 0;
    //   } else {
    //     bar.className = "fa fa-bars";
    //     menu.style.right = "-1000px";
    //   }
    // })
  

    // -----------------  Accordion  --------------------
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }


    // ------------------  Scroll Owl ---------------------------
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        800: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    })


    // ------------top buttnn---------------
    var btn = $('#button');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
    btn.addClass('show');
} else {
    btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});