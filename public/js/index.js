var fechaObjetivo = new Date('2023-11-11');

function actualizarContador() {
    // Fecha actual
    var fechaActual = new Date();

    // Diferencia entre la fecha objetivo y la fecha actual en milisegundos
    var diferencia = fechaObjetivo.getTime() - fechaActual.getTime();

    // Cálculos para obtener días, horas, minutos y segundos restantes
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el contador en la página
    document.getElementById('days').innerHTML = dias;
    document.getElementById('hours').innerHTML = horas;
    document.getElementById('minuts').innerHTML = minutos;
    document.getElementById('seconds').innerHTML = segundos;

    // Actualizar el contador cada segundo
    setTimeout(actualizarContador, 1000);
  }
  actualizarContador();


  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var fadeDownElements = document.querySelectorAll(".fade-down");
      for (var i = 0; i < fadeDownElements.length; i++) {
        var element = fadeDownElements[i];
        if (isElementInViewport(element)) {
          element.classList.add("fade-in");
        }
      }
    });
    
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  });
  

  function expandImage(img) {
    var overlay = document.querySelector('.overlay');
    var expandedImage = document.createElement('img');
    expandedImage.src = "./assets/itinerario.png";
    expandedImage.classList.add('expanded-image');
    overlay.appendChild(expandedImage);
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  
  function closeImage() {
    var overlay = document.querySelector('.overlay');
    overlay.innerHTML = '';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
