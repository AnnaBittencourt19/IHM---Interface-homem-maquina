- HTML: Estrutura (esqueleto)
- CSS: Estilização
- JS: Interatividade, manipula a estrutura do HTML
- Single Page Applications (??? estudar)
- Frameworks: Bibliotecas que facilitam desenvolvimento de aplicações (React, Vue.js, Angular e Svelte são os princípais)

# HTML
- Estrutura, só tem elementos (tags) e atributos (formatar texto, )
- Possui head (onde o robô do google coleta informações, não são visiveis para o usuario)
- Body: O que vai ser printado na tela, o que o usuário vai ver
- Link: Coloca CSS ou JavaScript
- P: É uma tag de texto (parágrafo)
- h1: título 1
- h2: título 2
- h3: título 3
- a: Cria um link
- Title: Fica no head. É o que está na imagem abaixo
![[Captura de Tela 2025-08-13 às 18.06.06.png]]
- tag div: Agrupa coisas e organiza conteúdos, tudo é div (article, header, etc) mas podemos criar com nome que queremos
- tag article: (???)Não entendi essa parte
- tag header: Menu, parte lá em cima, cabeça da página
- tag main: Tudo que está entre o header e o footer (rodapé)
- Atributos: Fornecem informações adicionais ou comportamentos específicos

# CSS
- Seletor: Identifica o elemento HTML que o estilo será aplicado
- Propriedade: Característica visual (cor, tamanho, posição)
- . quer dizer que está chamando classe 
- Sem ponto: Chama uma div inteira
- div.class: chama a div que tem uma determinada classe
- Podemos colocar o CSS na HEAD ou no Style.css
- No CSS as medidas podem ser relativas (se muda o tamanho da tela a medida muda proporcionalmente) ou absoluta (não muda por nada)
- Como chamar o CSS: <style\> </style\> no head 
- div é um container, tudo que está na div segue o estilo definido para essa div
- Para chamar um arquivo css: 
	- Colocar no head: 
```
	<link rel="stylesheet" href="style.css"\>
	
```

# JavaScript
- Para chamar o JavaScript no HTML usamos a tag <script\> no body e na head usamos link
- Exemplo de chamada de JavaScript no head:
```
<script src="script.js"></script>
```
