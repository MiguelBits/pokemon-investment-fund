import { supabase, Investment, InvestmentStats } from './supabase';

export const investmentService = {
  // Save a new investment to the database
  async saveInvestment(investment: Omit<Investment, 'id' | 'created_at'>): Promise<Investment | null> {
    try {
      const { data, error } = await supabase
        .from('investments')
        .insert([investment])
        .select()
        .single();

      if (error) {
        console.error('Error saving investment:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error saving investment:', error);
      return null;
    }
  },

  // Get all investments
  async getInvestments(): Promise<Investment[]> {
    try {
      const { data, error } = await supabase
        .from('investments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching investments:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching investments:', error);
      return [];
    }
  },

  // Get investment statistics
  async getInvestmentStats(): Promise<InvestmentStats> {
    try {
      const { data, error } = await supabase
        .from('investments')
        .select('amount');

      if (error) {
        console.error('Error fetching investment stats:', error);
        return {
          total_users: 0,
          total_amount: 0,
          average_amount: 0
        };
      }

      const investments = data || [];
      const total_users = investments.length;
      const total_amount = investments.reduce((sum, inv) => sum + inv.amount, 0);
      const average_amount = total_users > 0 ? total_amount / total_users : 0;

      return {
        total_users,
        total_amount,
        average_amount
      };
    } catch (error) {
      console.error('Error fetching investment stats:', error);
      return {
        total_users: 0,
        total_amount: 0,
        average_amount: 0
      };
    }
  },

  // Get recent investments (last 5)
  async getRecentInvestments(): Promise<Investment[]> {
    try {
      const { data, error } = await supabase
        .from('investments')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) {
        console.error('Error fetching recent investments:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching recent investments:', error);
      return [];
    }
  }
}; 