// models/taskModel.js
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://yxswmtjewxrsomacwknc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4c3dtdGpld3hyc29tYWN3a25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0MzA2NjEsImV4cCI6MjAyMjAwNjY2MX0.KoIxC6L2nrS_5rHoNXalOMJow4Muq38QaPz31QNn5ZA";
const supabase = createClient(supabaseUrl, supabaseKey);

async function saveRoutine(routine) {
  try {
    const { data, error } = await supabase
      .from("routine")
      .upsert([{ routine: routine }]);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
}

async function getAllRoutines() {
  try {
    const { data, error } = await supabase.from("routine").select("*");
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
}

module.exports = {
  saveRoutine,
  getAllRoutines,
};
