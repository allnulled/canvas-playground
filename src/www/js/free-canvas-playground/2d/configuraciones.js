framework.configuraciones = {
    width: 500,
    height: 500,
    color_de_palos: "#000",
    color_de_articulaciones: "#CCC",
    color_de_fondo: "#66b7d8",
    color_de_cesped: "#00ba41"
};
canvas.width = framework.configuraciones.width;
canvas.height = framework.configuraciones.height;
canvas.style.border = "1px solid #FFF";
canvas.style.backgroundColor = "#FFF";
canvas.style.borderRadius = "2pt";
if (!canvas.getContext) {
    throw new Error("Canvas element has no context");
}