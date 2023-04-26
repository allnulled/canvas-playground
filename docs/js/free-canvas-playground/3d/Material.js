framework.Material = {
    de: {
        malla: {
            basico: class extends THREE.MeshBasicMaterial {
                static crear(...args) {
                    return new this(...args);
                }
            }
        }
    }
};