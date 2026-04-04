import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fljoxnpgrpdyiszclljc.supabase.co";
const supabaseKey = "sb_publishable_mAaCKP7Hvqf2yiD9e4BjpQ_oZp1KygX";

export const supabase = createClient(supabaseUrl, supabaseKey);