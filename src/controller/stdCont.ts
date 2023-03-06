import {PrismaClient} from '@prisma/client'
import { error } from 'console';
const prisma = new PrismaClient();
import express, {Request,Response} from 'express';


export const getAllStd = async(req:Request,res:Response) =>{
    const user = await prisma.student.findMany({

    })
    res.json(user)
}

export const addStd = async(req:Request,res:Response) =>{
    const {name, age, major, classroomID} = req.body
    const user = await prisma.student.create({
        data:{
            name,
            age,
            major,
            classroomID
            
        }
    })
    res.json(user)
}

export const getStdById = async(req:Request,res:Response) =>{
    const {id} = req.body
    const student = await prisma.student.findUnique({
        where: { id },
      });
      if (!student) {
        return res.status(400).json({ error: 'Id is not exist or bad ID request.' });
      }

    const user = await prisma.student.findFirst({
        where: {id},
        select:{
            name: true,
            major: true
        }
    })
    res.json(user)
}