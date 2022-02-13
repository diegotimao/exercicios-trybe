// Navegue até a pasta `unix_tests` ;

cd trybe/Aula_1.3/unix_tests/

// Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet` , `Unix` e `Bash` , um em cada linha.

touch skills2.txt
cat >> skills2.txt
Internet
Unix
Bash

// Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

cat >> skills2.txt
ReactJs
NodeJs
HTML
CSS
Javascript
sort < skills2.txt

// Conte quantas linhas tem o arquivo `skills2.txt` .

wc -l skills2.txt

// Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt` , contendo as 3 primeiras skills em ordem alfabética.

head -n 3 skills.txt | sort > top_skills.txt

// Crie um novo arquivo chamado `phrases2.txt` pelo terminal e adicione algumas frases de sua escolha.

touch phrases2.txt

// Conte o número de linhas que contêm as letras `br` .

grep -ic 'br' phrases2.txt

// Conte o número de linhas que **não** contêm as letras `br` .

grep -icv 'br' phrases2.txt

// Adicione dois nomes de países ao final do arquivo `phrases2.txt` .

cat >> phrases.txt

// Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`

cat phrases2.txt countries.txt > bunch_of_things.txt

// Ordene o arquivo `bunch_of_things.txt` .

sort -o bunch_of_things.txt bunch_of_things.txt