    function getColorClass(number) {


        if (number >= 0 && number <= 39) {
            return "bg-danger";
        } else if (number > 39 && number <= 69) {
            return "bg-info";
        } else if (number > 69 && number <= 100) {
            return "bg-success";

        }
    }

    function clearClass(progres) {
        progres.classList.remove("bg-danger", "bg-info", "bg-success");
    }

    function checkNumber(number) {
        if (number < 0 || number > 100) {
            alert("Iveskite skaiciu nuo 0-100");
        } else {
            return true;
        }
    }

    document.getElementById("input").addEventListener("focus", function() {
        document.getElementById("input").value = "";
    })

    document.getElementById("btn").addEventListener("click", function() {
        var getNumber = document.getElementById("input").value;
        if (checkNumber(getNumber)) {
            var getColorName = getColorClass(getNumber);
            var progres = document.getElementById("progres");
            clearClass(progres);
            progres.classList.add(getColorName);
            progres.style.width = getNumber + "%";
        }
    })

    var getColor = document.getElementsByClassName("progress-bar");