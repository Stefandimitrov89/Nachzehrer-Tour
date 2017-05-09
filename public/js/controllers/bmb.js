import * as data from 'data';
import { load as loadTemplate } from 'templates';

const $appContainer = $('#app-container');

export function get(params) {
  console.log('we are in bmb.js');
  const { category } = params;

  loadTemplate('bmb')
    .then(template => {
      $appContainer.html(template());
    });
}