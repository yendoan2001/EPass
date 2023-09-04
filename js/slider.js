// outstanding_slider
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper svg");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children]


let isDragging = false, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
})
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
})
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
})
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft
}
const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
}
let dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    // if (window.innerWidth < 100) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2000)
}
autoPlay()
const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition")
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.offsetWidth
        carousel.classList.remove("no-transition")
    }
    clearTimeout(timeoutId)
    if (!wrapper.matches(":hover")) autoPlay()
}
carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)
carousel.addEventListener("scroll", infiniteScroll)
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId))
wrapper.addEventListener("mouseleave", autoPlay)

// endow_slider
const wrapper_endow = document.querySelector(".wrapper_endow");
const carousel_endow = document.querySelector(".carousel_endow");
const arrowBtns_endow = document.querySelectorAll(".wrapper_endow svg");
const firstCardWidth_endow = carousel_endow.querySelector(".card_endow").offsetWidth;
const carouselChildrens_endow = [...carousel_endow.children]


let isDragging_endow = false, startX_endow, startScrollLeft_endow, timeoutId_endow;
let cardPerView_endow = Math.round(carousel_endow.offsetWidth / firstCardWidth_endow)
carouselChildrens_endow.slice(-cardPerView_endow).reverse().forEach(card => {
    carousel_endow.insertAdjacentHTML("afterbegin", card.outerHTML)
})
carouselChildrens_endow.slice(0, cardPerView_endow).forEach(card => {
    carousel_endow.insertAdjacentHTML("beforeend", card.outerHTML)
})
arrowBtns_endow.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_endow.scrollLeft += btn.id === "left" ? -firstCardWidth_endow : firstCardWidth_endow;
    })
})
const dragStart_endow = (e) => {
    isDragging_endow = true;
    carousel_endow.classList.add("dragging");
    startX_endow = e.pageX;
    startScrollLeft_endow = carousel_endow.scrollLeft
}
const dragging_endow = (e) => {
    if (!isDragging_endow) return;
    carousel_endow.scrollLeft = startScrollLeft_endow - (e.pageX - startX_endow)
}
let dragStop_endow = () => {
    isDragging_endow = false;
    carousel_endow.classList.remove("dragging");
}

const autoPlay_endow = () => {
    // if (window.innerWidth < 100) return;
    timeoutId_endow = setTimeout(() => carousel_endow.scrollLeft += firstCardWidth_endow, 2000)
}
autoPlay_endow()
const infiniteScroll_endow = () => {
    if (carousel_endow.scrollLeft === 0) {
        carousel_endow.classList.add("no-transition");
        carousel_endow.scrollLeft = carousel_endow.scrollWidth - (2 * carousel_endow.offsetWidth);
        carousel_endow.classList.remove("no-transition")
    } else if (Math.ceil(carousel_endow.scrollLeft) === carousel_endow.scrollWidth - carousel_endow.offsetWidth) {
        carousel_endow.classList.add("no-transition")
        carousel_endow.scrollLeft = carousel.offsetWidth
        carousel_endow.classList.remove("no-transition")
    }
    clearTimeout(timeoutId_endow)
    if (!wrapper_endow.matches(":hover")) autoPlay_endow()
}
carousel_endow.addEventListener("mousedown", dragStart_endow)
carousel_endow.addEventListener("mousemove", dragging_endow)
document.addEventListener("mouseup", dragStop_endow)
carousel_endow.addEventListener("scroll", infiniteScroll_endow)
wrapper_endow.addEventListener("mouseenter", () => clearTimeout(timeoutId_endow))
wrapper_endow.addEventListener("mouseleave", autoPlay_endow)
