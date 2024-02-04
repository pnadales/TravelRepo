
// Smooth scroll a enlaces del navbar
$("a").click(function (event) {

    if (this.hash !== "") {

        event.preventDefault();

        var hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 250);
    }
});

// Tooltip boton e iconos
var tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// alerta para boton enviar
$("#BotonContacto").click(function (e) {
    e.preventDefault();
    alert("¡Mensaje enviado correcamente!");
});