let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else if (styles.contains('decrease5')) {
            count -= 5
        } else if (styles.contains('increase5')) {
            count += 5
        } else if (styles.contains('random')) {
            // Generate a random number between -50 and 50
            count = Math.floor(Math.random() * 101) - 50;
        } else {
            count = 0
        }

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else if (count == 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    })
})