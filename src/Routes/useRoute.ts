import {RegisterTypes} from './../zodSchema/zodValidate'
import validate  from '../middleware/validate'
import {addStd, getAllStd, getStdById} from '../controller/stdCont'

import express, { Router } from 'express'
import { getAllTchr, addTchr, getTchrById } from '../controller/tchrCont'
import { getAllClass, addClass, getClassById, getFirstClassByName } from '../controller/classCont'
let router = express.Router()

// Student Section
// get all students
router.get('/', getAllStd)
// add student
router.post('/add', addStd)
// get student by id
router.get('/byid', getStdById)

// Teacher Section
// get all Teachers
router.get('/teacher', getAllTchr)
// add teacher
router.post('/addT', addTchr)
// get teacher by id
router.get('/tbyid', getTchrById)

// Classroom Section
// get all classes
router.get('/class', getAllClass)
// add class
router.post('/addC', addClass)
// get class by id
router.get('/cbyid', getClassById)
// Create endpoint that takes classroom id and return one classroom (return bad request if classroom id is invalid)
router.get('/first', getFirstClassByName)



export default router