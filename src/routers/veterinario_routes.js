
import {Router} from 'express'
import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarVeterinario,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword
} from '../controllers/veterinario_controller.js'
import verificarAutenticacion from '../middlewares/autenticacion.js'

const router = Router()


router.post('/login',login)
router.post('/registro',registro)
router.get('/confirmar/:token',confirmEmail)
router.get('/veterinarios',listarVeterinarios)
router.post('/recuperar-password',recuperarPassword)
router.get('/recuperar-password/:token',comprobarTokenPasword)
router.post('/nuevo-password/:token',nuevoPassword)

router.get('/perfil',verificarAutenticacion,perfil)
router.get('/veterinario/:id',verificarAutenticacion,detalleVeterinario)
router.put('/veterinario/:id',verificarAutenticacion,actualizarVeterinario)




export default router