document.addEventListener("mousemove", function(e) {
    const sur = document.querySelector("img")
        sur.style.left = `${e.clientX}px`
})