document.addEventListener("DOMContentLoaded", function () {
    var inputTelefone = document.querySelector("input[type=tel]");
  
    var teclas = document.querySelectorAll(".teclado input[type=button]");
  
    teclas.forEach(function (tecla) {
      tecla.addEventListener("click", function () {
        var numero = this.value;
  
        inputTelefone.value += numero;
      });
    });
  });