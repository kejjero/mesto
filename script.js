let editButton = document.querySelector(".profile__edit-button");
let page = document.querySelector(".page");
let closeButton = document.querySelector(".popup__close-button")
let popup = document.querySelector(".popup")


editButton.addEventListener("click", function () {
    createPopup();
});


closeButton.addEventListener("click", function () {
    closePopup();

});

function closePopup () {
    return popup.style.display = "none"
}


function createPopup() {
    return popup.style.display = "flex"
}
