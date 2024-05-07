function validarTelefono() {
    var telefono = $('#phone'); 
    var valorTelefono = telefono.val();
    var numeros = /^[0-9]+$/;

    if (!numeros.test(valorTelefono)) {
        $('#phone-error').css('display', 'block');
        return false;
    } else {
        $('#phone-error').css('display', 'none');
        return true;
    }
  }

  $(document).ready(function() {
    $('#contactForm').submit(function(event) {
        if (!validarTelefono()) {
            event.preventDefault();
        }
    });
  });

