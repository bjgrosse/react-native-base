import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase configuration. Check app.config.js");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
