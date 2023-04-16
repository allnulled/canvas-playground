function draw() {
  const canvas = document.getElementById('canvas_for_demo');
  canvas.width = 500;
  canvas.height = 500;
  if (!canvas.getContext) {
    throw new Error("Canvas element has no context");
  }
  const ctx = canvas.getContext('2d');
  const Persona = class {
    constructor() {
      this.x = 80;
      this.y = 80;
      this.escala = 25;
      this.cabeza_con_cuello = 0;
      this.cuello_con_columna = 0;
      this.hombro_izquierdo = 0;
      this.hombro_derecho = 0;
      this.codo_izquierdo = 0;
      this.codo_derecho = 0;
      this.columna_con_cadera = 0;
      this.cadera_izquierda = 0;
      this.cadera_derecha = 0;
      this.rodilla_izquierda = 0;
      this.rodilla_derecha = 0;
    }
    pintarse(ctx) {
      let punto_del_cuello_bajo = undefined;
      let punto_del_hombro_izq = undefined;
      let punto_del_hombro_der = undefined;
      let punto_del_codo_der = undefined;
      let punto_del_codo_izq = undefined;
      let punto_de_la_mano_izq = undefined;
      let punto_de_la_mano_der = undefined;
      let punto_del_coxis = undefined;
      let punto_de_la_antepierna_izq = undefined;
      let punto_de_la_antepierna_der = undefined;
      let punto_de_la_rodilla_izq = undefined;
      let punto_de_la_rodilla_der = undefined;
      let punto_del_pie_izq = undefined;
      let punto_del_pie_der = undefined;

      Proceso_pintar_cabeza: {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.escala, 0, Math.PI * 2, true);
        ctx.stroke();
      }
      Proceso_pintar_cuello: {
        const cuello_origen_x = this.x;
        const cuello_origen_y = this.y + this.escala;
        const cuello_destino_x = this.x;
        const cuello_destino_y = this.y + this.escala + 10;
        punto_del_cuello_bajo = [cuello_destino_x, cuello_destino_y];
        ctx.moveTo(cuello_origen_x, cuello_origen_y);
        ctx.lineTo(cuello_destino_x, cuello_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_espalda: {
        const espalda_origen_x = punto_del_cuello_bajo[0] - 30;
        const espalda_origen_y = punto_del_cuello_bajo[1];
        const espalda_destino_x = punto_del_cuello_bajo[0] + 30;
        const espalda_destino_y = punto_del_cuello_bajo[1];
        punto_del_hombro_izq = [espalda_origen_x, espalda_origen_y];
        punto_del_hombro_der = [espalda_destino_x, espalda_destino_y];
        ctx.moveTo(espalda_origen_x, espalda_origen_y);
        ctx.lineTo(espalda_destino_x, espalda_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_antebrazo_izq: {
        const antebrazo_izq_origen_x = punto_del_hombro_izq[0];
        const antebrazo_izq_origen_y = punto_del_hombro_izq[1];
        const antebrazo_izq_destino_x = punto_del_hombro_izq[0];
        const antebrazo_izq_destino_y = punto_del_hombro_izq[1] + 50;
        punto_del_codo_izq = [antebrazo_izq_destino_x, antebrazo_izq_destino_y];
        ctx.moveTo(antebrazo_izq_origen_x, antebrazo_izq_origen_y);
        ctx.lineTo(antebrazo_izq_destino_x, antebrazo_izq_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_antebrazo_der: {
        const antebrazo_der_origen_x = punto_del_hombro_der[0];
        const antebrazo_der_origen_y = punto_del_hombro_der[1];
        const antebrazo_der_destino_x = punto_del_hombro_der[0];
        const antebrazo_der_destino_y = punto_del_hombro_der[1] + 50;
        punto_del_codo_der = [antebrazo_der_destino_x, antebrazo_der_destino_y];
        ctx.moveTo(antebrazo_der_origen_x, antebrazo_der_origen_y);
        ctx.lineTo(antebrazo_der_destino_x, antebrazo_der_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_brazo_izq: {
        const brazo_izq_origen_x = punto_del_codo_izq[0];
        const brazo_izq_origen_y = punto_del_codo_izq[1];
        const brazo_izq_destino_x = punto_del_codo_izq[0];
        const brazo_izq_destino_y = punto_del_codo_izq[1] + 50;
        punto_de_la_mano_izq = [brazo_izq_destino_x, brazo_izq_destino_y];
        ctx.moveTo(brazo_izq_origen_x, brazo_izq_origen_y);
        ctx.lineTo(brazo_izq_destino_x, brazo_izq_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_brazo_der: {
        const brazo_der_origen_x = punto_del_codo_der[0];
        const brazo_der_origen_y = punto_del_codo_der[1];
        const brazo_der_destino_x = punto_del_codo_der[0];
        const brazo_der_destino_y = punto_del_codo_der[1] + 50;
        punto_de_la_mano_der = [brazo_der_destino_x, brazo_der_destino_y];
        ctx.moveTo(brazo_der_origen_x, brazo_der_origen_y);
        ctx.lineTo(brazo_der_destino_x, brazo_der_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_columna: {
        const brazo_der_origen_x = punto_del_cuello_bajo[0];
        const brazo_der_origen_y = punto_del_cuello_bajo[1];
        const brazo_der_destino_x = punto_del_cuello_bajo[0];
        const brazo_der_destino_y = punto_del_cuello_bajo[1] + 75;
        punto_del_coxis = [brazo_der_destino_x, brazo_der_destino_y];
        ctx.moveTo(brazo_der_origen_x, brazo_der_origen_y);
        ctx.lineTo(brazo_der_destino_x, brazo_der_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_cadera: {
        const cadera_origen_x = punto_del_coxis[0] - 20;
        const cadera_origen_y = punto_del_coxis[1];
        const cadera_destino_x = punto_del_coxis[0] + 20;
        const cadera_destino_y = punto_del_coxis[1];
        punto_de_la_antepierna_izq = [cadera_origen_x, cadera_origen_y];
        punto_de_la_antepierna_der = [cadera_destino_x, cadera_destino_y];
        ctx.moveTo(cadera_origen_x, cadera_origen_y);
        ctx.lineTo(cadera_destino_x, cadera_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_antepierna_izq: {
        const antepierna_izq_origen_x = punto_de_la_antepierna_izq[0];
        const antepierna_izq_origen_y = punto_de_la_antepierna_izq[1];
        const antepierna_izq_destino_x = punto_de_la_antepierna_izq[0];
        const antepierna_izq_destino_y = punto_de_la_antepierna_izq[1] + 70;
        punto_de_la_rodilla_izq = [antepierna_izq_destino_x, antepierna_izq_destino_y];
        ctx.moveTo(antepierna_izq_origen_x, antepierna_izq_origen_y);
        ctx.lineTo(antepierna_izq_destino_x, antepierna_izq_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_antepierna_der: {
        const antepierna_der_origen_x = punto_de_la_antepierna_der[0];
        const antepierna_der_origen_y = punto_de_la_antepierna_der[1];
        const antepierna_der_destino_x = punto_de_la_antepierna_der[0];
        const antepierna_der_destino_y = punto_de_la_antepierna_der[1] + 70;
        punto_de_la_rodilla_der = [antepierna_der_destino_x, antepierna_der_destino_y];
        ctx.moveTo(antepierna_der_origen_x, antepierna_der_origen_y);
        ctx.lineTo(antepierna_der_destino_x, antepierna_der_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_pierna_izq: {
        const pierna_izq_origen_x = punto_de_la_rodilla_izq[0];
        const pierna_izq_origen_y = punto_de_la_rodilla_izq[1];
        const pierna_izq_destino_x = punto_de_la_rodilla_izq[0];
        const pierna_izq_destino_y = punto_de_la_rodilla_izq[1] + 60;
        punto_del_pie_izq = [pierna_izq_destino_x, pierna_izq_destino_y];
        ctx.moveTo(pierna_izq_origen_x, pierna_izq_origen_y);
        ctx.lineTo(pierna_izq_destino_x, pierna_izq_destino_y);
        ctx.stroke();
      }
      Proceso_pintar_pierna_der: {
        const pierna_der_origen_x = punto_de_la_rodilla_der[0];
        const pierna_der_origen_y = punto_de_la_rodilla_der[1];
        const pierna_der_destino_x = punto_de_la_rodilla_der[0];
        const pierna_der_destino_y = punto_de_la_rodilla_der[1] + 60;
        punto_del_pie_der = [pierna_der_destino_x, pierna_der_destino_y];
        ctx.moveTo(pierna_der_origen_x, pierna_der_origen_y);
        ctx.lineTo(pierna_der_destino_x, pierna_der_destino_y);
        ctx.stroke();
      }

      Proceso_de_pintar_circulos_articulatorios: {
        const puntos = [
          punto_del_cuello_bajo,
          punto_del_hombro_izq,
          punto_del_hombro_der,
          punto_del_codo_der,
          punto_del_codo_izq,
          punto_de_la_mano_izq,
          punto_de_la_mano_der,
          punto_del_coxis,
          punto_de_la_antepierna_izq,
          punto_de_la_antepierna_der,
          punto_de_la_rodilla_izq,
          punto_de_la_rodilla_der,
          punto_del_pie_izq,
          punto_del_pie_der
        ];
        for (let i = 0; i < puntos.length; i++) {
          console.log(`${i} de ${puntos.length}`);
          const punto = puntos[i];
          ctx.beginPath();
          ctx.arc(punto[0], punto[1], 4, 0, Math.PI * 2, true);
          ctx.fillStyle = "#CCC";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(punto[0], punto[1], 4, 0, Math.PI * 2, true);
          ctx.strokeStyle = "#000";
          ctx.stroke();
        }
      }
    }
  }
  const persona = new Persona(ctx);
  persona.pintarse(ctx);
};

window.addEventListener("load", draw);