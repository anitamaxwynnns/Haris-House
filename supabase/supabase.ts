import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wocicflizjjowmjpomzl.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvY2ljZmxpempqb3dtanBvbXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMjgxMjMsImV4cCI6MjA1MTkwNDEyM30.PLmOXchK4VT9P7v5qJbDQztlE3WvEEzM4Wfm3nHHVYs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
