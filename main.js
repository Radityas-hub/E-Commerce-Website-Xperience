let navbar = document.querySelector(".header");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let primarymenu = document.querySelector(".navbar");
let stickylogin = document.querySelector(".sticky-log");
let cartBtn = document.querySelector(".sticky-cart");

function loading() {
  loader.classList.remove("hidden");
  document.body.classList.add("load-focus");

  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.classList.remove("load-focus");
  }, 1000);

}

loading();


document.addEventListener("DOMContentLoaded", function () {
  // Sticky navbar on scroll script
  const sectionIds = document.querySelectorAll("a.nav-link");

  function handleScroll() {
    sectionIds.forEach(function (element) {
      const container = document.querySelector(element.getAttribute("href"));
      const containerOffset = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const containerBottom = containerOffset + containerHeight;
      const scrollPosition = window.scrollY;
      if (scrollPosition < containerBottom - 350 && scrollPosition >= containerOffset - 350) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
});

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navbar.classList.add("sticky");
    left.classList.add("leftcontainer");
    right.classList.add("rightcontainer");
    stickylogin.classList.add("dom-change");
    cartBtn.classList.add("sticky");
    document.getElementById("chatButton").classList.add("show");
  } else {
    navbar.classList.remove("sticky");
    left.classList.remove("leftcontainer");
    right.classList.remove("rightcontainer");
    left.classList.remove("leftfull");
    stickylogin.classList.remove("dom-change");
    cartBtn.classList.remove("sticky");
    document.getElementById("chatButton").classList.remove("show");
    document.getElementById("chatContent").classList.add("hidden");
    buttonChatIcons.setAttribute("src", "assets/chat.svg");
    buttonChatIcons.style.width = "2rem";
  }
};

let menu = document.querySelector("#menu-icon");
let dropbar = document.querySelector(".navbar");
const body = document.querySelector("body");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  dropbar.classList.toggle("open");
  body.classList.toggle("disable")
};

function updateCountdown() {
  const now = new Date();
  const targetDate = new Date("2023-10-25T00:00:00");

  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const faqHeader = dropdown.querySelector('.faq-header');
  const content = dropdown.querySelector('.faq-content');

  faqHeader.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
});

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
$(document).ready(function () {
  $('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      }
    ]
  });
});
