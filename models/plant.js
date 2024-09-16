const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  botanical_name: {
    type: String,
    required: true,
  },
  common_names: [String],
  ayurvedic_name: String,
  family: String,
  description: String,
  medicinal_uses: [String],
  active_compounds: [String],
  cultivation_methods: String,
  habitat: String,
  traditional_uses: String,
  cultural_significance: String,
  model_url: String,
  images: [String],
  videos: [String],
  audio_description: String,
  region_in_india: [String],
  related_plants: [String],
  notes: String,
  popularity: {
    type: Number,
  },
  date_added: { type: String },
  featured: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;
