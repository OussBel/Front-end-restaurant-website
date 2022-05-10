// The craetion of an active link class while user scrolls

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.content__link')

window.addEventListener('scroll', () => {
  let currentId
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    console.log(sectionTop)

    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentId = section.getAttribute('id')
      navLinks.forEach((link) => {
        link.classList.remove('content__link--active')

        if (link.getAttribute('key') === currentId) {
          link.classList.add('content__link--active')
        }
      })

      // 1655 is the height from the top of the window until the top of our products section
    } else if (scrollY < 1655) {
      navLinks[0].classList.add('content__link--active')
    }
  })
})

// Responsive header navbar

const burger = document.querySelector('.burger')
const nav = document.querySelector('.content__nav')

burger.addEventListener('click', () => {
  nav.classList.toggle('content__nav--active')

  burger.classList.toggle('burger-active')
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('content__nav--active')
  })
})
