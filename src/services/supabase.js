import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dlctrxppsskpzoexjsoj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsY3RyeHBwc3NrcHpvZXhqc29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDQxMzEsImV4cCI6MjA1OTY4MDEzMX0.eoCawjQbwqk4zDpvbo5O3yrXmh0BIHfCER76RruL2G8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
