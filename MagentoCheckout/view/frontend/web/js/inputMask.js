//
// CPF Mask
// __________________
function cpfMask(cpf) {
    cpf = cpf.replace(/\D/g,"");
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

    return cpf;
}

function cepMask(cep){
    cep = cep.replace(/\D/g,"");
    cep = cep.replace(/(\d{5})?(\d{3})?/, "$1-$2");

    return cep;
}

document.addEventListener('DOMContentLoaded', function() {
    var isRendered = setInterval(function() {
        var shippingForm = document.querySelector('select[name="country_id"]');

        if (typeof shippingForm !== 'undefined' && shippingForm != null) {

            // CPF
            // ___
            var cpfInput = document.querySelector('input[name="street[taxvat]"]');

            cpfInput.value = cpfMask(cpfInput.value);

            cpfInput.addEventListener('keyup', function() {
                if(cpfInput.value.length > 14) {
                    cpfInput.value = cpfInput.value.slice(0,14);
                }

                cpfInput.value = cpfMask(cpfInput.value);
            });
            

            // CEP
            //____
            var cepInput = document.querySelector('input[name="postcode"]');

            cepInput.value = cepMask(cepInput.value);

            cepInput.addEventListener('keyup', function(){
                if(cepInput.value.length > 9) {
                    cepInput.value = cepInput.value.slice(0, 9);
                }

                cepInput.value = cepMask(cepInput.value);
            });

            clearInterval(isRendered);
        }
    }, 1000);
});