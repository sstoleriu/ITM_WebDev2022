function processRegisterRequest(data) {
    fetch('http://localhost:5000/auth/register', {
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
        email: inputs[0].value,
        password: inputs[1].value,
    };
    processRegisterRequest(requestData);
}

document.getElementById('rgBtn').addEventListener('click', registerButtonEvent);