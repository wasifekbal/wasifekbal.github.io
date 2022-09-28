var readmore_btn = document.querySelector(".readmore");
var moreinfo = document.querySelector(".moreinfo");
var very_curious = document.getElementById("very-curious");

readmore_btn.addEventListener("click", () => {
    moreinfo.classList.toggle("show");
    if (readmore_btn.innerText === 'Read More'){
        readmore_btn.innerText = "Show Less";
        very_curious.classList.add("show");
    } else {
        readmore_btn.innerText = "Read More";
        very_curious.classList.remove("show");
    }
});
