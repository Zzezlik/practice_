const questions = document.querySelector(".questions")

const onClickDetails = e => {
    console.dir(e)
}

questions.addEventListener("click", e => {
    console.dir(e.target)
    const parag = e.target.firstElementChild
    console.dir(parag)
})