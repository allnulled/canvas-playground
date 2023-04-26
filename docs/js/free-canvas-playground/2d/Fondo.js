const { configuraciones, utilidades } = framework;
framework.Fondo = class {
    constructor() {
    }
    pintarse(contexto) {
        Pintar_fondo: {
            contexto.beginPath();
            contexto.fillStyle = configuraciones.color_de_fondo;
            contexto.fillRect(0, 0, configuraciones.width, configuraciones.height);
        }
        Pintar_cesped: {
            const altura_de_cesped = 500 - 40;
            contexto.beginPath();
            contexto.moveTo(0, altura_de_cesped - 1);
            contexto.lineTo(configuraciones.width, altura_de_cesped - 1);
            contexto.strokeStyle = configuraciones.color_de_palos;
            contexto.stroke();
            contexto.beginPath();
            contexto.fillStyle = configuraciones.color_de_cesped;
            contexto.fillRect(0, altura_de_cesped, configuraciones.width, configuraciones.height);
        }
    }
};