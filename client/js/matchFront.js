function getMatchData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        console.log(JSON.parse(this.responseText));
        jsonResponse = JSON.parse(this.responseText);

        for (const [companie, value] of Object.entries(jsonResponse)) {
            for (const [internship, procent] of Object.entries(value)) {
                if(procent >= 50)
                {
                    var matchCard =
                    `<div class="match-card">
                        <span class="match-card-c-name">
                            <i class="fa-solid fa-building"></i>
                            `+ companie +`
                        </span>

                        <span class="match-card-i-name">
                            <i class="fa-solid fa-file-contract"></i>
                            `+ internship +`
                        </span>

                        <span class="match-card-i-period">
                            <i class="fa-solid fa-calendar"></i>
                            dd-mm-yyyy -- dd-mm-yyyy
                        </span>

                        <span class="match-card-proc">
                            <i class="fa-solid fa-percent"></i>
                            `+ procent +`%
                        </span>
                    </div>`;

                    document.getElementById("match-card-wrapper").innerHTML += matchCard; 
                }
            }
        }
    }
    xhttp.open("GET", "http://localhost:5000/matching/find", true);
    xhttp.send();
}
