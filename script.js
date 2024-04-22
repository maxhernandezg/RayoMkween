function validarTelefono() {
    var telefono = document.getElementById('phone');
    var valorTelefono = telefono.value;

    var numeros = /^[0-9]+$/;

    if (!numeros.test(valorTelefono)) {
        alert('El número de teléfono solo debe contener dígitos numéricos.');

    }
}
