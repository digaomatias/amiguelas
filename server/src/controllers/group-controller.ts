import { Router, Request, Response, NextFunction } from 'express';

export class GroupController { 
    private router: Router;

    public get Router () {
        return this.router;
    }

    constructor() {
        this.router = Router();
        this.init();
    }

   /**
   * GET all groups.
   */
    public getAll(req: Request, res: Response, next: NextFunction) {
        res.json({group: 'my group'});
    }

   /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
    public init() {
        this.router.get('/', this.getAll);
    }
}

// Create the GroupController, and export its configured Express.Router
const groupController = new GroupController();
groupController.init();

export default groupController.Router;