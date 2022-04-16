function processLoginRequest(data) {
    fetch('http://localhost:5000/auth/login', {
        method:'POST',
        body:JSON.stringify(data)
    }).then((res) => {

        res.json().then(data => {
            console.log(res.status);
            console.log(data);
            if(res.status === 201) {
                alert('Login Succesfull!');
            } else {
                alert('Error!');
            }
        });
    });
}

function loginButtonEvent() {
    let inputs = document.getElementsByTagName('input');
    let requestData = {
        username: inputs[0].value,
        password: inputs[1].value,
    };
    processLoginRequest(requestData);
}

document.getElementById('lgBtn').addEventListener('click', loginButtonEvent);