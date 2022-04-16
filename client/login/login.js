function processLoginRequest(data) {
    fetch('http://localhost:5000/auth/login', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
            if(res.status === 201) {
                window.location = "/user/profile";
            } else {
                alert('Error!');
            }
    });
}

function loginButtonEvent() {
    let inputs = document.getElementsByTagName('input');
    let requestData = 
    {
        'email': inputs[0].value,
        'password': inputs[1].value,
    };
    processLoginRequest(requestData);
}

document.getElementById('lgBtn').addEventListener('click', loginButtonEvent);