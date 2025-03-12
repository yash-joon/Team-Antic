import {Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


@Schema({ _id: false })
export class Location {
    @Prop({required:true})
    storeName: string;

    @Prop({required:true})
    address: string;

    @Prop({required:true})
    latitude: number;

    @Prop({required:true})
    longitude: number;

}

export const LocationSchema = SchemaFactory.createForClass(Location);
