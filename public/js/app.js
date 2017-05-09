import  'jquery'; 

import { MyRouter } from 'MyRouter';
import * as homeController from 'homeController';
import * as userController from 'userController';

const router = new MyRouter();

router
    .on('', () => location.hash = '#/home')
    .on('/', () => location.hash = '#/home')
    .on('#/home', homeController.get)
    .on('/auth', userController.get)
    .on('#/user', userController.info)
    .on('/login', userController.login)
    .on('/register', userController.register)
    .on('/logout', userController.logout)
    .on('/search')
    .on('/admin')
    .on('/about')
    .on('/service:instance'); //fix me

$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());