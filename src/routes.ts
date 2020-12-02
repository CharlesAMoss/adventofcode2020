import { Application, Router } from 'express';
import { PingController } from './controllers/PingController';
import { IndexController } from './controllers/IndexController';
import { DayOneController } from './controllers/DayOne/DayOneController';

const _routes: [string, Router][] = [
    ['/', IndexController],
    ['/ping', PingController],
    ['/dayone', DayOneController]
];

export const routes = (app: Application) => {
    _routes.forEach((route) => {
        const [url, controller] = route;
        app.use(url, controller);
    });
};