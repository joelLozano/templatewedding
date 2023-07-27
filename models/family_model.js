import mongoose, { Schema} from "mongoose";

const FamilySchema = new Schema({
    family: { type: String, required: true },
    members: { type: Number, required: true },
    message: { type: String, required: false }
});

const FamilyModel = mongoose.model("familiestest", FamilySchema);

export default FamilyModel;