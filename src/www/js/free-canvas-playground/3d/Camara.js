framework.Camara = {
    de: {
        perspectiva: class extends THREE.PerspectiveCamera {
            static crear(...args) {
                return new this(...args);
            }
        }
    }
};