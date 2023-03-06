import {PrismaClient} from '@prisma/client'
import { error } from 'console';
const prisma = new PrismaClient();
import express, {Request,Response} from 'express';

export const getAllTchr = async(req:Request,res:Response) =>{
    const teacher = await prisma.teacher.findMany({

    })
    res.json(teacher)
}

export const addTchr = async(req:Request,res:Response) =>{
    const {name} = req.body
    const teacher = await prisma.teacher.create({
        data:{
            name,
        }
    })
    res.json(teacher)
}

export const getTchrById = async(req:Request,res:Response) =>{
    const {id} = req.body
    const teacher = await prisma.teacher.findUnique({
        where: {id},
        select:{
            name: true,
        }
    })
    res.json(teacher)
}

