import type { Request, Response, NextFunction } from "express"
import { ZodError } from "zod"
import { AppError } from "../utils/appError"

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Log error for debugging
  console.error(err)

  // Handle Zod validation errors
  if (err instanceof ZodError) {
    const errors = err.errors.map((e) => ({
      path: e.path.join("."),
      message: e.message,
    }))

    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors,
    })
  }

  // Handle custom application errors
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    })
  }

  // Handle Prisma errors
  if (err.name === "PrismaClientKnownRequestError") {
    return res.status(400).json({
      status: "error",
      message: "Database error occurred",
    })
  }

  // Handle JWT errors
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      status: "error",
      message: "Invalid token",
    })
  }

  // Handle other errors
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  })
}

