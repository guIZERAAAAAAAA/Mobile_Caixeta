const aparelhos = [
  { modelo: 'Galaxy A55', so: 'Android', sensores: ['acelerômetro', 'giroscópio', 'NFC'] },
  { modelo: 'iPhone 15', so: 'iOS', sensores: ['acelerômetro', 'LiDAR', 'barômetro'] },
  { modelo: 'Moto G85', so: 'Android', sensores: ['acelerômetro', 'proximidade'] },
];

const btnListarAparelhos = document.getElementById('btn-listar-aparelhos');

btnListarAparelhos.addEventListener('click', () => {
    const ul = document.getElementById('smartphones');

    const items = aparelhos[1].sensores.map(item => `<li>${item}</li>`);
    ul.innerHTML = items.join("");
})
