  import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()

export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository:Repository<User>,@Inject(CACHE_MANAGER)private cacheManager:Cache){}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    await this.cacheManager.set('cached_item',{"hello":String} );
    const cachedItem=await this.cacheManager.get('cached_item');
    console.log(cachedItem);

    return(
    
      this.userRepository.find().then(user =>{
        console.log("call weno utto");
      return user;
    })
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
