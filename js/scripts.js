
$(function () {
    $("#number").mask("+999 99 999-99-99");
});
$(function () {
    $("#time").mask("99.99");
});


$(".accordion").find(".accordion-toggle").on('click', function() {
    $(this).toggleClass("active-tab").find("i").toggleClass("icon-minus icon-plus");
    $(this).next().toggleClass("open").slideToggle("fast");
});
var
    e = document.getElementById("filt-css"),
    d = document.querySelector(".toggler--is-active"),
    b = document.getElementById("switcher");
t = document.querySelector(".toggler--is-active");

e.addEventListener("click", function(){

    if(b.checked === false){
        d.classList.remove("toggler--in-active");
        t.classList.add("toggler--is-active");
        document.getElementById("demo").innerHTML = "Включить"
    }
    else if(b.checked === true){
        d.classList.remove("toggler--is-active");
        t.classList.add("toggler--in-active");
        document.getElementById("demo").innerHTML = "Отключить"
    }
});

var
    l = document.getElementById("filt-css2"),
    m = document.querySelector(".toggler--is-active2"),
    k = document.getElementById("switcher2");
j = document.querySelector(".toggler--is-active2");

l.addEventListener("click", function(){

    if(k.checked === false){
        m.classList.remove("toggler--in-active2");
        j.classList.add("toggler--is-active2");
        document.getElementById("demo2").innerHTML = "Открыть"
    }
    else if(k.checked === true){
        m.classList.remove("toggler--is-active2");
        j.classList.add("toggler--in-active2");
        document.getElementById("demo2").innerHTML = "Закрыть"
    }
});


