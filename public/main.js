/*************** VOLTAR AO TOPO ****************/

const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function () {
  if (window.scrollY >= 450) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})
