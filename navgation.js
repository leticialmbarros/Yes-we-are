// Seleciona todos os links da barra de navegação
const links = document.querySelectorAll('.navbar a');

// Adiciona a classe "active" ao link clicado e remove dos demais
links.forEach(function(link) {
  link.addEventListener('click', function() {
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});
