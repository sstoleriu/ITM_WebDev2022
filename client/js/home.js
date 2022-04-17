const { response } = require("express");

document.body.addEventListener('scroll', () => {
    var x = document.getElementById("homeContent");

    var left = document.getElementById("homeLeft");
    var right = document.getElementById("homeRight");
 
    if(document.body.scrollTop >= x.offsetTop - 500)
    {
        left.style.transform = "TranslateX(0)";
        right.style.transform = "TranslateX(0)";
    }
}, false);
