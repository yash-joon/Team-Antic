import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { Transfer, TransferSchema } from './schemas/transfer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Transfer.name, schema: TransferSchema }])
  ],
  controllers: [TransfersController],
  providers: [TransfersService],
  exports: [MongooseModule]
})
export class TransfersModule {}
