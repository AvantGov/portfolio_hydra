//? used to reveal the visualizer mode of the website 
export const ShowVideo = () => {
    var display = window.document.getElementById("main_display")
    var AudCont = window.document.getElementById("Comp_AudCont")
    display.style.display = "none"
    AudCont.style.display = "flex"
}