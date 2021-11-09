const sr = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration: 2000,
  delay: 100,
})

sr.reveal(`.article-header__container>div>img, .article__paragraph>h3, .article__text>h2, .article-header__container>div>section, .article__paragraph>p`,{origin: 'left'})
