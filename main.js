let sideIcons = document.querySelectorAll(".icons a");
let navbarSections = document.querySelectorAll(".navbar a");
let mySkills = document.querySelector(".my-skills");
let progressBars = document.querySelectorAll(".prog span");
let featNums = document.querySelectorAll(".feat h3");
let started = false; // function not yet started

// add active class on active icon
sideIcons.forEach((icon)=>{
    icon.addEventListener("click", removeActive)
})

function removeActive (){
    sideIcons.forEach((icon)=>{
            icon.classList.remove("active");
            this.classList.add("active");
    })
}

// add active class on active section on mobile screen
navbarSections.forEach((section)=>{
    section.addEventListener("click", removeActivesection)
})

function removeActivesection (){
    navbarSections.forEach((section)=>{
            section.classList.remove("active");
            this.classList.add("active");
    })
}

// Animate width on scrolling
window.onscroll = () => {
    if(window.scrollY >= mySkills.offsetTop -300 && !started){
        progressBars.forEach((bar) => {
            bar.style.width = bar.dataset.width;
        });
            // Increase Numbers On Scrolling
            featNums.forEach((num) => {startCount(num)})
            started = true
    }
};

// Increase Numbers On Scrolling
function startCount (num) {
    let goal = num.dataset.goal;
    let count = setInterval(() => {
        num.textContent++;
        if(num.textContent == goal){
            clearInterval(count);
        }
    },1500 / goal)
}
