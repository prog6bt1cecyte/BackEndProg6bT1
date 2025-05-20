import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ICorral extends mongoose.Document {  
    corral: string;
}

 const CorralSchema = new Schema(
    {
        corral: {
            type: String,
            required: [true, 'corral required'],
            unique: true
        }
    }
    
 );

const Corral = mongoose.model<ICorral>("Corral", CorralSchema);
export default Corral;