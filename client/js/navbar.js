var bars = document.getElementById('menuB')

bars.addEventListener('click', () => {
    var x = document.getElementById('mobile-nav');

    x.style.display = x.style.display == 'none' ? 'block' : 'none';
});


function getProfileData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        console.log(JSON.parse(this.responseText));
        jsonResponse = JSON.parse(this.responseText);

        document.getElementById("matchingButton").style.display = "flex";

        document.getElementById("logoutButton").style.display = "flex";
        document.getElementById("loginButton").innerHTML = "Profile";
        document.getElementById("RegisterButton").style.display = "none";
    }
    xhttp.open("GET", "http://localhost:5000/user/profile-data", true);
    xhttp.send();
}
getProfileData();