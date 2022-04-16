document.body.addEventListener('scroll', () => {
    var x = document.getElementById("homeContent1");

    var left = document.getElementById("homeLeft1");
    var right = document.getElementById("homeRight1");
 
    if(document.body.scrollTop >= x.offsetTop - 500)
    {
        left.style.transform = "TranslateX(0)";
        right.style.transform = "TranslateX(0)";
    }
}, false);

document.body.addEventListener('scroll', () => {
    var x = document.getElementById("homeContent2");

    var left = document.getElementById("homeLeft2");
    var right = document.getElementById("homeRight2");
 
    if(document.body.scrollTop >= x.offsetTop - 500)
    {
        left.style.transform = "TranslateX(0)";
        right.style.transform = "TranslateX(0)";
    }
}, false);