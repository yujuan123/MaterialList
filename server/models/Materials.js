import mongoose from 'mongoose';

var materialsSchema = mongoose.Schema({
  source:String,
  amount:String
});

var Materials = mongoose.model('Materials',materialsSchema);

export default Materials;
