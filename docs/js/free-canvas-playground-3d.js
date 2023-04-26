window.free_canvas_playground_3d = async function (contenedor) {
    try {
        const get_by_ajax = function (url) {
            return fetch(url).then(respònse => {
                return respònse.text();
            });
        };
        const importar_script = async function (url) {
            try {
                console.log(`Importando script de ${url}`);
                const script = await get_by_ajax(url);
                return `
                console.log("Evaluando script de: " + ${JSON.stringify(url)});
                try {
                    eval(${JSON.stringify(script)});
                } catch (error) {
                    console.log("Error evaluando script [" + ${JSON.stringify(url)} + "]:", error);
                }`;
            } catch (error) {
                console.log("Error importando script:", error);
            }
        };
        const framework = {};
        const THREE = await eval(await importar_script("js/three.js"));
        await eval(await importar_script("js/free-canvas-playground/3d/Camara.js"));
        await eval(await importar_script("js/free-canvas-playground/3d/Escena.js"));
        await eval(await importar_script("js/free-canvas-playground/3d/Reproductor.js"));
        await eval(await importar_script("js/free-canvas-playground/3d/Geometria.js"));
        await eval(await importar_script("js/free-canvas-playground/3d/Geometria.de.cuboide.js"));
        await eval(await importar_script("js/free-canvas-playground/3d/Malla.js"));
        await eval(await importar_script("js/free-canvas-playground/3d/Material.js"));
        await eval(await importar_script("js/free-canvas-playground/3d/Universo.js"));
        const { Camara, Escena, Reproductor, Universo } = framework;
        framework.universo = new Universo(contenedor);
        return framework;
    } catch (error) {
        console.log("Error al llamar a free_canvas_playground:", error);
        throw error;
    }
};



