import { Application, Router } from 'express';
import { PingController } from './controllers/PingController';
import { IndexController } from './controllers/IndexController';
import { DayOneController } from './controllers/DayOne/DayOneController';
import { DayTwoController } from './controllers/DayTwo/DayTwoController';

const _routes: [string, Router][] = [
    ['/', IndexController],
    ['/ping', PingController],
    ['/dayone', DayOneController],
    ['/daytwo', DayTwoController]
];

export const routes = (app: Application) => {
    _routes.forEach((route) => {
        const [url, controller] = route;
        app.use(url, controller);
    });
};