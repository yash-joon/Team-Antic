import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { Transaction, TransactionSchema } from '../transaction/transaction.schema';



@Module({
  imports:[
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }, 
      { name: Transaction.name, schema: TransactionSchema },
    ])
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}

