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

    section_list_container.style.opacity = 0;
    year_section.style.opacity = 0;
    quality_resolution.style.opacity = 0;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            section_list_container.style.opacity = 1;
        });
    });

    button_film_list.className = "clicked-button";
    button_year_list.className = "secondary-button";
    button_quality_list.className = "secondary-button";
});

button_year_list.addEventListener("click", function() {
    section_list_container.style.display = "none";
    year_section.style.display = "grid";
    quality_resolution.style.display = "none";

    section_list_container.style.opacity = 0;
    year_section.style.opacity = 0;
    quality_resolution.style.opacity = 0;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            year_section.style.opacity = 1;
        });
    });

    button_film_list.className = "secondary-button";
    button_year_list.className = "clicked-button";
    button_quality_list.className = "secondary-button";
})

button_quality_list.addEventListener("click", function() {
    section_list_container.style.display = "none";
    year_section.style.display = "none";
    quality_resolution.style.display = "block";

    section_list_container.style.opacity = 0;
    year_section.style.opacity = 0;
    quality_resolution.style.opacity = 0;
    
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            quality_resolution.style.opacity = 1;
        });
    });

    button_film_list.className = "secondary-button";
    button_year_list.className = "secondary-button";
    button_quality_list.className = "clicked-button";
});

// swiper section animation
const swiper_item_collection = document.getElementsByClassName("swiper-item");
let shift = 400;

const swiper_animation = setInterval(function(){
    for (element of swiper_item_collection) {
        element.style.setProperty('left', -shift + "px");
    }
    shift = (shift + 200)%1200;
}, 1500);