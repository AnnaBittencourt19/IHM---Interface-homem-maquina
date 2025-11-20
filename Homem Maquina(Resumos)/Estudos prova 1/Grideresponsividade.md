# Grid e responsividade
- Design responsivo: faz o site se adaptar a tela para diferentes dispositivos
- Uma única versão que é acessível em todos os ecrãs
- Meta Tag Viewport: ajusta a largura para o ecrã
- Cada aparelho tem um tamanho de tela, uma resolução e uma densidade de pixel
- Para configurar um arquivo HTML corretamente temos que fazer as configurações de idioma, caracteres, responsividade (viewport), título, descrição, palavras chaves
### Flexbox e grid
- Display clássico: Block (Um em cima do outro) e inline (um do lado do outro)
- Display moderno: Controle sobre o alinhamento. Flex e grid
- Flex: Ideal para menus, um modelo unidimensal
	- justify-content: Controla o espaçamento horizontal dos itens (Espaçar)
	- align-items: Controla o alinhamento vertical dos itens (Alinhar)
	- flex-wrap: Caso necessário os itens quebram de linha (passam para a linha seguinte) (Quebrar)
- Grid: Bidimensional, usado quando é preciso ter controle sobre linhas e colunas
	- display: grid -> Ativa o grid
	- grid-template-columns: Define a estrutura da coluna 
	- grid-template-rows: Define a estrutura das linhas
	- grid-gap: Espaçamento entre células
	- insta
- Media Queries: Acontece no css, para mudar layout de acordo com o max-width, vai aplicar estilos de acordo com o tamanho do ecrã. Otimizar para diferentes tamanhos 
- Viewport lógica vc Resolução física: A resolução física é a quantidade de pixels na tela do dispositivo. A viewport lógica é divisão entre a resolução física e o densidade de pixel
```html
- Tag viewport: é para se ajustar na tela sem zoom exagerado (<meta name="viewport" content="width=device-width, initial-scale=1.0">) faz com que haja um ajuste perfeito
-> width = device-widht (iguala a largura do viewport para a largura da tela do dispositivo)
-> initial-scale=1.0 (Define o zoom)
-> É essencial para a página se adaptar em dispositivos móveis
```
- Open Graph: Cartão de visita redes sociais
### Diagramação
- Hierarquia: Título maior que subtítulo
- Alinhamento: Colocar os elementos alinhados passa sensação de ordem e profissionalismo
- Equilíbrio: Distribuir os elementos harmonicamente para que não fique muito carregada em uma parte só 
- Grid: Alinhar e dar sensação de ordem
- 
### CSS
- Display classico:
	- Block: Ocupa toda a largura e empurra outras coisas pra baixo
	- Inline: Fica na mesma linha que outros objetos (em linha) e ocupa o espaço necessário
- Display moderno: 
	- Flexbox: Organizador de filas. É bom para organizar uma linha ou coluna, pode ser alinhados no começo, no meio e no fim ou se espaçarem igualmente. É bom para menus de navegação, botões alinhados, etc
```css
	 display: flex; /* Ativa o Flexbox (coloca lado a lado) */
	 justify-content: space-between; 
	 align-items: center; /* Alinha os itens no centro (verticalmente)*/
	 list-style: none; /* Remove as "bolinhas" de uma lista */
	 gap: 20px;
	 widht: 300px;
	 box-sizing: border-box; /* faz com que a largura final (com padding, border) não ultrapasse a largura definida, nesse caso não vai ultrapassar 300px */
```
	
-  CSS grid: Permite controlar linhas e colunas ao mesmo tempo, é bom para o layout em geral da página, é bom para uma galeria de posts
```css
display: grid; /* Ativa o Grid */
grid-template-columns: repeat(3, 1fr); /* Cria 3 colunas de tamanho flexivel e igual (3), fr significa unidade de fração do espaço disponível */
gap: 15px; /* Coloca espaçamento interno entre os itens (rejunte)

/*imagine um container `[]` com 3 itens `(1) (2) (3)`: */


justify-content: flex-start; [(1)(2)(3) ] (padrão)
    
justify-content: center; [ (1)(2)(3) ]
    
justify-content: flex-end; [ (1)(2)(3)]
    
justify-content: space-between; [(1) (2) (3)] (Cola nos cantos)
    
justify-content: space-around; [ (1) (2) (3) ] (Espaço igual "ao redor" de cada um)
    
justify-content: space-evenly; [ (1) (2) (3) ] (Todos os vãos são idênticos)
```
- padding: Espaçamento interno (entre o conteúdo e a borda)
- border: A borda em si
- margin: Espaçamento externo (entre o elemento e seus vizinhos)
- width: Largura
- height: Altura
- fr: distribui o espaço fracionalmente 2fr significa o dobro de 1fr

### Breakpoints e Media Queries
- Os breakpoints são os pontos onde nosso design quebra (muda), é uma largura de tela especifica 
- A media query ela vê qual o tamanho da tela e aplica as regras de estilo que definimos, é um bloco de propriedades CSS que só é aplicada se a condição for verdadeira (tipo um if)



