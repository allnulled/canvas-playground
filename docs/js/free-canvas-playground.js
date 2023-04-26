window.free_canvas_playground = async function (canvas) {
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
        await eval(await importar_script("js/free-canvas-playground/utilidades.js"));
        await eval(await importar_script("js/free-canvas-playground/configuraciones.js"));
        await eval(await importar_script("js/free-canvas-playground/contexto.js"));
        await eval(await importar_script("js/free-canvas-playground/Fondo.js"));
        await eval(await importar_script("js/free-canvas-playground/Persona.js"));
        await eval(await importar_script("js/free-canvas-playground/Pantalla.js"));
        const { Pantalla, Fondo, Persona, contexto } = framework;
        framework.pantalla = new Pantalla(contexto);
        framework.fondo = new Fondo();
        framework.persona = new Persona();
        const { pantalla, fondo, persona } = framework;
        pantalla.incluir(fondo);
        pantalla.incluir(persona);
        pantalla.pintarse();
        return framework;
    } catch (error) {
        console.log("Error al llamar a free_canvas_playground:", error);
        throw error;
    }
};



