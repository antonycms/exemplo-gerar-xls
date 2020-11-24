# Exemplo de como gerar xls em uma pagina HTML com javascript

> [Acesse a página da lib clicando aqui](https://github.com/jmaister/excellentexport)



Botao para gerar XLS no body do HTML
```html
<a download="testando_123.xls" id="botaoElement" onclick="gerarRelatorio()">Gerar</a>
```

#

Botao para gerar XLS no body do HTML
```js
const options = {
  anchor: 'botaoElement', // id do botao
  format: 'xls',
  filename: 'relatorio'
}

const conf = {
  name: 'Sheet 1', // Sheet name
  from: {
    arrayHasHeader: true, // utilizar primeira linha do array para definir os cabecalhos do xls.
    array: [
      ['header1', 'header2', 'header3'], // header 
      ['valor1', 'valor2', 'valor3'],
      ['valor1', 'valor2', 'valor3'],
      ['valor1', 'valor2', 'valor3'],
      ['valor1', 'valor2', 'valor3'],
      ['valor1', 'valor2', 'valor3'],
      ['valor1', 'valor2', 'valor3'],
      ['valor1', 'valor2', 'valor3'],
      ['valor1', 'valor2', 'valor3'],
      ['valor1', 'valor2', 'valor3'],
      ['valor1', 'valor2', 'valor3'],
      ['valor1', 'valor2', 'valor3'],
    ],
  },
}


var gerarRelatorio = function () {
  ExcellentExport.convert(options, [conf]);
}
```

