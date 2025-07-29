// Função para mostrar imagem clicada
function mostrarImagem(elemento) {
  const imgDestaque = document.getElementById('imgDestaque');
  const legendaDestaque = document.getElementById('legendaDestaque');

  // Atualiza a imagem e legenda
  imgDestaque.src = elemento.src;
  imgDestaque.alt = elemento.alt;
  legendaDestaque.textContent = elemento.dataset.legenda;

  // Remove a classe 'selected' de todas miniaturas
  const miniaturas = document.querySelectorAll('.miniaturas img');
  miniaturas.forEach(img => img.classList.remove('selected'));

  // Adiciona a classe 'selected' na miniatura clicada
  elemento.classList.add('selected');
}

// Ao carregar a página, já deixa a primeira miniatura selecionada
window.addEventListener('DOMContentLoaded', () => {
  const primeira = document.querySelector('.miniaturas img');
  if (primeira) primeira.classList.add('selected');
});
