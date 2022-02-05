let btn = document
  .querySelector("button")
  .addEventListener("click", function () {
    var billinput = document.getElementById("bila").value;
    var peopleinput = document.getElementById("pepa").value;
    var qual = document.getElementById("inlineFormCustomSelectPref").value;
    let result = document.querySelector(".results");
    let tipmat = document.getElementById("TIPamt");
    let out;
    if (billinput === "" || peopleinput === "") {
      alert("Please enter valid values");
    } else {
      if (qual == 1) {
        out = billinput / 100;
        tipmat.innerHTML = out;
      } else if (qual == 2) {
        out = (2 * billinput) / 100;
        tipmat.innerHTML = out;
      } else if (qual == 3) {
        out = (5 * billinput) / 100;
        tipmat.innerHTML = out;
      }
    }

    result.classList.remove("hide");
  });
