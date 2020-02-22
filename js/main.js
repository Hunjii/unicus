const Active = () => {
  const cart = document.querySelector('span.cart_icon');
  const sidebar = document.querySelector('.site-nav-sidebar');
  const wrapper = document.querySelector('.wrapper');
  const closeNav = document.querySelector('.site-cart-close');
  const overlay = document.querySelector('.site-overlay');

  cart.addEventListener('click', () => {
    sidebar.classList.add('active');
    wrapper.classList.add('move');
    overlay.classList.add('active');
  });

  closeNav.addEventListener('click', () => {
    sidebar.classList.remove('active');
    wrapper.classList.remove('move');
    overlay.classList.remove('active');
  });

  const filter_title = document.querySelectorAll('.filter-subtitle');
  Array.from(filter_title).forEach(item => {
    item.addEventListener('click', event => {
      var attr = event.target.getAttribute('aria-expanded');
      if (attr == 'true') {
        attr = 'false';
      } else {
        attr = 'true';
      }
      event.target.setAttribute('aria-expanded', attr);
      event.target.nextElementSibling.classList.toggle('filter-hide');
      console.log(event.target.nextElementSibling);
    });
  });

  // const filter_block = document.querySelector('.filter-block');
  // const wrap_filter = document.querySelector('.wrap-filter');

  // filter_block.addEventListener('click', () => {
  //   wrap_filter.classList.toggle('active');
  // });

  // const window_width = screen.width;
  // const window_height = screen.height;

  // if (window_width < 767) {
  //   document
  //     .querySelector('.site-box-content')
  //     .classList.add('owl-carousel', 'owl-theme');
  //   $(document).ready(function() {
  //     $('.site-box-content.owl-carousel').owlCarousel({
  //       loop: true,
  //       nav: true,
  //       items: 1
  //     });
  //   });
  // }
};

window.onscroll = () => {
  if (document.documentElement.scrollTop > 50) {
    document.querySelector('.site-header').classList.add('fixed-header');
    document.querySelector('.wrap-filter').style.top = '95px';
  } else {
    document.querySelector('.site-header').classList.remove('fixed-header');
    document.querySelector('.wrap-filter').style.top = '160px';
  }
};

// window.onresize = () => {
//   if (window.outerWidth < 767) {
//     document
//       .querySelector('.site-box-content')
//       .classList.add('owl-carousel', 'owl-theme');
//     $(document).ready(function() {
//       $('.site-box-content.owl-carousel').owlCarousel({
//         loop: true,
//         nav: true,
//         items: 1
//       });
//     });
//   } else {
//     document
//       .querySelector('.site-box-content')
//       .classList.remove('owl-carousel', 'owl-theme');
//   }
// };

Active();
