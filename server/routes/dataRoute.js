import { Router } from "express";

const router = Router()

router
    .get('/',(req,res)=>{
      return res.json({data:'llegue'})
    })
  /*   .post('/',eventValidator,validationFields,eventController.create)
    .put('/:id',updateValidator,validationFields,eventController.update)
    .delete('/:id', param('id', 'No es un id válido de mongoDB').isMongoId(),validationFields, eventController.remove)
 */
export default router