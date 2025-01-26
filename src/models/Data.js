import mongoose from "mongoose"

const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
)

export const DATA = mongoose.models.DATA || mongoose.model("DATA", DataSchema);
