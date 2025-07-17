import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    return res.status(200).json({ message: "Login successful" });
  }
  return res.status(401).json({ message: "Invalid credentials" });
};
