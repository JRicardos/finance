import supabase from '../config/supabase.js'

class Project {
  static async getAll(companyId) {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        expenses(*),
        revenues(*),
        project_managers(user_id)
      `)
      .eq('company_id', companyId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  static async getById(id, companyId) {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        expenses(*),
        revenues(*),
        project_managers(user_id)
      `)
      .eq('id', id)
      .eq('company_id', companyId)
      .single()

    if (error) throw error
    return data
  }

  static async create(projectData) {
    const { data, error } = await supabase
      .from('projects')
      .insert([projectData])
      .select()
      .single()

    if (error) throw error
    return data
  }

  static async update(id, updates, companyId) {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .eq('company_id', companyId)
      .select()
      .single()

    if (error) throw error
    return data
  }

  static async delete(id, companyId) {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)
      .eq('company_id', companyId)

    if (error) throw error
    return true
  }
}

export default Project