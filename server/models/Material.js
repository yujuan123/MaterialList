import mongoose from 'mongoose';
const materialsSchema = mongoose.Schema({
  source:String,
  amount:String
});
//数据库会 变小写s
const Material = mongoose.model('Material',materialsSchema);

export default Material;