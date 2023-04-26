const { configuraciones, utilidades } = framework;
framework.Pantalla = class Pantalla {
    constructor(contexto) {
        this.contexto = contexto;
        this.elementos = [];
        this.pintarse = () => {
            for (let i = 0; i < this.elementos.length; i++) {
                const elemento = this.elementos[i];
                elemento.pintarse(this.contexto);
            }
        };
        this.pintarse.cada = (secs) => {
            clearTimeout(this.pintarse.timeout_id);
            this.pintarse.timeout_id = setTimeout(() => {
                this.pintarse();
                this.pintarse.cada(secs);
            }, secs);
        };
    }
    incluir(elemento) {
        elemento.pantalla = this;
        this.elementos.push(elemento);
    }
}