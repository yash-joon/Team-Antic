import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { Transfer } from './schemas/transfer.schema';

@Controller('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  // Fetch all transfers
  @Get()
  async getAllTransfers(): Promise<Transfer[]> {
    return this.transfersService.findAll();
  }

  // Fetch a specific transfer by ID
  @Get(':id')
  async getTransferById(@Param('id') id: string): Promise<Transfer | null> {
    return this.transfersService.findById(id);
  }

  // Create a new transfer
//   @Post()
//   async createTransfer(@Body() transferData: Partial<Transfer>): Promise<Transfer> {
//     return this.transfersService.createTransfer(transferData);
//   }

    @Post()
    async createTransfer(@Body() transferDto: Transfer) {
        return await this.transfersService.createTransfer(transferDto);
    }
}
