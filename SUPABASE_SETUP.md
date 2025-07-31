# Supabase Setup Guide

This guide will help you set up Supabase for the Pokemon Investment Fund app.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `pokemon-investment-fund`
   - Database Password: Choose a strong password
   - Region: Choose closest to your users
5. Click "Create new project"

## 2. Set Up the Database

1. In your Supabase dashboard, go to the "SQL Editor"
2. Copy and paste the contents of `database-setup.sql`
3. Click "Run" to create the table and policies

## 3. Get Your API Keys

1. In your Supabase dashboard, go to "Settings" → "API"
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## 4. Configure Environment Variables

1. Create a `.env` file in your project root
2. Add the following variables:

```env
REACT_APP_SUPABASE_URL=your_project_url_here
REACT_APP_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace the values with your actual Supabase project URL and anon key.

## 5. Test the Setup

1. Start your development server: `npm start`
2. Try making an investment through the Pokemon selection
3. Check your Supabase dashboard → "Table Editor" → "investments" to see the data

## 6. Security Considerations

The current setup allows all operations for demo purposes. For production:

1. Review and update the Row Level Security (RLS) policies
2. Consider adding authentication
3. Implement proper data validation
4. Add rate limiting

## Troubleshooting

- **"Cannot find module" errors**: Make sure you've installed `@supabase/supabase-js`
- **Database connection errors**: Verify your environment variables are correct
- **Permission errors**: Check that RLS policies are set up correctly in Supabase

## Database Schema

The `investments` table stores:
- `id`: Unique identifier
- `email`: Investor's email address
- `amount`: Investment amount in dollars
- `pokemon_name`: Name of the selected Pokemon
- `pokemon_key`: Internal Pokemon identifier
- `pokemon_type`: Pokemon type (Fire, Water, etc.)
- `pokemon_rarity`: Pokemon rarity level
- `created_at`: Timestamp of the investment 