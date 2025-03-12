import {Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { LocationSchema, Location } from './location.schema';


@Schema()
export class Transaction {

    @Prop({required:true})
    transactionId: string;

    @Prop({required:true})
    date: string;

    @Prop({required:true})
    service: string;

    @Prop({required:true})
    category: string;

    @Prop({required:true})
    cost: string;

    @Prop({required:true})
    paymentMethod: string;
    
    @Prop({type:LocationSchema, required:true})
    location:Location;

    @Prop({required:true})
    status: string;

    @Prop({required:true})
    recurring: boolean;

    @Prop({required:true})
    notes: string;

    @Prop({required:true})
    pointsEarned:number;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    user: Types.ObjectId;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
  
