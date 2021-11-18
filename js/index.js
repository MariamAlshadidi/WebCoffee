// // start timer

var countDown = new Date()
countDown =  new Date(countDown.getFullYear() + 1, countDown.getMonth() - 1, 01) //year, month , day

var x = setInterval(function(){
var now = new Date()
var diff = countDown - now

var month = Math.floor(diff/ (1000 * 60 * 60 * 24 * 30 ));
var days = Math.floor(diff % (1000 * 60 * 60 * 24 * 30 ) / (1000 * 60 * 60 * 24)) ; 
var hours =  Math.floor(diff % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60)) ; 
var minutes =  Math.floor(diff % (1000 * 60 * 60 ) / (1000 * 60 ) ); 
var seconds =  Math.floor(diff % (1000 * 60 ) / (1000 ) ); 

document.getElementById("months").innerHTML = month;
document.getElementById("dyas").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("munits").innerHTML = minutes;
document.getElementById("second").innerHTML = seconds;
}, 1000);

// start validation


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

