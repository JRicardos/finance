import express from 'express'
import Project from '../models/Project.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Todas as rotas protegidas por autenticação
router.use(authMiddleware)

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.getAll(req.user.company_id)
    res.json(projects)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// GET /api/projects/:id
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.getById(req.params.id, req.user.company_id)
    if (!project) {
      return res.status(404).json({ error: 'Projeto não encontrado' })
    }
    res.json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// POST /api/projects
router.post('/', async (req, res) => {
  try {
    const projectData = {
      ...req.body,
      company_id: req.user.company_id
    }
    const project = await Project.create(projectData)
    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// PUT /api/projects/:id
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.update(
      req.params.id, 
      req.body, 
      req.user.company_id
    )
    res.json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE /api/projects/:id
router.delete('/:id', async (req, res) => {
  try {
    await Project.delete(req.params.id, req.user.company_id)
    res.json({ message: 'Projeto deletado com sucesso' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router