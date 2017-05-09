import * as data from 'data';
import { load as loadTemplate } from 'templates';


// import homeTemplate from 'homeTemplate!text';
// const template = Handlebars.compile(homeTemplate);


const $appContainer = $('#app-container');

export function get(params) {
    
  console.log('-->>>-->>> we are in home.js get');;
   const { category } = params;
   $appContainer.html('<h1>works</h1>');

  Promise.all([
    loadTemplate('huds'),
    data.getHuds()

  ])
  .then(([template, hotels]) => {
    console.log("+++++++++++++++ home.js: " + JSON.stringify(hotels));
    $appContainer.html(template(hotels));
  });
}
