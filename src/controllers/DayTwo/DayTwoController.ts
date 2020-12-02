import { NextFunction, Request, Response, Router } from 'express';
import { readFileSync }  from 'fs';
const {passCheck,yeah} = require( '../../utils/DayTwoHandler.ts' )


export const DayTwoController: Router = Router();

DayTwoController.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
       const file = readFileSync('./src/input/DayTwoInput.txt', 'utf-8');
       const output = passCheck(file);
       
        res.status(200).send({ Part_One : output, Part_Two : "me too" });
    } catch (e) {
        next(e);
    }
});