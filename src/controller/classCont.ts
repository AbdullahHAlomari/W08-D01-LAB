import {PrismaClient} from '@prisma/client'
import { error } from 'console';
const prisma = new PrismaClient();
import express, {Request,Response} from 'express';


export const getAllClass = async(req:Request,res:Response) =>{
    const teacher = await prisma.classroom.findMany({

    })
    res.json(teacher)
}

export const addClass = async(req:Request,res:Response) =>{
    const {name} = req.body
    const teacher = await prisma.classroom.create({
        data:{
            name,
        }
    })
    res.json(teacher)
}

export const getClassById = async(req:Request,res:Response) =>{
    const {id} = req.body
    const teacher = await prisma.teacher.findUnique({
        where: {id},
        select:{
            name: true,
        }
    })
    res.json(teacher)
}

export const getFirstClassByName = async(req:Request,res:Response) =>{
    const {name} = req.body
    const user = await prisma.student.findFirst({
        where: {name},
        select:{
            name: true,
            major: true
        },
        orderBy: {id: 'asc'}
    })
    res.json(user)
}