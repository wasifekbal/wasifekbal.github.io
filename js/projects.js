var boxes = document.getElementsByClassName("single_box");
var i;
for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", function () {
        this.querySelector(".header_text").classList.toggle("header_text_hover");
    })
    boxes[i].addEventListener("mouseout", function () {
        this.querySelector(".header_text").classList.toggle("header_text_hover");
    })
}