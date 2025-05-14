import mongoose from "mongoose"

const appointmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    docId: { type: String, required: true },
    slotDate: { type: String, required: true }, // format: DD_MM_YYYY
    slotTime: { type: String, required: true }, // format: HH:MM AM/PM
    userData: { type: Object, required: true }, // contains name, email etc.
    docData: { type: Object, required: true },  // contains name, degree, speciality etc.
    amount: { type: Number, required: true },   // doctor fees
    date: { type: Number, required: true },     // timestamp when booking is made
    cancelled: { type: Boolean, default: false },
    payment: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false }
}, {
    timestamps: true // adds createdAt and updatedAt automatically
})

const appointmentModel = mongoose.models.appointment || mongoose.model("appointment", appointmentSchema)
export default appointmentModel
