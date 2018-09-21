﻿
function myFunction() {
    var xhttp = new XMLHttpRequest();
    var symbol = document.getElementById('id1').value;
    
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
            if (obj.peRatio < 20) {
                document.getElementById("peRatio").style.backgroundColor = '#008000';
                text = "PE Green";
            }
            document.getElementById("latestPrice").innerHTML = "Price: " + obj.latestPrice + "  " + obj.latestSource;
            document.getElementById("week52High").innerHTML = "52 Week High: " + obj.week52High;
            if (obj.marketCap > 2000000) {
                document.getElementById("marketCap").style.backgroundColor = '#008000';
            }
            document.getElementById("marketCap").innerHTML = "Market Cap: $" + obj.marketCap;
            document.getElementById("avgTotalVolume").innerHTML = "Average Volume: " + obj.avgTotalVolume;
        }
    };
    xhttp.open("GET", urlWhole, true);
    xhttp.send();
}


