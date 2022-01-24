// Exercícios - Parte 01 - Criação de Arquivos e Diretórios

// 1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado `unix_tests` e navegue até ele.

```bash
mkdir unix_tests
```

// 1. Crie um arquivo de texto com o nome `trybe.txt` .

```bash
touch trybe.txt
```

// 1. Crie uma cópia do arquivo `trybe.txt` com nome `trybe_backup.txt` .

```bash
cp trybe.txt trybe_backup.txt
```

// 1. Renomeie o arquivo `trybe.txt` .

```bash
mv trybe.txt novo_arquivo.txt
```

//1. Dentro de `unix_tests` , crie um novo diretório chamado `backup` .

```bash
cd unix_tests/
mkdir backup
```

// 1. Mova o arquivo `trybe_backup.txt` para o diretório `backup` .

```bash
mv ../trybe_backup.txt backup/
```

// 1. Dentro de `unix_tests` , crie um novo diretório chamado `backup2` .

```bash
mkdir backup2
```

//1. Mova o arquivo `trybe_backup.txt` da pasta `backup` para a pasta `backup2` .

```bash
mv backup/trybe_backup.txt backup2/
```

// 1. Apague a pasta `backup` .

```bash
rmdir backup
```

// 1. Renomeie a pasta `backup2` para `backup` .

```bash
mv backup2/ backup
```

// 1. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

```bash
pwd
ls -l
```

// 1. Apague o diretório `backup` .

```bash
rm -rf backup/
```

// 1. Limpe o terminal.

```bash
clear
```
// Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado `skills.txt` :

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

// 1. Mostre na tela as 5 primeiras skills do arquivo `skills.txt` .

```bash
head -n 5 skills.txt
```

// 1. Mostre na tela as 4 últimas skills do arquivo `skills.txt` .

```bash
tail -n 4 skills.txt
```

// 1. Apague todos os arquivos que terminem em `.txt` .

```bash
rm *.txt
```