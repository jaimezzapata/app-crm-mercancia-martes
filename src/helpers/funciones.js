import Swal from 'sweetalert2'
export function alertaRedireccion(redireccion, mensaje, ruta) {
    let timerInterval;
    Swal.fire({
        title: mensaje,
        html: "Será redireccionado en <b></b> milisegundos.",
        timer: 5500,
        icon: "success",
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            redireccion(ruta)
        }
    })
}

export function alertaError() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
}

