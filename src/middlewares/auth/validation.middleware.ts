import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          status: "error",
          errors: error.errors.map(err => ({
            field: err.path.join(""),
            message: err.message
          }))
        });
      }
      next(error);
    }
  };
};

export { validateRequest };
