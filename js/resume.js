const all_sec_btns = document.querySelectorAll(".menu li");
const download_btn = document.getElementById("dwnld_btn");
const resume_img = document.getElementById("resume_img");
const thm_badge = document.getElementById("thm_badge");

const db = {
    webdev: { pdf: "./resumes/webdev_resume.pdf", img: "./pic/webdev_resume.jpg" },
    ml: { pdf: "./resumes/ml_resume.pdf", img: "./pic/ml_resume.jpg" },
    cybsec: { pdf: "", img: ""}
}

// some css changes after the badge loads...
thm_badge.style.display = "none";
thm_badge.style.marginTop = "-20rem";
thm_badge.style.transform = "scale(1.2)";

const provideLocations = (event) => {
    const id = event.target.id;

    // if not found in db obj, then return
    if (!db[id]) return
    
    // remove css from current all btns.
    all_sec_btns.forEach((elem) => {
        elem.classList.remove("active_section");
    })

    // add css to the clicked btn.
    event.target.parentNode.classList.add("active_section");

    // setting proper attributes for download btn and resume img.
    download_btn.setAttribute("onclick", `window.open('${db[id].pdf}')`);
    resume_img.setAttribute("src", `${db[id].img}`)
    
    // showing only tryhackme badge for cybersec section.
    if (id=="cybsec"){
        download_btn.style.display = "none";
        resume_img.style.display = "none";
        thm_badge.style.display = "";
    } else {
        download_btn.style.display = "";
        resume_img.style.display = "";
        thm_badge.style.display = "none";
    }
}

// adding onclick event listener to all the btns.
all_sec_btns.forEach((item) => {
    item.firstElementChild.onclick = provideLocations;
})
