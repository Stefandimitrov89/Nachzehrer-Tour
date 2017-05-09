import * as data from 'data';
import { load as loadTemplate } from 'templates';

const $appContainer = $('#app-container');

export function get(params) {
  console.log('we are in hud.js');
  const { category } = params;

  loadTemplate('hud')
    .then(template => {
      $appContainer.html(template());
    });
}