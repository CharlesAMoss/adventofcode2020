import { NextFunction, Request, Response, Router } from 'express';
import { readFileSync }  from 'fs';
const { twoItems, threeItems } = require( '../../utils/ReportRepair.ts' )


export const DayOneController: Router = Router();

DayOneController.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const file = readFileSync('./src/input/DayOneInput.txt', 'utf-8');
        const outputOne = twoItems(file);
        const outputTwo = threeItems(file);
        res.status(200).send({ Part_One : outputOne, Part_Two : outputTwo });
    } catch (e) {
        next(e);
    }
});