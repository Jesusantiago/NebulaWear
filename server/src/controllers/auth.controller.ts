import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendMail } from "../utils/email";
import User from "../models/users.model";
import crypto from 'crypto';

class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
            email: email
        }
      });
      if(!user) return res.status(404).json({message: "Usuario no encontrado."});
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      const token = jwt.sign(
        { id: user.id },
        process.env.SECRET_KEY_JWT as string,
        { expiresIn: '1d' }
      )
      delete user.dataValues.password
      return res.status(201).json({
        ...user.dataValues,
        token,
      });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async register(req: Request, res: Response) {
    try {
        const { email, password, name, lastname, address, phone } = req.body;
        const user = await User.findOne({
            where: {
                email: email
            }
          });
        if(user)  {
            return res.status(409).json({message: "El email ingresado ya está vinculado a una cuenta existente."});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        let newUser = await User.create({
            name: name,
            lastname: lastname,
            email: email,
            password: hashedPassword,
            role: 'client'
        });
        delete newUser.password;
        res.status(201).json({message: 'Usuario creado con éxito.',newUser});
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async recoverPassword(req: Request, res: Response) {
    try{
      const {email} = req.body;
      const user = await User.findOne({where:{email}});
      if(!user){
        return res.status(409).json({message: 'No se encontró un usuario con este correo'});
      }else{
        const to = user.email;
        const subject = "Recuperación de contraseña - ModaFacil";
        const resetToken = crypto.randomBytes(20).toString('hex')
        await user.update({reset_token: resetToken});
        const url = `http://localhost:${process.env.PORT}/recover-password/${resetToken}`;
        const text = `Hola ${user.name} ${user.lastname} \n Estás recibiendo este mensaje porque has solicitado recuperar tu contraseña en nuestra plataforma ModaFacil. Para recuperar tu contraseña haz click en el siguiente link:\n ${url}. Si no fuiste tú haz caso omiso a este mensaje.`; 
        await sendMail(to,subject,text);
        res.status(200).json({message:'Correo enviado correctamente. Revise su bandeja de entrada para continuar el proceso.'})
      }
      
    }catch(error){
      console.log(error);
    }
  }

  static async resetPassword(req: Request, res: Response){
  
    const {email, password, matchPassword} = req.body;
    const receivedToken = req.params.resetToken as string;
    const existUser = await User.findOne({
      where:{
        reset_token: receivedToken,
        email: email
      }
    })
    if (!existUser) {
      res.status(400).json({message:"Token inválido."})
    }
    if (!email || !password || !matchPassword) {
      return res.status(400).send({error: 'No se completaron los campos'})
      };
      if (password !== matchPassword) {
        return res.status(400).send({error: 'Las contraseñas no coinciden.'
      })}
      const hashedPassword = await bcrypt.hash(password, 10);
      await existUser.update({ password : hashedPassword, reset_token: null});
      res.status(200).json({message:"Contraseña actualizada correctamente."})
    }
}

export default AuthController;
