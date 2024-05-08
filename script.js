// Função criada para mostrar apenas a seção clicada e ocultar as outras
function mostrarSecao(secaoId) {
    var secoes = Array.from(document.getElementsByClassName('section'));
    secoes.forEach(function(secao) {
        secao.style.display = 'none';
    });
    document.getElementById(secaoId).style.display = 'block';
}

