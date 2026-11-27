const aparelhos = [
  { modelo: 'Galaxy A55', so: 'Android', preco: 2299, sensores: ['acelerômetro', 'giroscópio', 'NFC', 'impressão digital'] },
  { modelo: 'iPhone 15', so: 'iOS', preco: 5999, sensores: ['acelerômetro', 'LiDAR', 'barômetro', 'Face ID'] },
  { modelo: 'Moto G85', so: 'Android', preco: 1499, sensores: ['acelerômetro', 'proximidade', 'luz ambiente'] },
  { modelo: 'Redmi Note 13', so: 'Android', preco: 1399, sensores: ['infravermelho', 'acelerômetro', 'giroscópio'] },
];

const android = aparelhos.filter(item => item.so === 'Android');
const modelos = aparelhos.map(item => item.modelo);
const seInfra = aparelhos.find(item => item.sensores.includes('infravermelho'))
const custo = aparelhos.filter(item =>item.preco > 1000)

console.log(android);
console.log(modelos); 
console.log(seInfra); 
console.log(custo);