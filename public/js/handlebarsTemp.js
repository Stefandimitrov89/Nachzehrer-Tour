
var hbTemplate = document.getElementById("hb-template-container").innerHTML;

var template = Handlebars.compile(hbTemplate);

var data = {
    blocks: [
    {
        topDivClass: "col-md-7 col-md-push-5",
        botDivClass: "col-md-5 col-md-pull-7",
        featuretteHeading: "Oh yeah, it's that good. ",
        lead: 'onec ullamcorper nulla non metus auctor fringilla. Vestibulum id lig',
        textMuted: 'See for yourself.',
        imgSource: './images/block_1.jpg'
    },
    {
        topDivClass: "col-md-7",
        botDivClass: "col-md-5",
        featuretteHeading: 'additionalText. ',
        lead: 'Vestibulum id lig',
        textMuted: 'See for myself.',
        imgSource: "./images/block_2.jpg"
    }],
    albums: [
    {
        className: "card	col-lg-3 col-md-6 ",
        imgSource: "./images/album_1.jpg",
        pText: "This bbbbbbbbbbbbbbbb"
    },
    {
        className: "card	col-lg-3 col-md-6 ",
        imgSource: "./images/album_2.jpg",
        pText: "This vvvv99999vvvvvv"
    },
    {
        className: "card	col-lg-3 col-md-6",
        imgSource: "./images/album_3.jpg",
        pText: "This xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        className: "card	col-lg-3 col-md-6",
        imgSource: "./images/album_4.jpg",
        pText: "This zzzzzzzzzzzzzzzzzzzzzzzzzzz"
    }],
    services: [
    {
        className: "col-lg-3 col-md-6 hotels services",
        imgSource: './images/service_1.jpg',
        h2: "Hotels",
        pText: "Choose from more than 10 hotels"
    },
    {
        className: "col-lg-3 col-md-6 huds services",
        imgSource: './images/service_2.jpg',
        h2: "Huds",
        pText: "Choose from more than 10 huds"
    },
    {
        className: "col-lg-3 col-md-6 bmb services",
        imgSource: './images/service_3.jpg',
        h2: "BMB",
        pText: "Choose from more than 10 bmb"
    },
    {
        className: "col-lg-3 col-md-6 cruise services",
        imgSource: './images/service_4.jpg',
        h2: "Cruise",
        pText: "Choose from more than 10 cruise"
    }]
};

var container = document.getElementById('hb-container');
container.innerHTML = template(data);
