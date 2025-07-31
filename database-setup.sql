-- Create the investments table in Supabase
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS investments (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    pokemon_name VARCHAR(100) NOT NULL,
    pokemon_key VARCHAR(50) NOT NULL,
    pokemon_type VARCHAR(50) NOT NULL,
    pokemon_rarity VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE investments ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (for demo purposes)
-- In production, you should create more restrictive policies
CREATE POLICY "Allow all operations" ON investments
    FOR ALL USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_investments_created_at ON investments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_investments_email ON investments(email);
CREATE INDEX IF NOT EXISTS idx_investments_pokemon_key ON investments(pokemon_key);

-- Optional: Create a view for statistics
CREATE OR REPLACE VIEW investment_stats AS
SELECT 
    COUNT(*) as total_users,
    SUM(amount) as total_amount,
    AVG(amount) as average_amount,
    COUNT(DISTINCT email) as unique_investors
FROM investments; 