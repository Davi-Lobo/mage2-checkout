//
// Address Autocomplete
// _______________________
document.addEventListener('DOMContentLoaded', function() {
    var cepMaxLength = 9;

    var isRendered = setInterval(function() {
        var shippingForm = document.querySelector('select[name="country_id"]');

        if (typeof shippingForm !== 'undefined' && shippingForm != null) {
            var cepInput = document.querySelector('input[name="postcode"]');
            
            cepInput.addEventListener('focusout', function(){
                var cepValue = cepInput.value;

                if(cepValue.length >= cepMaxLength) {
                    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
                    .then(response => response.json())
                    .then(data => {
                        var streetInput = document.querySelector('input[name="street[0]"]');
                        var cityInput = document.querySelector('input[name="city"]');

                        if(data.erro) {
                            cepInput.value = "";
                            streetInput.value = "";
                            cityInput.value = "";
                        } else {
                            streetInput.value = data.logradouro;
                            cityInput.value = data.localidade;
                        }

                    });
                }
            })

            clearInterval(isRendered);
        }
    }, 1000);
});