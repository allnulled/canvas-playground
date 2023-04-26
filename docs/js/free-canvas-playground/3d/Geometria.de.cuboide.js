framework.Geometria.de.cuboide = function (geometry_args_brute, material_args_brute) {
    const geometry_args = Object.assign({}, { x: 1, y: 1, z: 1 }, geometry_args_brute);
    const material_args = Object.assign({}, { color: 0xFFFFFF, wireframe: true }, material_args_brute);
    const geometry = framework.Geometria.de.caja.crear(geometry_args.x, geometry_args.y, geometry_args.z);
    const material = framework.Material.de.malla.basico.crear(material_args);
    const cube = framework.Malla.estandar.crear(geometry, material);
    return cube;
}