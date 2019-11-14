function initMap() {
    // The location of Uluru
    const localization = {lat: 51.236530, lng: 22.570751};
    // The map, centered at Uluru
    const map = new google.maps.Map(
        document.querySelector('.map'), {zoom: 4, center: localization});
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({position: localization, map: map});
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";

    slideIndex = 1;
showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    console.log(slideIndex);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    //captionText.innerHTML = dots[slideIndex-1].alt;
}