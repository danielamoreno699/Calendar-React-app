// todas deben estar validadas
//obtener eventos

/*
    event routes:
    /api/events

*/

const {Router} = require('express')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')
const router = Router()
const {validarJWT} = require('../middlewares/validar-jwt')
const {check} = require('express-validator')
const { validarCampos} = require('../middlewares/validar-campos')
const { isDate } = require('../helpers/isDate')

//todas las peticiones pasan por la validacion
router.use(validarJWT)



router.get('/',  getEventos)

router.post(
    '/', 
    [
        check('title', 'el titulo es obligatorio').not().isEmpty(),
        check('start', 'fecha de inicio es obligatorio').custom(isDate),
        check('end', 'fecha de finalizacion es obligatorio').custom(isDate),
        validarCampos

    ],
    crearEvento
    )

    router.put(
        '/:id', 
        [
            check('title','El titulo es obligatorio').not().isEmpty(),
            check('start','Fecha de inicio es obligatoria').custom( isDate ),
            check('end','Fecha de finalización es obligatoria').custom( isDate ),
            validarCampos
        ],
        actualizarEvento 
    );


router.delete('/:id',  eliminarEvento)



module.exports = router