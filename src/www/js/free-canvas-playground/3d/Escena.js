framework.Escena = {
    estandar: class extends THREE.Scene {
        static crear(...args) {
            return new this(...args);
        }
    }
};