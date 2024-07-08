function validarFormulario() {
    var numberA = parseFloat(document.getElementById('number-a').value);
    var numberB = parseFloat(document.getElementById('number-b').value);

    if (numberB > numberA) {
        alert("Perfeito! O número "+ numberB +" é maior que o número "+ numberA +"");
        return false;
    } else {
        alert("Número "+ numberB +" é menor que número "+ numberA +"!")
    }

    
}

document.getElementById("form-comparar").addEventListener("submit", function(e) {
    e.preventDefault();
    validarFormulario();
});
