class Smartphone {      
    constructor(modelo, so, sensores) {
        this.modelo = modelo;
        this.so = so;
        this.sensores = sensores;
    }
 
    temSensor(nome) {
        return this.sensores.includes(nome);
    }
 
    descricao() {
        return `${this.modelo} (${this.so}) — ${this.sensores.length} sensores`;
    }
}
const smartphone1 = new Smartphone('Galaxy A55', 'Android', [
    'acelerômetro',
    'giroscópio',
    'NFC',
    'impressão digital',
]);
const smartphone2 = new Smartphone('iPhone 15', 'iOS', [
    'acelerômetro',
    'LiDAR',
    'barômetro',
    'Face ID',
]);
console.log(`Galaxy A55 tem NFC: ${smartphone1.temSensor('NFC')}`);
console.log(smartphone1.descricao());
console.log(`iPhone 15 tem NFC: ${smartphone2.temSensor('NFC')}`);
console.log(smartphone2.descricao());