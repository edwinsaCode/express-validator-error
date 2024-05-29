import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

class Validator {
  protected Validate = (req: Request, res: Response, next: NextFunction) => {
    const problem = validationResult(req);
    if (!problem.isEmpty()) {
      console.log(problem.mapped());
      return res.status(422).json({ msg: "invalid data type" });
    }
    next();
  };
}
export default Validator;
