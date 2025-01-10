import './_vendor';
// import './_functions';
// import './_components';


const menuButton = document.querySelector('.header-menu');
const menu = document.querySelector('.nav');
const closeMenuButton = document.querySelector('.nav-close')
const streamItems = document.querySelectorAll('.streams-item');
const body = document.body;

if (streamItems.length > 0) {
  streamItems.forEach(item => {
    const playButton = item.querySelector('.streams-play');
    const preview = item.querySelector('.streams-item__preview');
    const video = item.querySelector('.streams-item__video');

    playButton.addEventListener('click', () => {
      preview.style.opacity = 0;
      video.style.opacity = 1;
      playButton.style.transform = "translate(-50%, -50%), scale(.95)"
      playButton.style.opacity = 0;
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
    menu.classList.add('nav--active')
    document.documentElement.style.overflow = 'hidden';
    body.style.overflow = 'hidden'
  } else {
    menu.classList.remove('nav--active')
    document.documentElement.style.overflow = '';
    body.style.overflow = ''
  }
}

if (menuButton) {
  menuButton.addEventListener('click', menuHandler);

  closeMenuButton.addEventListener('click', () => {
    menuButton.classList.remove('header-menu--active');
    menu.classList.remove('nav--active')
    document.documentElement.style.overflow = '';
    body.style.overflow = ''
  })
}


if (Swiper) {
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

  new Swiper(".news-slider", {
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
  })
}

