import { Controller, HttpCode, Post,Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post("createNewUser")
    @HttpCode(200)
    async createUser(@Body() userInfo: { email: string; password: string }){
        return await this.usersService.createUser(userInfo)
    }

}
