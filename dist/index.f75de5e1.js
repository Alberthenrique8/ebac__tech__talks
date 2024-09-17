AOS.init();
const dataDoEvento = new Date("Dec  12 , 2025  19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(()=>{
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMS = 86400000;
    const horaEmMs = 3600000;
    const minutosEmMs = 60000;
    const diasateoEvento = Math.floor(distanciaDoEvento / diaEmMS);
    const horasAteoEvento = Math.floor(distanciaDoEvento % diaEmMS / horaEmMs);
    const minutosAteoEvento = Math.floor(distanciaDoEvento % horaEmMs / minutosEmMs);
    const segundosAteoEvento = Math.floor(distanciaDoEvento % minutosEmMs / 1000);
    console.log(diasateoEvento);
    console.log(horasAteoEvento);
    console.log(minutosAteoEvento);
    console.log(segundosAteoEvento);
    document.getElementById("contador").innerHTML = `${diasateoEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteoEvento}s`;
    if (distanciaDoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Evento Expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
