import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from '../transaction/transaction.schema';
import { User } from './user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel:Model<User>,
        @InjectModel(Transaction.name) private transactionModel:Model<Transaction>,
    ) {}


    async createUser(userInfo: {email: string; password: string;}){
        const user =  await this.userModel.create(userInfo);
        await user.save();


        const randomTransactions = await this.transactionModel.aggregate([{ $sample: { size: 300 } } ]); // gets 300 random transactions and puts into an array for users 
        return user;
    }



}
