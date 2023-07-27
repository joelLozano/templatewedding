import mongoose, { Schema} from "mongoose";

const familySchema = new Schema({
    family: { type: String, required: true },
    members: { type: Number, required: true },
    message: { type: String, required: false }
});

const FamilyNCModel = mongoose.model("NoAttendeesTest", familySchema);

export default FamilyNCModel;