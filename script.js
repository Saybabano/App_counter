let count = 0;

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    });
});

