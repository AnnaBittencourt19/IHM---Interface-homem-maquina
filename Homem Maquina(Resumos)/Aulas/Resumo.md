- Criar um site é quase a mesma coisa que construir uma casa: é preciso de estrutura (HTML), decoração(CSS) e funcionalidade (JavaScript)

## HTML
- É o esqueleto
- Diz onde cada coisa vai ficar, usa elementos chamados tags. O HTLM mexe com estrutura e com o conteúdo de uma página web. ESQUELETO
- Principais tags de HTML:
	- <h1\> : Título principal
	- <p\>: Parágrafo de texto
	- <img\>: Imagem
	- <a\>: Link
	- <div\>: Contêiner para conteúdo 
	- <main/>: Central do corpo do documento
	- <link/> (no head): Conectar o css ao html
	- <article/>, <section/> e <nav/>: Ajudam leitores de tela
- HTML só monta a estrutura

## CSS
- É a pele
- Decora o HTML, cores, design, botões, estilização em geral
- No CSS para declarar uma cor podemos usar diversos modos, como: Palavra-chave, hexadecimal, rgb, etc
- Tipografia:
	- Fontes com serifa, sem serifa, manuscrita, etc. Escolha de fonte
- CSS pega a estrutura feita no html em uma experiência visual
- Estrutura do CSS: Seletor(noq o estilo vai ser aplicado{ (Tag, classe e ID são tipos de seletores) ), propriedade(qual vai ser a estilização (background-color, font-family)) e valor(px, RGB, rem, em)
- #introdução .texto-principal: Seleciona todos os elementos com a classe texto principal dentro de uma div chamada introdução
- "." é uma classe
- "#" é uma div
- Hierarquia: 
	1. ID #
	2. Classe .
	3. Tag (nada antes)
- sem nada é uma tag

- questão 2, 9, 15, 
```css
seletor{
	propriedade: valor;
}

```
## JavaScript
- Para acessar uma propriedade de JavaScript é igual a acessar um atributo de um objeto em Java
- É o sistema nervoso
- Interatividade, faz as coisas acontecerem, dá vida a página
- Como funciona uma interação:
	1. O evento: Alguma interação acontece
	2. O JavaScript detecta a ação 
	3. Um bloco de código específico para aquela interação é acionado
	4. O conteúdo/estilo da página se atualiza sem precisar recarregar
- Adiciona a interatividade 
- Concatenar: +
## Extras
- Head: Metadados, títulos e referências a scripts e estilos, informações que não são exibidas no corpo da página, como título e links para arquivos externos (css e script)
```html
 <meta name = "viewport" content= "width=device-width, initial-scale=1.0"> 
 <!--- Serve para garantir que a página se ajuste corretamente a largura(width) de um dispotivo móvel
```
