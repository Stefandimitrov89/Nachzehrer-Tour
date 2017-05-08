import { MyRouter } from 'MyRouter';
import  'jquery'; 


const router = new MyRouter();

router
    .on('/', () => location.hash = '#/home',)
    .on('/home')
    .on('/profile')
    .on('/search')
    .on('/admin')
    .on('/about')
    .on('/service:instance'); //fix me

$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());