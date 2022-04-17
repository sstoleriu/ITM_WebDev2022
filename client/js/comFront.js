technologies = ["Assembly", "C", "C++", "Python", "JavaScript", "Java", "Kotlin", "pytho3n"];

function renderAllTechnologies(id) {
    let select = document.getElementById(id);
    technologies.forEach(technology => {
        select.innerHTML += "<option value='" + technology + "'>" + technology + "</option>";
    });

    $("#" +  id).multiSelect();
}

renderAllTechnologies("my-select1");


function getProfileData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        console.log(JSON.parse(this.responseText));
        jsonResponse = JSON.parse(this.responseText);

        document.getElementById("email").value = jsonResponse.email;
        document.getElementById("compName").innerHTML = jsonResponse.email;
        document.getElementById("type").innerHTML = jsonResponse.isCompany === false ? 'company' : 'student';

        renderSelectInput("my-select1", jsonResponse['internships gi']);
        renderSelectInput("my-select2", jsonResponse['iWant']);
        
        document.getElementById("start-date").value = jsonResponse['startDate'].split('T')[0];
        document.getElementById("end-date").value = jsonResponse['endDate'].split('T')[0];
    }
    xhttp.open("GET", "http://localhost:5000/user/profile-data", true);
    xhttp.send();
}
//getProfileData();

function addInternship() {
    const xhttp = new XMLHttpRequest();

    var tech = [];
    document.querySelectorAll("#ms-my-select1 .ms-selection .ms-selected span").forEach(element => {
        tech.push(element.innerHTML);
    });

    var preparedTechnologies = []
    tech.forEach(t => {
        preparedTechnologies.push({"name" : t});
    })

    console.log(preparedTechnologies);

    var payload = {
        "name": document.getElementById("nume-internship").value,
        "technologies": preparedTechnologies
    }

    payload = {'internships': [payload]};

    xhttp.onload = function() {
        window.alert(this.responseText);
    }

    xhttp.open("PUT", "http://localhost:5000/com/add-internship", true);
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhttp.send(JSON.stringify(payload));
}