function lerSensor(nome) {
    return new Promise(resolve => {
        setTimeout(() => resolve(Math.random()), 1000);
    });
}

async function lerSensores() {
    const sensor1 = await lerSensor('acelerômetro');
    console.log(`acelerômetro: ${sensor1}`);

    const sensor2 = await lerSensor('giroscópio');
    console.log(`giroscópio: ${sensor2}`);

    const sensor3 = await lerSensor('proximidade');
    console.log(`proximidade: ${sensor3}`);
}

lerSensores();