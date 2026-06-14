// Creamos un saldo inicial si no existe
if (!localStorage.getItem("saldo")) {
    localStorage.setItem("saldo", 250000);
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;

        if (usuario === "admin" && password === "1234") {

            window.location.href = "menu.html";

        } else {

            alert("Usuario o contraseña incorrectos");

        }

    });

}

const saldoElemento = document.getElementById("saldo");

if (saldoElemento) {

    const saldo = localStorage.getItem("saldo");

    saldoElemento.textContent = "$" + Number(saldo).toLocaleString("es-CL");

}

const depositForm = document.getElementById("depositForm");

if (depositForm) {

    depositForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const monto = Number(document.getElementById("montoDeposito").value);

        let saldoActual = Number(localStorage.getItem("saldo"));

        saldoActual += monto;

        localStorage.setItem("saldo", saldoActual);

        alert("Depósito realizado con éxito");

        window.location.href = "menu.html";

    });

}

const sendMoneyForm = document.getElementById("sendMoneyForm");

if (sendMoneyForm) {

    sendMoneyForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const destinatario = document.getElementById("destinatario").value;
        const monto = Number(document.getElementById("montoEnvio").value);

        let saldoActual = Number(localStorage.getItem("saldo"));

        if (monto <= 0) {

            alert("Ingrese un monto válido");
            return;

        }

        if (monto > saldoActual) {

            alert("Saldo insuficiente");
            return;

        }

        saldoActual -= monto;

        localStorage.setItem("saldo", saldoActual);

        alert("Transferencia enviada a " + destinatario);

        window.location.href = "menu.html";

    });

}