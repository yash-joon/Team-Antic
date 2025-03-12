import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionSchema} from './transaction.schema';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TransactionService implements OnModuleInit  {
    constructor(
        @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
    ) {}

    async onModuleInit() {
        await this.loadDummyData();
    }

    async loadDummyData(){ // reads dummy data and puts into mongoDB

        const dummyDataLocation = path.join(__dirname, '../../../src/assets/data/dummyData.json');

        const dummyJson = JSON.parse(fs.readFileSync(dummyDataLocation, 'utf-8'));

        try{

            if(await this.transactionModel.countDocuments() > 0){ // dont put into database if dummy data is already loaded
                console.log("dummy data already loaded");
                return;
            }

            // await this.transactionModel.deleteMany({}); this will delete the previous dummy data, only need if want to reload this data 

            await this.transactionModel.insertMany(dummyJson.scheduledOutData);

        }catch{
            console.error("Error in loading dummy data");
        }

    }



}
