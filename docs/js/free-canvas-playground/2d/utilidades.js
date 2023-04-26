framework.utilidades = {
    toRadians: function (angle) {
        return angle * (Math.PI / 180);
    },
    toDegrees: function (angle) {
        return angle * (180 / Math.PI);
    },
    una_espera: function (callback, secs) {
        return new Promise(ok => {
            setTimeout(() => {
                callback();
                ok();
            }, secs);
        });
    }
};