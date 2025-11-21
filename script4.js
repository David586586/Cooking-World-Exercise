function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}


function calPortions() {
    let portion = document.getElementById("inputField").value;
    if (portion < 1) {
      document.getElementById(
        "alertInput"
      ).innerHTML = `Portionsgröße zwischnen 1 und 20 angeben!`;
    } else {
      if (portion > 10) {
        document.getElementById(
          "alertInput"
        ).innerHTML = `Portionsgröße zwischnen 1 und 20 angeben!`;
      } else {
        document.getElementById("ingredient1").innerHTML = 0.25 * portion;
        document.getElementById("ingredient2").innerHTML = 0.25 * portion;
        document.getElementById("ingredient3").innerHTML = 0.25 * portion;
        document.getElementById("ingredient4").innerHTML = 125 * portion;
        document.getElementById("ingredient5").innerHTML = 0.25 * portion;
        document.getElementById("ingredient6").innerHTML = 0.25 * portion;
        document.getElementById("ingredient7").innerHTML = 0.25 * portion;
        document.getElementById("ingredient8").innerHTML = 0.25 * portion;
        document.getElementById("ingredient9").innerHTML = 0.25 * portion;
        document.getElementById("ingredient10").innerHTML = 0.25 * portion;
        document.getElementById("alertInput").innerHTML = ``;
      }
    }
  }
 