import { Schema, model, models } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo?: Record<string, any>;
    firstName: string;
    lastName: string;
    planId?: string;
    creditBalance?: number;
}

const userSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 }
})

const User = models?.User || model('User', userSchema);

export default User;