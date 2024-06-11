const express = require('express');
const postusercase = require('../usercases/post.usercase');
const auth = require('../middlewares/auth.middleware');
const jwt = require("../lib/jwt")

const router = express.Router();

// POST 
router.post('/', auth, async (request, response) => {
  try {
      const newUser = request.user._id; 
      const postCreated = await postusercase.create(request.body, newUser);
      res.json({
          success: true,
          data: { postCreated },
      });
  } catch (error) {
     res.status(error.status || 500);
     res.json({
      success: false,
      message: "Post creado correctamente",
      error: error.message,
     });
  }
});

// GET /posts
router.get('/', async (request, response) => {
    try {
      const { search } = request.query;
      if (!search) {
        const posts = await postusercase.getAllPosts();
        response.json({
          success: true,
          message: 'Se ha obtenido correcto el post',
          data: { posts },
        });
      } else {
        const posts = await postusercase.getByTitle(search);
        response.json({
          success: true,
          message: `PPost obtenido corectamente por busqueda: ${search}`,
          data: { posts },
        });
      }
    } catch (error) {
      response.status(error.status || 500);
      response.json({
        success: false,
        message: ' Error al obtener el post ',
        error: error.message,
      });
    }
  });


// PATCH /posts/:id 
router.patch('/:id', auth, async (request, response) => {
    try {
        const { id } = request.params;
        const updatedPost = await postusercase.updatePostById(id, request.body);
        response.json({
            success: true,
            message: `Post actualizado correctamente`,
            data: { post: updatedPost },
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            message: 'Error al actualizar el post',
            error: error.message,
        });
    }
});

// DELETE /posts/:id 
router.delete("/:id", auth, async (request, response) => {
    try {
      const payload = jwt.verify(request.headers.authorization);
      const userActive = payload.id;
      const { id } = request.params;
      const post = await postUserCase.getPostById(id);
      const postUserid = post.user;
  
      const deletedPost = await postUserCase.deletePostById(id, userActive, postUserid);
      response.json({
        success: true,
        message: 'El post se ha borrado correctamente',
        data: { post: deletedPost },
      });
    } catch (error) {
      response.status(error.status || 500);
      response.json({
        success: false,
        message: 'Error al borrar el post',
        error: error.message,
      });
    }
  });

module.exports = router;
