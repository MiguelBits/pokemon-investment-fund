import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Investment {
  id?: number;
  email: string;
  amount: number;
  pokemon_name: string;
  pokemon_key: string;
  pokemon_type: string;
  pokemon_rarity: string;
  created_at?: string;
}

export interface InvestmentStats {
  total_users: number;
  total_amount: number;
  average_amount: number;
} 