/* 
    Full Name: Monella Mae D. Due
    Section: CS-201
    Final Exam: Digital Everbloom
    Date: October 2, 2024
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("de-logo");
    if(menu.style.display === "block" && logo.style.display === "none"){
       menu.style.display = "none";
       logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}