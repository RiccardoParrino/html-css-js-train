---
marp: true
---

# Basics in jQuery

---

# Topics
0) Introduction
1) HTML/DOM manipulation
2) CSS manipulation
3) HTML event methods
4) Effects and animations
5) AJAX
6) Utilities

---

# Introduction

---

# Introduction: How to import

1) Download the minified file and import as script
```
<head>
<script src="jquery-3.7.1.min.js"></script>
</head>
```

2) Include from a CDN
```
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
```
---

# Introduction: General Syntax
```
$(selector).action()

// examples
$(this).hide(); // hides the current element
$("p").hide(); // hides all <p> elements
$(".test").hide() // hides all elements with class="test"
$("#test").hide() // hides the element with id="test"

```

General tip: make sure to execute jQuery method only after the page is completely loaded

---

# Introduction: Selectors
1) Element Selector
```
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    })
})
```
2) #id Selector
```
$(document).ready(function(){
    $("p").click(function(){
        $("#test").hide();
    })
})
```
---
# Introduction: Selectors (2)
3) .class Selector
```
$(document).ready(function(){
    $("button").click(function(){
        $(".test").hide();
    })
})
```
---
# Introduction: Event
Common events: ready, click, dblclick, mouseenter, mouseleave, mousedown, mouseup, hover, focus, blur, on

---

# jQuery Effects: Hide and Show

1) Example hide

```
// general syntax: $(selector).hide(speed, callback)

$(#hide).click(function(){
    $("p").hide();
});
```

2) Example show
```
// general syntax: $(selector).show(speed, callback)

$("#show").click(function(){
    $("p").show();
})
```
---

# jQuery Effects: Fading
1) fadeIn()
2) fadeOut()
3) fadeToggle()
4) fadeTo()

---

# jQuery Effects: Slide

---

# jQuery Effects: Animate

---

# jQuery Effects: stop()

---

# jQuery Effects: Callback

---

# jQuery Effects: Chaining

---

# jQuery HTML: Topics
1) Get
2) Set
3) Add
4) Remove
5) CSS Classes
6) css()
7) Dimensions

---

# jQuery HTML: get
1) text()
2) html()
3) val()
4) attr()

<br>

```
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});
```

---

# jQuery HTML: set
1) text(), text(callback_function())
2) html(), html(callback_function())
3) val(), val(callback_function())
4) attr(), attr(callback_function())

<br>

```
$("#btn1").click(function(){
  $("#test1").text("Hello world!");
});
$("#btn1").click(function(){
  $("#test1").text(function(i, origText){
    return "Old text: " + origText + " New text: Hello world!
    (index: " + i + ")";
  });
});
```

---

# jQuery HTML: add
1) append() - inserts content at the end of the selected elements
2) prepend() - Inserts content at the beginning od the selected elements
3) after() - Inserts content adter the selected elements
4) before() - Inserts content before the selected elements

```
function appendText() {
  var txt1 = "<p>Text.</p>";               // Create element with HTML 
  var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
  var txt3 = document.createElement("p");  // Create with DOM
  txt3.innerHTML = "Text.";
  $("body").append(txt1, txt2, txt3);      // Append the new elements
}
```
--- 

# jQuery HTML: remove
1) remove() - Removes the selected element (and its child elements)
2) empty() - Removes the child elements from the selected element
```
$("#div1").empty();
```

3) filter the elements to be removed
```
$("p").remove(".test, .demo");
```
---

# jQuery HTML: CSS Classes

---

# jQuery HTML: css()

---

# jQuery HTML: Dimensions



