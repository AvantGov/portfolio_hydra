//  ? used to scroll to the top of the work history containers when the user has landed on those since we are just doing prop switching within copies of the same comp
// ? and not actually changing the rendered component. 
export const toHistoryTop = () => {
    const display = window.document.getElementById("main_display")
    display.scrollTop = 0;
}

// ? same thing here, jsut used for the showcase of portfolio items 
export const toShowcaseTop = () => {
    const showcase = window.document.getElementById("main_showcase")
    showcase.scrollTop = 0;
}
// ? same thing but the home page, for getting the workflow from the footer nav to the home page .. shouldn't need it elsewhere  
export const toHomeTop = () => {
    // const home = window.document.getElementById("main_home")
    const home = window.document.querySelector("#main_home")
    home.scrollTop = 0;
}