const questions = document.querySelector(".questions")

const onClickDetails = e => {
    console.dir(e)
}

questions.addEventListener("click", e => {
    console.dir(e.target)
    const parag = e.target.firstElementChild
    console.dir(parag)
    if (e.target.tagName !== "LI") return
    parag.classList.toggle("hidden")
    console.dir(parag.classList.contains("hidden"))
    e.target.style.backgroundImage = parag.classList.contains("hidden")
        ? "url('./imgs/assets/arrow-in.png')"
        : "url('./imgs/assets/arrow-out.png')"

})