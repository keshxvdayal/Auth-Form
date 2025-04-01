import type { Request, Response, NextFunction } from "express"
import { prisma } from "../index"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { z } from "zod"
import { AppError } from "../utils/appError"

// Validation schema for login
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

// Validation schema for registration
const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

// Login controller
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate request body
    const validatedData = loginSchema.parse(req.body)

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: validatedData.email },
    })

    // Check if user exists and password is correct
    if (!user || !(await bcrypt.compare(validatedData.password, user.password))) {
      return next(new AppError("Invalid email or password", 401))
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || "your-secret-key", {
      expiresIn: "1h",
    })

    // Return user data and token
    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    })
  } catch (error) {
    next(error)
  }
}

// Register controller
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate request body
    const validatedData = registerSchema.parse(req.body)

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    })

    if (existingUser) {
      return next(new AppError("Email already in use", 400))
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10)

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
      },
    })

    // Generate JWT token
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET || "your-secret-key", {
      expiresIn: "1h",
    })

    // Return user data and token
    res.status(201).json({
      user: {
        id: newUser.id,
        email: newUser.email,
      },
      token,
    })
  } catch (error) {
    next(error)
  }
}

