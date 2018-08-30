//function UserAction() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200)
//    };
//    xhttp.open("POST", "https://api.iextrading.com/1.0/stock/aapl/company", true);
//    xhttp.setRequestHeader("Content-type", "application/json");
//    xhttp.send("Your JSON Data Here");
//}
function myFunction() {
    var xhttp = new XMLHttpRequest();
    var symbol = document.getElementById('id1').value;
    //var API_Path = "https://api.iextrading.com/1.0/stock/{0}/company";
    //API_Path = string.Format(API_Path, symbol);
    var url = "https://api.iextrading.com/1.0/stock/aapl/company";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}


//    const app = document.getElementById('root');

////const logo = document.createElement('img');
////logo.src = 'logo.png';

//const container = document.createElement('div');
//container.setAttribute('class', 'container');

//app.appendChild(logo);
//app.appendChild(container);

//var request = new XMLHttpRequest();
//request.open('GET', 'https://api.iextrading.com/1.0/stock/aapl/company', true);

////request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
//request.onclick = function myFunction() {

//    // Begin accessing JSON data here
//    var data = JSON.parse(this.response);
//    if (request.status >= 200 && request.status < 400) {
        
//        document.write(data.symbol);
//        ;
//    } else {
//        const errorMessage = document.createElement('marquee');
//        errorMessage.textContent = `Gah, it's not working!`;
//        app.appendChild(errorMessage);
//    }
//}

//request.send();