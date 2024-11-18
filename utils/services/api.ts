import { createClient } from "@/utils/supabase/server";

export const foodService = {
  async getFoods(limit = 12) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("Foods")
      .select("Id, Title, PhotoLink, NumLikes, IdNum")
      .limit(limit);
    
    if (error) throw error;
    return data;
  }
}

