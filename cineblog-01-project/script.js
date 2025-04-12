/*----------------------database  section----------------------*/

/*----------------------backend   section----------------------*/

/*----------------------frontend  section----------------------*/

/*----------------------animation section----------------------*/

// right content section list
const button_film_list = document.getElementById("button-film-list");
const button_year_list = document.getElementById("button-year-list");
const button_quality_list = document.getElementById("button-quality-list");

const section_list_container = document.getElementsByClassName("section-list-container")[0];
const year_section = document.getElementsByClassName("year-section")[0];
const quality_resolution = document.getElementsByClassName("quality-resolution")[0];

button_film_list.addEventListener("click", function () {
    section_list_container.style.display = "flex";
    year_section.style.display = "none";
    quality_resolution.style.display = "none";
});

button_year_list.addEventListener("click", function() {
    section_list_container.style.display = "none";
    year_section.style.display = "grid";
    quality_resolution.style.display = "none";
})

button_quality_list.addEventListener("click", function() {
    section_list_container.style.display = "none";
    year_section.style.display = "none";
    quality_resolution.style.display = "block";
});