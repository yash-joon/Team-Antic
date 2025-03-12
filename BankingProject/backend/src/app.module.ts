import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://team:1234@anticcluster.l2odf.mongodb.net/?retryWrites=true&w=majority&appName=AnticCluster", {
      dbName: 'Banking-App'
    }),

    UsersModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {


}
