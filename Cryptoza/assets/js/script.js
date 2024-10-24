// View Books by Java Script
var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

//java script for quick view button

var popup = function(popupClick) {
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtns, i) => {
    popupBtns.addEventListener("click", () => {
        popup(i);
    });
});

// for close button

closeBtns.forEach((closeBtns) => {
    closeBtns.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        });
    });
});

// Dark Mood

var icon =document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-them");
    if(document.body.classList.contains("dark-them")) {
        icon.src = "/assets/images/coin-3.png";
    }else {
        icon.src = "/assets/images/coin-4.png";
    }
}