framework.Reproductor = {
    webGL: class extends THREE.WebGLRenderer {
        static crear(...args) {
            return new this(...args);
        }
    }
};