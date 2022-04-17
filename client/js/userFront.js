technologies = ["Assembly", "C", "C++", "Python", "JavaScript", "Java", "Kotlin", "pytho3n"];

function renderSelectInput(id, selectedSkills) {
    let select = document.getElementById(id);
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

        document.getElementById("loginButton").innerHTML = "Profile";

        document.getElementById("email").value = jsonResponse.email;
        document.getElementById("studName").innerHTML = jsonResponse.email;
        document.getElementById("type").innerHTML = jsonResponse.isCompany === false ? 'student' : 'company';

        renderSelectInput("my-select1", jsonResponse['iKnow']);
        renderSelectInput("my-select2", jsonResponse['iWant']);
        
        document.getElementById("start-date").value = jsonResponse['startDate'].split('T')[0];
        document.getElementById("end-date").value = jsonResponse['endDate'].split('T')[0];
    }
    xhttp.open("GET", "http://localhost:5000/user/profile-data", true);
    xhttp.send();
}
getProfileData();

function saveProfile() {
    const xhttp = new XMLHttpRequest();

    var iKnow = [];
    document.querySelectorAll("#ms-my-select1 .ms-selection .ms-selected span").forEach(element => {
        iKnow.push(element.innerHTML);
    });

    var iWant = [];
    document.querySelectorAll("#ms-my-select2 .ms-selection .ms-selected span").forEach(element => {
        iWant.push(element.innerHTML);
    });


    var payload = {
        "email": document.getElementById("email").value,
        "iWant": iWant,
        "iKnow": iKnow,
        "startDate": document.getElementById("start-date").value,
        "endDate": document.getElementById("end-date").value
    }
    xhttp.onload = function() {
        window.alert(this.responseText);
    }
    xhttp.open("PUT", "http://localhost:5000/user/update", true);
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhttp.send(JSON.stringify(payload));
}