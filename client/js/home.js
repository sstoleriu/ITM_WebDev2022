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


document.body.addEventListener('scroll', () => {
    var icons = document.getElementById("icons");

    var iconsLeft = document.getElementById("iconsLeft");
    var iconsRight = document.getElementById("iconsRight");

    if(document.body.scrollTop >= icons.offsetTop - 300)
    {
        iconsLeft.style.transform = "translateX(0)";
        iconsRight.style.transform = "translateX(0)";
    }
}, false);