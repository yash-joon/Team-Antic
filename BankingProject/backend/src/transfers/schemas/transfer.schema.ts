import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransferDocument = Transfer & Document;

@Schema({ collection: 'transfers', timestamps: true })
export class Transfer {

  // @Prop({ required: true})
  // id: string;

  @Prop({ required: true })
  fromAccount: string;

  @Prop({ required: true })
  toAccount: string;

  @Prop({ required: true, min: 1 })
  amount: number;

  @Prop({ required: true, min: 1 })
  transferDate: string;
  
  // Memo is optional
  @Prop()
  memo?: string;

}

export const TransferSchema = SchemaFactory.createForClass(Transfer);
