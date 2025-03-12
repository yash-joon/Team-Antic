import {Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {Types, Document } from 'mongoose';

@Schema()
export class User {

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    password:string;

    // @Prop({ required: true, unique: true })
    // accountNumber: string;

    // @Prop({required: true, unique: true})
    // accountBalance: number;

    // @Prop({ required: true})
    // creditCardNumber: string;
    
    // add whatever other fields you want a user to have here 

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Transaction' }] }) // array of transactions  
    transactions: Types.ObjectId[];
}

export type UserDocument = Document & User;
export const UserSchema = SchemaFactory.createForClass(User);