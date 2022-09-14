// Typing animation
{/* <h3 class="my-profession">I'm a <span class="typing">Computer Engineer</span></h3> where .typing coming from*/ }
var typed = new Typed(".typing", {
    strings: ["", "Computer Engineer", "Software Developer", "Backend Developer"],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: true
})

// Aside

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    sectionList = document.querySelectorAll(".section"),
    totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a")

    a.addEventListener("click", function () {
        sectionList.forEach(element => {
            element.classList.remove("back-section")
        })
        navList.forEach((item, index) => {
            if (item.querySelector("a").classList.contains("active")) {
                sectionList[index].classList.add("back-section")
            }
            item.querySelector("a").classList.remove("active")
        })
        this.classList.add("active")
        showSection(this)
        if (window.innerWidth < 1100) {
            asideSectionToggleButton()
        }
    })
}
function showSection(element) {
    const target = element.getAttribute("href")
    sectionList.forEach(element => {
        element.classList.remove("active")
    })
    document.querySelector(target).classList.add("active")
}

function removeBackSection(){
    for(let i = 0; i<sectionList.length; i++){
        sectionList[i].classList.remove("back-section")
    }
}

function addBackSection(index){
    sectionList[index].classList.add("back-section")

}

function updateNav(element) {
    navList.forEach((item,index) => {
        item.querySelector("a").classList.remove("active")
        const target = element.getAttribute("href")
        if(target === navList[index].querySelector("a").getAttribute("href")){
            navList[index].querySelector("a").classList.add("active")
        }
    })
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex =this.getAttribute("data-section-index")
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})
const navToggleButton = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside")
navToggleButton.addEventListener("click", () => {
    asideSectionToggleButton();
})

function asideSectionToggleButton() {
    aside.classList.toggle("open")
    navToggleButton.classList.toggle("open")
    for (let index = 0; index < sectionList.length; index++) {
        sectionList[index].classList.toggle("open")
    }
}