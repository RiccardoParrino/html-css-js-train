/*----------------------database  section----------------------*/

/**
 * Per ogni film
 * Titolo
 * Descrizione
 * Genere
 * Anno
 * Qualità
 * Paese
 * Regista
 * Attori
 * Tags
 * Commenti
 * Film simili
 * Locandina
 */

class Film {
    constructor(
        title, 
        description, 
        genre, 
        year, 
        quality, 
        country,
        director,
        tags,
        comments,
        similar,
        img) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.year = year;
        this.quality = quality;
        this.country = country;
        this.director = director;
        this.tags = tags;
        this.comments = comments;
        this.similar = similar;
        this.img = img;
    }

    get title() {
        return this.title;
    }

    set title(title) {
        this.title = title;
    }

    get description() {
        return this.description;
    }

    set description(description) {
        this.description = description;
    }

    get genre() {
        return this.genre;
    }

    set genre(genre) {
        this.genre = genre;
    }

    get year() {
        return this.year;
    }

    set year(year) {
        this.year = year;
    }

    get quality() {
        return this.quality;
    }

    set quality(quality) {
        this.quality = quality;
    }

    get country() {
        return this.country;
    }

    set country(country) {
        this.country = country;
    }

    get director() {
        return this.director;
    }

    set director(director) {
        this.director = director;
    }

    get tags() {
        return this.tags;
    }

    set tags(tags) {
        this.tags = tags;
    }

    get comments() {
        return this.comments;
    }

    set comments(comments) {
        this.comments = comments;
    }

    get similar() {
        return this.similar;
    }

    set similar(similar) {
        this.similar = similar;
    }

    get img() {
        return this.img;
    }

    set img(img) {
        this.img = img;
    }

}



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
let counter = 0;
let shift = window.getComputedStyle(swiper_item_collection[0]).width;

const swiper_animation = setInterval(function(){

    if (counter < swiper_item_collection.length) {
        console.log(shift);
        for (element of swiper_item_collection) {
            element.style.setProperty('left', "-"+shift);
        }
        shift = parseInt(shift) + parseInt(window.getComputedStyle(swiper_item_collection[counter]).width) + 50;
        shift = shift + "px";
    } else {
        counter = 0;
        shift = window.getComputedStyle(swiper_item_collection[counter]).width;
        for (element of swiper_item_collection) {
            element.style.setProperty('left', "0px");
        }
    }

    counter = counter + 1;

}, 1500);