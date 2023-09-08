// click on active
let activeElement = document.querySelectorAll(".list li a");

function addActive() {
    activeElement.forEach((e) => {
        e.addEventListener("click", function () {
            removeActive(activeElement)
            this.classList.add("active")
        });
    })
};

function removeActive(ele) {
    ele.forEach((e) => {
        e.classList.remove("active");
    })
};

addActive()

// click on list 

let activeElementList = document.querySelector(".list");
let activeElementBoes = document.querySelector(".boes");

activeElementBoes.addEventListener("click", function () {
    this.classList.toggle("active");
    activeElementList.classList.toggle("active");
});


// click on Faqa 
let clickFaqe = document.querySelectorAll(".list a");
let faqaBoxs = document.querySelectorAll(".faqa .box");
let faqaElement = document.querySelector(".faqa");

function fagePage() {
    clickFaqe.forEach((e) => {
        e.addEventListener("click", function () {
            removeActive(faqaBoxs)
            faqaElement.classList.remove("active")
            faqaBoxs.forEach((i) => {
                if (e.getAttribute("data-num") == i.getAttribute("data-ber")) {
                    i.classList.add("active")
                    if (i.classList.contains("active")) {
                        faqaElement.classList.add("active")
                    }
                }
            })
        });
    })
};

fagePage()


// click on Color
let colorElement = document.querySelectorAll(".box.colors ul li");
function colorWeb(names, colors) {
    window.sessionStorage.setItem(names, colors)
    document.documentElement.style.setProperty(names, sessionStorage.getItem(names))
}

function chingesColors() {
    // if (sessionStorage.getItem("--color-backgrond") !== "null") {
    //     colorWeb("--color-backgrond", sessionStorage.getItem("--color-backgrond"))
    //     colorWeb("--color-backgrond-tow", sessionStorage.getItem("--color-backgrond-tow"))
    //     colorWeb("--color-text", sessionStorage.getItem("--color-text"))
    //     colorWeb("--color-p", sessionStorage.getItem("--color-p"))
    // } else {
    //     console.log("color")
    // }
    colorElement.forEach((e) => {
        e.addEventListener("click", () => {
            colorWeb("--color-backgrond", e.getAttribute("data-bac"))
            colorWeb("--color-backgrond-tow", e.getAttribute("data-bactwo"))
            colorWeb("--color-text", e.getAttribute("data-text"))
            colorWeb("--color-p", e.getAttribute("data-p"))
        })
    })
};

chingesColors()

// The languges 

let langugesElement = document.querySelectorAll(".languges span");

function firstLanguges() {
    if (sessionStorage.getItem("active") == null) {
        langugesElement[1].classList.add("active")
    } else {
        document.querySelector("." + sessionStorage.getItem("active")).classList.add("active")
    }
    langugesElement.forEach((e) => {
        e.addEventListener("click", function () {
            removeActive(langugesElement)
            e.classList.add("active")
            if (e.classList.contains("active")) {
                window.sessionStorage.setItem("active", e.classList[0])
            }
        });
    })
};

firstLanguges()