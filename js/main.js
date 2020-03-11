// const NavActive = () => {
//   const cart = document.querySelector('span.cart_icon');
//   const sidebar = document.querySelector('.site-nav-sidebar');
//   const wrapper = document.querySelector('.wrapper');
//   const closeNav = document.querySelector('.site-cart-close');
//   const overlay = document.querySelector('.site-overlay');

//   cart.addEventListener('click', () => {
//     sidebar.classList.add('active');
//     wrapper.classList.add('move');
//     overlay.classList.add('active');
//   });

//   closeNav.addEventListener('click', () => {
//     sidebar.classList.remove('active');
//     wrapper.classList.remove('move');
//     overlay.classList.remove('active');
//   });
// };

// const Select = () => {
//   const btn_color = document.querySelectorAll('.color-btn');
//   const select_color = document.querySelectorAll('.select-color');
//   Array.from(btn_color).forEach(obj => {
//     obj.addEventListener('click', () => {
//       Array.from(select_color).forEach(obj => {
//         obj.classList.remove('active');
//       });
//       obj.parentElement.classList.add('active');
//     });
//   });

//   const btn_size = document.querySelectorAll('.size-btn');
//   const select_size = document.querySelectorAll('.select-size');
//   Array.from(btn_size).forEach(obj => {
//     obj.addEventListener('click', () => {
//       Array.from(select_size).forEach(obj => {
//         obj.classList.remove('active');
//       });
//       obj.parentElement.classList.add('active');
//     });
//   });
// };

// const Filter = () => {
//   const filter_title = document.querySelectorAll('.filter-subtitle');
//   Array.from(filter_title).forEach(item => {
//     item.addEventListener('click', event => {
//       var attr = event.target.getAttribute('aria-expanded');
//       if (attr == 'true') {
//         attr = 'false';
//       } else {
//         attr = 'true';
//       }
//       event.target.setAttribute('aria-expanded', attr);
//       event.target.nextElementSibling.classList.toggle('filter-hide');
//       console.log(event.target.nextElementSibling);
//     });
//   });

//   const filter_block = document.querySelector('.filter-block');
//   const wrap_filter = document.querySelector('.wrap-filter');

//   filter_block.addEventListener('click', () => {
//     wrap_filter.classList.toggle('active');
//   });
// };
// window.onscroll = () => {
//   if (document.documentElement.scrollTop > 50) {
//     document.querySelector('.site-header').classList.add('fixed-header');
//     document.querySelector('.wrap-filter').style.top = '95px';
//   } else {
//     document.querySelector('.site-header').classList.remove('fixed-header');
//     document.querySelector('.wrap-filter').style.top = '160px';
//   }
// };

// Select();

// NavActive();

const btn = document.querySelector('.step-footer-previous-link');
btn.addEventListener('click', () => {
  console.log('hello');
});
