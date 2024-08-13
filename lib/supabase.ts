import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qtbzieeqmnqmvzwadagj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0YnppZWVxbW5xbXZ6d2FkYWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1ODA3MTIsImV4cCI6MjAzOTE1NjcxMn0.N8zs4OMcDP9pfWaz1il5tczXtdSfIrk4PbO81xxLdpw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});