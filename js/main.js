// The emplemntation Google map
function initMap() {
    // The location of Uluru
    const alexandria = { lat: 31.200092, lng: 29.918739 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: alexandria,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: alexandria,
        map: map,
    });
}




//  smooth scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate({ scrollTop: $(hash).offset().top - 100 }, 800);
    }
});
// navbar oppacity
window.addEventListener("scroll",function(){
    if(window.scrollY > 150){
        document.querySelector("#navbar").style.opacity = 0.9;
    }else{document.querySelector("#navbar").style.opacity = 1;}
});