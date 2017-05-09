import * as data from 'data';
import { load as loadTemplate } from 'templates';


// import homeTemplate from 'homeTemplate!text';
// const template = Handlebars.compile(homeTemplate);


const $appContainer = $('#app-container');

export function get(params) {
    
  console.log('we are here');
   const { category } = params;
   $appContainer.html('<h1>works</h1>')

  Promise.all([
    loadTemplate('home'),
    data.getServices()

  ])
  .then(([template, hotels]) => {
    console.log("hotels");
    $appContainer.html(template(hotels));
  });
}
