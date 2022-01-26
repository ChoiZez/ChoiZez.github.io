const navMenu = document.getElementById('nav-menu'),
    navHeader = document.getElementById('nav-header'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    dark = document.getElementById('dark')

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu'),
    dark.classList.add('dark'),
    navToggle.style.setProperty('visibility', 'hidden')
})

function closeMenu(){
    navMenu.classList.remove('show-menu'),
    dark.classList.remove('dark'),
    navToggle.style.setProperty('visibility', 'visible')
}

dark.addEventListener('click', closeMenu);
navClose.addEventListener('click', closeMenu);

const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(n => n.addEventListener('click', closeMenu))

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
    const navHeight = parseFloat(window.getComputedStyle(navHeader).height)
    const scrollY = window.pageYOffset
    const sectionTop = darktheme.offsetHeight
    if (scrollY+navHeight/2 >= sectionTop){
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