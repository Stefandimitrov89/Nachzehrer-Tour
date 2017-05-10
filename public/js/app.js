import  'jquery'; 

import { MyRouter } from 'MyRouter';
import * as homeController from 'homeController';
import * as userController from 'userController';
import * as hotelController from 'hotelController';
import * as hudController from 'hudController';
import * as cruiseController from 'cruiseController';
import * as bmbController from 'bmbController';

const router = new MyRouter();

router
    // .on('', () => location.hash = '#/home')
    // .on('/', () => location.hash = '#/home')
    .on('#/home', homeController.get)
    .on('/auth', userController.get)
    //.on('#/user', userController.info)
    .on('/login', userController.login)
    .on('/register', userController.register)
    .on('/logout', userController.logout)
    .on('#/hotels', hotelController.get)
    .on('#/huds', hudController.get)
    .on('#/cruises', cruiseController.get)
    .on('/service:instance'); //fix me

$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());