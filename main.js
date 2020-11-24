const options = {
  anchor: 'butao',
  format: 'xls',
  filename: 'relatorio'
}

const conf = {
  name: 'Sheet 1', // Sheet name
  from: {
    array: [
      ['header1', 'header2', 'header3'],
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
    arrayHasHeader: true, // Array first row is the header
  },
}


var gerarRelatorio = function () {
  ExcellentExport.convert(options, [conf]);
}
