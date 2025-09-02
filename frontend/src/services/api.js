const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

class ApiService {
  constructor() {
    this.token = localStorage.getItem('token')
  }

  setToken(token) {
    this.token = token
    localStorage.setItem('token', token)
  }

  removeToken() {
    this.token = null
    localStorage.removeItem('token')
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { 'Authorization': `Bearer ${this.token}` })
      },
      ...options
    }

    const response = await fetch(url, config)
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Erro na requisição')
    }
    
    return response.json()
  }

  // Projects
  getProjects() {
    return this.request('/projects')
  }

  getProject(id) {
    return this.request(`/projects/${id}`)
  }

  createProject(projectData) {
    return this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData)
    })
  }

  updateProject(id, projectData) {
    return this.request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData)
    })
  }

  deleteProject(id) {
    return this.request(`/projects/${id}`, {
      method: 'DELETE'
    })
  }

  // Finance
  getExpenses(filters = {}) {
    const params = new URLSearchParams(filters).toString()
    return this.request(`/finance/expenses?${params}`)
  }

  getRevenues(filters = {}) {
    const params = new URLSearchParams(filters).toString()
    return this.request(`/finance/revenues?${params}`)
  }

  createExpense(expenseData) {
    return this.request('/finance/expenses', {
      method: 'POST',
      body: JSON.stringify(expenseData)
    })
  }

  createRevenue(revenueData) {
    return this.request('/finance/revenues', {
      method: 'POST',
      body: JSON.stringify(revenueData)
    })
  }
}

export default new ApiService()