
function tawarkanKolaborasi(namaPengguna) {
    alert("Anda menawarkan kolaborasi kepada " + namaPengguna);
}


document.addEventListener("DOMContentLoaded", function() {
    
    var rekomendasiItems = document.querySelectorAll('.rekomendasi-item');
    rekomendasiItems.forEach(function(item) {
        item.addEventListener('click', function() {
            alert('Anda memilih rekomendasi: ' + item.querySelector('p').innerText);
        });
    });

    
    var trendingItems = document.querySelectorAll('.trending-item');
    trendingItems.forEach(function(item) {
        item.addEventListener('click', function() {
            alert('Anda memilih trending: ' + item.querySelector('p').innerText);
        });
    });
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.padding = "5px 10px";
    } else {
        navbar.style.padding = "10px";
    }
}

function tawarkanKolaborasi(pengguna) {
    alert('Tawarkan kolaborasi kepada ' + pengguna);
}
