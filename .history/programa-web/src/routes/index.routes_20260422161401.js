import { Router } from 'express';

import teamsRouter from '../modules/teams/teams.routes';

const indexRouter = Router();

indexRouter.use('/teams', teamsRouter);


export default indexRouter;