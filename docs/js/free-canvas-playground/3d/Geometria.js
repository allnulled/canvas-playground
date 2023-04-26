framework.Geometria = {
    de: {
        caja: class extends THREE.BoxGeometry {
            static crear(...args) {
                return new this(...args);
            }
        }
    }
};