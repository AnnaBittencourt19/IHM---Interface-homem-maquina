# Imagens e videos
- A principal questão sobre imagens e vídeos é: Qualidade vs. Performance 
- Imagem vetorizada: Pode ser ampliada o quanto for mas não perde a qualidade (ideal para ícones)
- JPEG e PNG tem a qualidade dependente da resolução
- Compressão de imagem: É fazer com que ela ocupe menos espaço na internet. Existem duas formas: 
	- Sem perda (lossless): Nenhuma informação é perdida, a qualidade é preservada mas não há uma grande economia de espaço. Imagens com texto, logotipos (PNG)
	- Com perda(lossy): Perde um pouco da qualidade. É uma alternativa ótima onde pequenas perdas são imperceptíveis (JPEG), há uma grande economia de espaço
- DPI: É a medida de densidade de impressão, é 72 na web
- É ruim quando o site demora para carregar por isso essas manipulações são importantes

### Lazy Loading
 - É como se fosse um just-in-time no desenvolvimento web, a imagem só carrega quando você chega nela, isso evita a sobrecarga de carregamento. Lazy = Preguiçoso, vai procrastinando o carregamento de imagens
	- Ele adia o carregamento de imagens e iframes até que o usuário role a página até a imagem
	- Como implementar:
```html
<img src= "imagem.jpg" loading="lazy">
```

### Formatos de imagem moderno
- WebP: É como se fosse um formato ZIP para imagens, diminui o tamanho do arquivo e mantém a qualidade, porém em navegadores mais antigos não há suporte para WebP
- Picture: É como se fosse um if e else para usar o WebP, se o navegador suporta WebP ele vai usar WebP se não ele usa o formato jpg mesmo. Exemplo de código:
```html
<picture>
	<source srcset="imagem.webp" type:"image/webp"> /*Define webp*/
	<img src="imagem.jpg"> /*se o navegador não suporta: usa jpg*/
</picture>
```

### Uso de width e height em imagens
- Evita que a imagem "empurre" outros elementos do site ao terminar de ser carregada, essa situação onde a imagem empurra é chamada formalmente de Cumulative Layout Shift (CLS) e ela ocorre porque o navegador não sabe o tamanho que a imagem vai ter, portanto não reservou esse espaço para ela.
- Ao usar width e height na tag img o problema CLS é resolvido pois o navegador vai saber a largura e a altura da imagem e "reservar"o espaço dela
- So definir a largura e a altura de uma imagem isso não prejudica a responsividade pois ela é feita no css e a responsividade será de acordo com as dimensões definidas

### Srcset e sizes
- Srcset: É uma lista de várias opções de imagens (a mesma imagem) só que em diferentes tamanhos, funciona do seguinte modo: você coloca os arquivos de imagem seguido da sua largura real e a letra w 
- Sizes: É onde se diz qual a largura será usada da imagem, fazer regras baseadas no tamanho da tela. Exemplo de código:
```html
sizes="(max-width: 600px) 100vw, 50vw"
<!-- traduzindo: Se a tela tela tiver no máximo 600px (max-width: 600px) a imagem vai ocupar 100% da largura da tela (100vw) se não for menor que 600px (,) a imagem vai ocupar 50% da largura da tela (50vw)-->
```
- Se usamos srcset e sizes juntos, sizes vai buscar no srcset uma imagem com o tamanho igual ou próximo ao da imagem que está na condição. Sizes faz a condição e calcula o novo valor da largura da imagem (se a tela tiver resolução 2x tem que multiplicar por 2) e o srcset é onde fica as alternativas de imagens
