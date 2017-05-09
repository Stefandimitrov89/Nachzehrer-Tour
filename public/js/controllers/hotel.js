import * as data from 'data';
import { load as loadTemplate } from 'templates';

const $appContainer = $('#app-container');

export function get(params) {
  console.log(' hotel.js');
  const { category } = params;

  loadTemplate('hotel')
    .then(template => {
      $appContainer.html(template());
    });
}