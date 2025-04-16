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





