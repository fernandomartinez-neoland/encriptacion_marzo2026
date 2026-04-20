import { registerService } from '../services/auth.service.js';

export async function registerController(req, res) {
    console.log("hola")
  const result = await registerService(req.body);
  res.json(result);
}