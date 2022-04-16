technologies = ["Assembly", "C", "C++", "Python", "JavaScript", "Java", "Kotlin", "pytho3n"];

function renderSelectInput(id, selectedSkills) {
    let select = document.getElementById(id);
    console.log(selectedSkills);
    technologies.forEach(technology => {
        let isSelected = "";
        if(selectedSkills.includes(technology))
            isSelected = " selected"
        select.innerHTML += "<option value='" + technology + "'" + isSelected + ">" + technology + "</option>";
    });

    $("#" +  id).multiSelect();
}

function getProfileData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        console.log(JSON.parse(this.responseText));
        jsonResponse = JSON.parse(this.responseText);

        document.getElementById("email").value = jsonResponse.email;

        renderSelectInput("my-select1", jsonResponse['iKnow']);
        renderSelectInput("my-select2", jsonResponse['iWant']);
    }
    xhttp.open("GET", "http://localhost:5000/user/profile-data", true);
    xhttp.send();
}
getProfileData();

function saveProfile() {
    const xhttp = new XMLHttpRequest();

    var payload = {
        "iWant": ["C++", "Java", "Kotlin"]
    }

    xhttp.open("PUT", "http://localhost:5000/user/update", true);
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhttp.send(JSON.stringify(payload));
}