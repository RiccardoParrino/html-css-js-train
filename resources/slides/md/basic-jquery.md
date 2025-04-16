---
marp: true
---

# Basics in jQuery

---

# Topics
1) Introduction
2) jQuery HTML
3) jQuery Traversing
4) jQuery AJAX

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
1) slideDown()
2) slideUp()
3) slideToggle()
```
$(selector).slide(speed,callback); // general syntax
```
---

# jQuery Effects: Animate
```
$(selector).animate({params},speed,callback);
```

---

# jQuery Effects: stop()

<br>

```
$(selector).stop(stopAll,goToEnd);

$("#stop").click(function(){
  $("#panel").stop();
});
```
---

# jQuery Effects: Chaining
Chaining technique: chianing the effects applied to an element
```
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
```
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
1) addClass() - Adds one or more classes to the selected elements
2) removeClass() - Removes one or more classes from the selected elements
3) toggleClass() - Toggles between adding/removing classes from the selected elements
4) css() - Sets or returns the style attribute
```
$("button").click(function(){
  $("h1, h2, p").addClass("blue");
  $("div").addClass("important");
});
```
---

# jQuery HTML: css()
1) Return a CSS Property
2) Set a CSS Property
3) Set Multiple CSS Properties
<br>
```
css("propertyname"); // returns a property
```

```
css({"propertyname":"value","propertyname":"value",...}); // setting multi props
```

---

# jQuery HTML: Dimensions
1) width()
2) height()
3) innerWidth()
4) innerHeight()
5) outerWidth()
6) outerHeight()
```
$("button").click(function(){
  var txt = "";
  txt += "Outer width: " + $("#div1").outerWidth() + "</br>";
  txt += "Outer height: " + $("#div1").outerHeight();
  $("#div1").html(txt);
});
```

# jQuery Traversing
1) Traversing
2) Ancestors
3) Descendants
4) Siblings
5) Filtering

---

# jQuery Traversing: Ancestors
1) parent()
2) parents()
3) parentsUntil()

```
$(document).ready(function(){
  $("span").parents(); // all parents until html
});

$(document).ready(function(){
  $("span").parents("ul"); // all parents that are ul
});

$(document).ready(function(){
  $("span").parentsUntil("div");
});
```

---

# jQuery Traversing: Descendants
1) children() - returns all direct children of the selected element
```
$(document).ready(function(){
  $("div").children();
});
```
2) find() - returns descendant elemnt of the selected element, to the last descendant
```
$(document).ready(function(){
  $("div").find("span");
});
```

---

# jQuery Traversing: Siblings
1) siblings()
2) next(), nextAll(), nextUntil()
3) prev(), prevAll(), prevUntil()

---

# jQuery Traversing: Filtering
1) first(), last(), eq(), filter(), not()

```
$(document).ready(function(){
  $("div").first();
});
```

---

# jQuery AJAX
1) Load
2) Get/Post

---

# jQuery AJAX: load
1) $(selector).load(URL,data,callback);
<br>
```
$("button").click(function(){
  $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      alert("External content loaded successfully!");
    if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});
```

---

# jQuery AJAX; get() and post()
1) get request example
```
$.get(URL,callback);
$("button").click(function(){
  $.get("demo_test.asp", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});
```
2) post request example
```
$.post(URL,data,callback);
$("button").click(function(){
  $.post("demo_test_post.asp",
  {
    name: "Donald Duck",
    city: "Duckburg"
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});
```
