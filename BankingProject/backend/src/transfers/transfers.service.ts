import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transfer, TransferDocument } from './schemas/transfer.schema';

@Injectable()
export class TransfersService {
  constructor(@InjectModel(Transfer.name) private transferModel: Model<TransferDocument>) {}

  // Fetch all transfers
  async findAll(): Promise<Transfer[]> {
    return this.transferModel.find().exec();
  }

  // Fetch a specific transfer by ID
  async findById(id: string): Promise<Transfer | null> {
    return this.transferModel.findById(id).exec();
  }

  // Create a new transfer
//   async createTransfer(transferData: Partial<Transfer>): Promise<Transfer> {
//     const newTransfer = new this.transferModel(transferData);
//     return newTransfer.save();
//   }

  async createTransfer(transferDto: Transfer): Promise<Transfer> {
    const newTransfer = new this.transferModel(transferDto);
    return await newTransfer.save();
}
}
