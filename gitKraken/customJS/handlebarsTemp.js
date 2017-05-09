var hbTemplate = document.getElementById("hb-template-container").innerHTML;

var template = Handlebars.compile(hbTemplate);

var data = {
  blocks: [
    {
      topDivClass: "col-md-7 col-md-push-5",
      botDivClass: "col-md-5 col-md-pull-7",
      featuretteHeading:"Oh yeah, it's that good. ",
      lead: 'onec ullamcorper nulla non metus auctor fringilla. Vestibulum id lig',
      textMuted: 'See for yourself.',
      imgSource: 'b_1.jpg'
    },
    {
      topDivClass: "col-md-7",
      botDivClass: "col-md-5",
      featuretteHeading:'additionalText. ',
      lead: 'Vestibulum id lig',
      textMuted: 'See for myself.',
      imgSource: 'b_1.jpg'
    }
  ],
  albums: [
    {
      className: "card	col-lg-3 col-md-6 ",
      imgSource: "album_1.jpg",
      pText:"This bbbbbbbbbbbbbbbb"
    },
    {
      className: "card	col-lg-3 col-md-6 ",
      imgSource: "album_1.jpg",
      pText:"This vvvv99999vvvvvv"
    },
    {
      className: "card	col-lg-3 col-md-6",
      imgSource: "album_1.jpg",
      pText:"This xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      className: "card	col-lg-3 col-md-6",
      imgSource: "album_1.jpg",
      pText:"This zzzzzzzzzzzzzzzzzzzzzzzzzzz"
    }
  ],
  services:[
    {
      className: "col-lg-3 col-md-6 hotels services",
      imgSource: "a_circle.gif",
      h2: "Hotels",
      pText: "Choose from more than 10 hotels"
    },
    {
      className: "col-lg-3 col-md-6 huds services",
      imgSource: "a_circle.gif",
      h2: "Huds",
      pText: "Choose from more than 10 huds"
    },
    {
      className: "col-lg-3 col-md-6 bmb services",
      imgSource: "a_circle.gif",
      h2: "BMB",
      pText: "Choose from more than 10 bmb"
    },
    {
      className: "col-lg-3 col-md-6 cruise services",
      imgSource: "a_circle.gif",
      h2: "Cruise",
      pText: "Choose from more than 10 cruise"
    }
  ]
};

var container = document.getElementById('hb-container');
container.innerHTML = template(data);

/*
    <div class="row">
    {{#each services}}
      <div class="{{className}}">
        <img class="img-circle" src="{{imgSource}}" alt="Generic placeholder image" width="140" height="140">
        <h2>{{h2}}</h2>
        <p>{{pText}}</p>
        <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
      </div>
    {{/each}}
    
    </div>
    <hr class="featurette-divider">
*/