import {Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {Types, Document } from 'mongoose';
import { Transaction } from 'src/transaction/transaction.schema';

@Schema()
export class User {

    @Prop({ required: true })
    email:string;

    @Prop({ required: true })
    password:string;

    @Prop({ required: true})
    firstName:string;

    @Prop({ required: true})
    lastName:string;

    @Prop({ required: true, unique: true })
    accountNumber: string;

    // Have these so we don't have to sum up the entire database.
    @Prop({required: true, unique: true})
    scheduledOutTotal: number;

    @Prop({required: true, unique: true})
    reserveTotal: number;
    
    @Prop({required: true, unique: true})
    savingsTotal: number;

    // @Prop({ required: true})
    // creditCardNumber: string;
    
    // add whatever other fields you want a user to have here 

    @Prop({ type: [{ type: Object }] }) // array of transactions  
    transactions: Transaction[];
}

export type UserDocument = Document & User;
export const UserSchema = SchemaFactory.createForClass(User);