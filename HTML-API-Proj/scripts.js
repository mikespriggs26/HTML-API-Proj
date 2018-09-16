
function myFunction() {
    var xhttp = new XMLHttpRequest();
    var symbol = document.getElementById('id1').value;
    //var API_Path = "https://api.iextrading.com/1.0/stock/{0}/stats";
    //API_Path = string.Format(API_Path, symbol);
    var urlPrefix = "https://api.iextrading.com/1.0/stock/";
    var url2 = symbol + "/quote";
    var urlWhole = urlPrefix + url2;

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText)
            document.getElementById("company").innerHTML = obj.companyName;
            //document.getElementById("info").innerHTML = this.responseText;  //prints raw JSON data
            document.getElementById("sector").innerHTML = "Sector: " + obj.sector;
            document.getElementById("peRatio").innerHTML = "PE Ratio: " + obj.peRatio;
            //var peRatioNum = parseInt(document.getElementById("peRatio").value);//not working
            //var text = "PE Blue";
            if (obj.peRatio < 20) {
                document.getElementById("peRatio").style.backgroundColor = '#008000';
                text = "PE Green";
            }
            //document.getElementById("color-box").innerHTML = text;
            document.getElementById("latestPrice").innerHTML = "Price: " + obj.latestPrice;
            document.getElementById("latestSource").innerHTML = "Source: " + obj.latestSource;
            document.getElementById("week52High").innerHTML = "52 Week High: " + obj.week52High;
            document.getElementById("marketCap").innerHTML = "Market Cap: $" + obj.marketCap;
            document.getElementById("avgTotalVolume").innerHTML = "Average Total Volume: " + obj.avgTotalVolume;
        }
    };
    xhttp.open("GET", urlWhole, true);
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