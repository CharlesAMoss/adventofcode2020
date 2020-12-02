import { NextFunction, Request, Response, Router } from 'express';
import { readFileSync }  from 'fs';
const {passCount , passPosition} = require( '../../utils/DayTwoHandler.ts' )


export const DayTwoController: Router = Router();

DayTwoController.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
       const file = readFileSync('./src/input/DayTwoInput.txt', 'utf-8');
       const output_one = passCount(file);
       const output_two = passPosition(file);
        res.status(200).send({ Part_One : output_one, Part_Two : output_two });
    } catch (e) {
        next(e);
    }
});