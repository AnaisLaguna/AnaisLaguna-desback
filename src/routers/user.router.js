const express = require('express');
const userCase = require('../usercases/user.usercase');

const router = express.Router();

//GET /user
router.get('/', async (request, response) => {
  try {
    const users = await userCase.getAll();
    response.json({
      success: true,
      data: { users }
      });
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message,
    });
  }
});
    


// POST /user
router.post('/', async (request, response) => {
  try {
    const userCreated = await userCase.createUser(request.body);
    response.json({
      success: true,
      message: 'Usuario registrado correctamente',
      data: { user: userCreated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: 'Error al registrar usuario',
      error: error.message,
    });
  }
});

// GET /user/:id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params.id;
    const user = await userCase.getUserById(id);
    response.json({
      success: true,
      message: 'Usuario encontrado',
      data: { user },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: 'Error al buscar usuario',
      error: error.message,
    });
  }
});

module.exports = router;