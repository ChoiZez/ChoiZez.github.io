const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    dark = document.getElementById('dark')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu'),
        dark.classList.add('dark')
    })
}

if (navClose) {
  navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu'),
      dark.classList.remove('dark')
  })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    dark.classList.remove('dark')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop,
              sectionId = current.getAttribute('id')

        if(scrollY >= sectionTop-80 && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const darktheme = document.getElementById('article-header')

function scrollLogo(){
    const scrollY = window.pageYOffset
    const sectionTop = darktheme.offsetTop
    if (scrollY>sectionTop-80){
        document.getElementById('nav-toggle').style.color='rgb(13, 32, 75)'
    }
    else{
        document.getElementById('nav-toggle').style.color='#fff'
    }
}
window.addEventListener('scroll', scrollLogo)
const sr = ScrollReveal({
  origin: 'top',
  distance:'0px',
  duration: 2000,
  delay: 100,
})

sr.reveal(`.article-header__container>div>img, .article__paragraph>h2, .image, .article__paragraph>h3, .article__text>h2, .article-header__container>div>section, .article__paragraph>p`,{origin: 'left'})
