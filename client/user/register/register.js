function processRegisterRequest(data) {
    fetch('http://localhost:5000/api/auth/register', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then((res) => {
        res.json().then(data => {
            console.log(res.status);
            console.log(data);
            if(res.status === 201) {
                alert('Register Succesfull!');
            } else {
                alert('Error!');
            }
        });
    });
}

function registerButtonEvent() {
    let inputs = document.getElementsByTagName('input');
    let requestData = {
        username: inputs[0].value,
        email: inputs[1].value,
        password: inputs[2].value,
    };
    processRegisterRequest(requestData);
}

document.getElementById('rgBtn').addEventListener('click', registerButtonEvent);