import './_vendor';
// import './_functions';
// import './_components';


const menuButton = document.querySelector('.header-menu');
const menu = document.querySelector('.header-body_desktop');
const tabsControllers = document.querySelectorAll(".news-filter__btn");
const tabsContents = document.querySelectorAll(".news-content");
const closeMenuButton = document.querySelector('.header-close')
const body = document.body;

if (tabsControllers.length) {
  tabsControllers.forEach((controller, i) => {
    controller.addEventListener("click", () => {
      if (controller.classList.contains("button--purple")) return;

      tabsControllers.forEach(
        controller => controller.classList.remove("button--purple")
      );
      tabsContents.forEach(content => content.classList.remove("fade-in"));

      controller.classList.add("button--purple");
      tabsContents[i].classList.add("fade-in");
    })
  })
}

// const closeModalByOuterClick = (modal) => {
//   const modalContainer = modal.querySelector('.modal-container');

//   modalContainer.addEventListener('click', (e) => {
//     if (e.target === modalContainer) {
//       hideModal();
//       modal.classList.remove('modal--active');
//     }
//   })
// }

// const hideModal = () => {
//   body.classList.remove('locked')
//   document.documentElement.classList.remove('locked')
// }

// const showModal = () => {
//   body.classList.add('locked');
//   document.documentElement.classList.add('locked');
// }

const menuHandler = () => {
  menuButton.classList.toggle('header-menu--active');
  if (menuButton.classList.contains('header-menu--active')) {
    menu.classList.add('header-body_desktop--active')
    document.documentElement.style.overflow = 'hidden';
    body.style.overflow = 'hidden'
  } else {
    menu.classList.remove('header-body_desktop--active')
    document.documentElement.style.overflow = '';
    body.style.overflow = ''
  }
}

if (menuButton) {
  menuButton.addEventListener('click', menuHandler);

  closeMenuButton.addEventListener('click', () => {
    menuButton.classList.remove('header-menu--active');
    menu.classList.remove('header-body_desktop--active')
    document.documentElement.style.overflow = '';
    body.style.overflow = ''
  })
}


if (Swiper) {
  const newsSliderProps = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    },
  }

  new Swiper('.faq-inner', {
    speed: 300,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    },
    navigation: {
      nextEl: ".faq-controls__btn--next",
      prevEl: ".faq-controls__btn--prev"
    }
  })

  new Swiper(".news-content--all .news-slider", {
    ...newsSliderProps,
    navigation: {
      nextEl: ".news-content--all .news-controls__btn--next",
      prevEl: ".news-content--all .news-controls__btn--prev"
    }
  })

  new Swiper(".news-content--news .news-slider", {
    ...newsSliderProps,
    navigation: {
      nextEl: ".news-content--news .news-controls__btn--next",
      prevEl: ".news-content--news .news-controls__btn--prev"
    }
  })

  new Swiper(".news-content--events .news-slider", {
    ...newsSliderProps,
    navigation: {
      nextEl: ".news-content--events .news-controls__btn--next",
      prevEl: ".news-content--events .news-controls__btn--prev"
    }
  })
}

