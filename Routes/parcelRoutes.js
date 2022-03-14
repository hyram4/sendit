const express=require('express')
const router= express.Router()

const parcelController=require('../controllers/parcelControllers')

router.get('/',parcelController.getparcels)
router.get('/:id',parcelController.getAparcel)
router.post('/',parcelController.createparcel)
router.delete('/:id',parcelController.deleteparcel)
router.put('/:id',parcelController.updateparcel)

module.exports=router;
