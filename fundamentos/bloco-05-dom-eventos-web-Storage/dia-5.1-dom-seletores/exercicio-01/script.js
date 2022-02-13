const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

//Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
const titulo = document.getElementById("page-title");

titulo.innerText = 'Mad Max';

//Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
const paragrap = document.getElementById("paragraph");
paragrap.innerText = 'Mad Max é uma franquia multi-media australiana do gênero ficção científica, contendo elementos de ação baseada em um futuro pós-apocalíptico, criada por James McCausland'

paragrap.style.color = 'black';
paragrap.style.width = '550px';
paragrap.style.margin = '0 auto';

//Por fim, recupere o subtítulo e altere-o também.
const subtitle = document.getElementById("subtitle");
subtitle.style.margin = '0 auto';
subtitle.innerText = 'Foi lançado em 2012 e foi um sucesso de bilheteria.'
