document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var alert = document.getElementById("warning");
    var span = document.querySelector(".close");

    alert.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
