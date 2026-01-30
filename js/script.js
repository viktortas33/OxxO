const app = Vue.createApp({

    data() {
        return {
            cantidad: 0,
            precio: 0,
            nombre: '',
            lista: [],


            /*colorFondo: '',
            colorLetra: '',
            imagenFondo: 'steve',
            usuario: '',
            tamano: 12,
            colorcito: 'rgb(109, 30, 11)',
            anchor: 400,
            cant: 0,*/
        }
    },

    methods: {
        agregar() {
            if (this.nombre != '' && this.cantidad > 0 && this.precio > 0) {

                this.lista.push({
                    nombre: this.nombre,
                    precio: this.precio,
                    cantidad: this.cantidad,
                });

                //limpiar
                this.nombre = '';
                this.cantidad = 0;
                this.precio = 0;
            }
        },
        borrar(dato) {
            if (confirm("Eliminar este Producto?")) {
                this.lista.splice(dato, 1);
            }
        }


        /*perfil(p) {
            this.imagenFondo = p;
        }*/
    },
    computed: {
        subtotal() {
            return this.lista.reduce((acc, producto) => {
                return acc + (producto.precio * producto.cantidad);
            }, 0);
        },
        iva() {
            return this.subtotal * 0.16; // 16% IVA
        },
        total() {
            return this.subtotal + this.iva;
        },
        cant() {
            return this.lista.reduce((acc, producto) => {
                return acc + producto.cantidad;
            }, 0);
        }

        /*imagenComputada() {
            return '../img/' + this.imagenFondo + '.png';
        },
        fuente() {
            return {
                fontSize: this.tamano + 'px',
                color: this.colorcito,
                fontWeight: this.anchor,
            }

        },*/
    }
});
const app1 = app.mount("#oxxo")