
        // Typing Effect
    const roles = ["Software Developer", "DSA Learner", "Problem Solver"]
    let i = 0, j = 0, current = "", isDeleting = false
    function type() {
        current = roles[i]
            isDeleting ? j-- : j++
    document.getElementById("typing").innerText = current.substring(0, j)
    if (!isDeleting && j === current.length) {isDeleting = true; setTimeout(type, 1000); return }
    if (isDeleting && j === 0) {isDeleting = false; i = (i + 1) % roles.length }
    setTimeout(type, isDeleting ? 50 : 100)
        }
    type()

    // Scroll Reveal Animation
    const cards = document.querySelectorAll('.card')
        window.addEventListener('scroll', () => {
        cards.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add('show')
            }
        })
    })
    < script >

const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", function (e) {
    e.preventDefault();   // page reload stop

    popup.style.display = "flex";
    form.reset();
});

function closePopup() {
    popup.style.display = "none";
}

</script >