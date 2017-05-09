var casper = require('casper').create({
    verbose: true,
    logLevel: "info",
    pageSettings: {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});

var fs = require('fs');
var url = 'https://www.hotel.info/';
var searchedCity = 'Sofia';
var searchedArrivalDate = '5/9/2017';
var searchedDepartureDate = '5/10/2017';
var hotelNames = [];
var hotelPrices = [];
var hotelStars = [];
var output = [];


function outputJSON() {
    output.push({
        hotelNames: hotelNames,
        hotelPrices: hotelPrices,
        hotelStars: hotelStars
    });

    return JSON.stringify(output);
}

function getNames() {
    var hotelNames = document.querySelectorAll('span.bold.fontSizeSH.title');

    return Array.prototype.map.call(hotelNames, function (e) {
        return e.innerText;
    });
}

function getPrices() {
    var hotelPrices = document.querySelectorAll('span.bold.NoWrap.marTopXSmall.fontSizeH1.colorOrange');

    return Array.prototype.map.call(hotelPrices, function (e) {
        return e.innerText;
    });
}

function getStars() {
    // var hotelStars = document.querySelectorAll('.marBottomSmall modBox');
    var hotelStars = document.querySelectorAll('div.sprite1');

    console.log('------> getStars');

    return Array.prototype.map.call(hotelStars, function (e) {
        var starClassName = e.className;
        var numberOfStars = (starClassName + "").replace("sprite1 star stars", ""); //.split("sprite1 star")[1];
        return numberOfStars;
    });
}


casper.start(url, function () {
    this.echo(this.getTitle());
    console.log('------> Starting location is ' + this.getCurrentUrl());
});

casper.wait(1000, function () {
    console.log('------> waited 1 secs and now taking a photo');
    casper.capture('zzz_1_homepage.png');
});

casper.then(function () {
    console.log('------> trying to fill the form');

    this.fillSelectors('form#SearchingForm', {
        'input[name="SearchCriteria.Destination"]': searchedCity,
        'input[name="Arrival"]': searchedArrivalDate,
        'input[name="Departure"]': searchedDepartureDate
    }, true);
});

casper.wait(3000, function () {
    console.log('------> waited 3 secs and now taking a photo');
    casper.capture('zzz_2_SofiaResults.png');
});

casper.then(function () {
    casper.echo('------> evaluate hotelNames/Prices/Stars');
    hotelNames = this.evaluate(getNames);
    hotelPrices = this.evaluate(getPrices);
    hotelStars = this.evaluate(getStars);
});


casper.run(function () {
    casper.echo('------> hotelStars.len: ' + hotelStars.length);
    casper.echo('       <-----------  hotels list start ----------->');
    casper.echo("           -->" + hotelStars.join('\n           -->'));
    casper.echo('       <-----------  hotels list end ----------->');
    casper.echo('------> Exiting site');

    var data = outputJSON();
    fs.write('hotelsData.json', data, 'w');

    casper.exit();
});