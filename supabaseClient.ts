import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
import Constants from "expo-constants";

const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl as string;
const supabaseKey = Constants.expoConfig?.extra?.supabaseKey as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase configuration. Check app.config.js");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
