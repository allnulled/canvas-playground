framework.Universo = class {
    obtener_escena_por_defecto() {
        return new framework.Escena.estandar();
    }
    obtener_camara_por_defecto() {
        return new framework.Camara.de.perspectiva(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    }
    obtener_reproductor_por_defecto() {
        return new framework.Reproductor.webGL();
    }
    constructor(elemento_padre = document.body, escena = undefined, camara = undefined, reproductor = undefined) {
        this.escena = escena ? escena : this.obtener_escena_por_defecto();
        this.camara = camara ? camara : this.obtener_camara_por_defecto();
        this.reproductor = reproductor ? reproductor : this.obtener_reproductor_por_defecto();
        this.reproductor.setSize(window.innerWidth, window.innerHeight);
        this.elementos_definidos = {};
        this.elemento_padre = elemento_padre;
        this.elemento_padre.appendChild(this.reproductor.domElement);
        this.generar("Geometria.de.cuboide", [{x:10,y:10,z:10},{color:0x00FFFF}], "cubo_inicial");
        this.camara.position.z = 20;
        this.moverse();
    }
    movimiento() {
        this.elementos_definidos.cubo_inicial.rotation.x += 0.01;
        this.elementos_definidos.cubo_inicial.rotation.y += 0.01;
    }
    moverse() {
        requestAnimationFrame(this.moverse.bind(this));
        this.movimiento();
        this.reproductor.render(this.escena, this.camara);
        return this;
    }
    incluir(pintable) {
        this.escena.add(pintable);
    }
    generar(tipo, parametros, id = undefined) {
        const props = tipo.split(/\./g);
        let pivote = framework;
        for(let prop of props) {
            console.log(prop);
            pivote = pivote[prop];
        }
        const fabricador = pivote;
        const producto = new fabricador(...parametros);
        this.escena.add(producto);
        if(id) {
            this.elementos_definidos[id] = producto;
        }
        return producto;

    }
    seleccionar(selector) {
        if(typeof selector === "string") {
            const seleccion = Object.keys(this.elementos_definidos).filter(id => id === selector);
            return seleccion[0];
        } else if (Array.isArray(selector)) {
            return Object.keys(this.elementos_definidos).filter(id => selector.indexOf(id) !== -1);
        } else if (typeof selector === "function") {
            return Object.keys(this.elementos_definidos).filter(selector);
        } else throw new Error("El método Universo.seleccionar solo permite selector tipo string, array o función");
    }
}