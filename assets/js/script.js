$("a").click(function (event) {

    if (this.hash !== "") {

        event.preventDefault();

        var hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 250); // primero probar con 0 y aumente de 1000 en 1000 para ver diferencia
    }
});
var tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$("#BotonContacto").click(function (e) {
    e.preventDefault();
    alert("¡Mensaje enviado correcamente!");
});