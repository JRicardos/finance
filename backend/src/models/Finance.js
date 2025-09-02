import supabase from '../config/supabase.js'

class Finance {
  static async getExpenses(companyId, startDate, endDate) {
    let query = supabase
      .from('expenses')
      .select('*')
      .eq('company_id', companyId)
      .order('date', { ascending: false })

    if (startDate) {
      query = query.gte('date', startDate)
    }
    if (endDate) {
      query = query.lte('date', endDate)
    }

    const { data, error } = await query
    if (error) throw error
    return data
  }

  static async getRevenues(companyId, startDate, endDate) {
    let query = supabase
      .from('revenues')
      .select('*')
      .eq('company_id', companyId)
      .order('date', { ascending: false })

    if (startDate) {
      query = query.gte('date', startDate)
    }
    if (endDate) {
      query = query.lte('date', endDate)
    }

    const { data, error } = await query
    if (error) throw error
    return data
  }

  static async createExpense(expenseData) {
    const { data, error } = await supabase
      .from('expenses')
      .insert([expenseData])
      .select()
      .single()

    if (error) throw error
    return data
  }

  static async createRevenue(revenueData) {
    const { data, error } = await supabase
      .from('revenues')
      .insert([revenueData])
      .select()
      .single()

    if (error) throw error
    return data
  }
}

export default Finance