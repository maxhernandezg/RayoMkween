function validarTelefono() {
    var telefono = $('#phone'); 
    var valorTelefono = telefono.val();

    var numeros = /^[0-9]+$/;

    if (!numeros.test(valorTelefono)) {
        alert('El número de teléfono solo debe contener dígitos numéricos.');
    }
}

$(document).ready(function() {
    $('#submitbtn').click(function() {
        validarTelefono();
    });
});

