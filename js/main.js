let ourSkills = document.querySelector(".our-skills");
let htmlElement = document.querySelector(".html");
let cssElement = document.querySelector(".css");
let javascriptElement = document.querySelector(".javascript");
let pythonElement = document.querySelector(".python");



let stats = document.querySelector(".stats");
let statsNumbers = document.querySelectorAll(".box-stats p");
let finalValues = [150, 135, 50, 500];
let scrollFactor = 0.3; 

window.onscroll = function () {
    if (window.scrollY >= ourSkills.offsetTop + 50 ) {
        htmlElement.style.setProperty('--width', '80%');
        cssElement .style.setProperty('--width', '85%');
        javascriptElement.style.setProperty('--width', '70%');
        pythonElement.style.setProperty('--width', '80%');
    }
    
        if (window.scrollY >= stats.offsetTop - 100) {
            statsNumbers.forEach(function (number, index) {
           
              let newNumber = Math.min(finalValues[index], Math.floor((window.scrollY - (stats.offsetTop - 100 )) / scrollFactor));
      
           
              number.textContent = newNumber;
            });
          } else {
         
            statsNumbers.forEach(function (number) {
              number.textContent = "0";
            });
          }
}

