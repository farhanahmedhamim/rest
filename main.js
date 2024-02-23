const lists = document.querySelectorAll(".header-list nav ul li")

lists.forEach(val => {
    val.addEventListener("click", () => {
        lists.forEach(iner => {
            iner.classList.remove("special")
        })
        val.classList.add("special")
    })
})























const prev = document.querySelectorAll(".owl-prev span")
const next = document.querySelectorAll(".owl-next span")

prev.forEach(item => {
    item.innerHTML = `<img src='./images/back.png'>`
})
next.forEach(item => {
    item.innerHTML = `<img src='./images/back.png'>`
})

















const master = document.querySelector(".count-up")
const counts = document.querySelectorAll(".boxs h2")


let countInd = []
counts.forEach((val, i) => {
    countInd[i] = 0
})
window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight > master.offsetTop) {
        counts.forEach((val, i) => {
            const interval = setInterval(() => {
                countInd[i] = countInd[i] + (val.getAttribute("count") * 50) / 80000
                if (countInd[i] >= val.getAttribute("count")) {
                    clearInterval(interval)
                    countInd[i] = val.getAttribute("count")
                }
                counts[i].innerHTML = Math.trunc(countInd[i])
            }, 50);

        })
    }
});








const headertop = document.querySelector(".header-top");
const updown = document.querySelector(".top-up");

updown.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        updown.classList.add("active");
        headertop.classList.add("active");
    } else {
        updown.classList.remove("active");
        headertop.classList.remove("active");
    }
});






const responsive = document.querySelector(".respinsive-headernavbar")
const navbar = document.querySelector(".hide-shows")

navbar.addEventListener("click", () => {
    responsive.classList.toggle("active")
})










const cintain = document.querySelectorAll(".secondhide-items")
const more = document.querySelector(".third-list")

let i = 0;
cintain.forEach((val, ind) => {
    val.style.height = "52px";
})
cintain[4].addEventListener("click", () => {
    if (i === 0) {
        cintain[4].style.height = `${more.clientHeight + cintain[4].clientHeight}px`
        i = 1
    } else {
        cintain[4].style.height = `52px`
        i = 0
    }
})








let list = document.querySelectorAll(".popular-right button")
let itembox = document.querySelectorAll(".single-popular-wrap")


list.forEach((val, i) => {
    val.addEventListener("click", () => {
        list.forEach((val2, i2) => {
            val2.classList.remove("active")
        })
        val.classList.add("active")
        let datafilter = val.getAttribute("data-filter")
        itembox.forEach((item, itid) => {
            item.classList.remove("active")
            item.classList.add("hide")
            if (item.getAttribute('data-item') == datafilter || datafilter == "all") {
                item.classList.remove("hide")
                item.classList.add("active")

                if (window.innerWidth >= 1100) {
                    item.style.width = "25%"
                    item.style.height = "458px"
                } else if (window.innerWidth >= 900) {
                    item.style.width = "33%"
                    item.style.height = "458px"
                } else if (window.innerWidth >= 700) {
                    item.style.width = "50%"
                    item.style.height = "458px"
                } else {
                    item.style.width = "100%"
                    item.style.height = "458px"
                }

                item.style.padding = "5px 15px"
            } else {
                setTimeout(() => {
                    item.style.width = "0%"
                    item.style.height = "0px"
                    item.style.padding = "0px"
                }, 500);
            }
        })
    })
})