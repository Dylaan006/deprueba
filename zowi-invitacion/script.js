
const xvYearsDate = new Date(2023, 11, 8, 21, 0, 0);

function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const diferencia = xvYearsDate - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    const countdownTimer = document.getElementById('countdown-timer');
    countdownTimer.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}


actualizarCuentaRegresiva();
setInterval(actualizarCuentaRegresiva, 1000);








