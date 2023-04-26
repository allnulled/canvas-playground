framework.Malla = {
    estandar: class extends THREE.Mesh {
        static crear(...args) {
            return new this(...args);
        }
    }
};