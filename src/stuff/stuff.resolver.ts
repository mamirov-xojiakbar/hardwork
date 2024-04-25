import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { Response } from 'express';
import { LoginStuffDto } from './dto/logi-stuff.dto';
import { CookieGetter } from 'src/decorators/cookie-gettor.decorators';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Stuff } from './entities/stuff.entity';

@Resolver('stuff')
export class StuffResolver {
  constructor(private readonly stuffService: StuffService) {}

  @Mutation(()=>Stuff)
  createStuff(@Args('createStuff') createStuffDto: CreateStuffDto)
   {
    return this.stuffService.create(createStuffDto);
  }
 

  // @Mutation(()=>Stuff)
  // async loginStuff(
  //   @Args('loginStuff') loginStuffDto: LoginStuffDto,
  //   @Res({ passthrough: true }) res: Response,
  // ) {
  //   return this.stuffService.login(loginStuffDto, res);
  // }


 
  // @Post('logout')
  // async logout(
  //   @CookieGetter('refresh_token') refreshToken: string,
  //   @Res({ passthrough: true })
  //   res: Response,
  // ) {
  //   return this.stuffService.logout(refreshToken, res);
  // }


  // @HttpCode(200)
  // @Post(':id/refresh')
  // async refresh(
  //   @Param('id') id: number,
  //   @CookieGetter('refresh_token')
  //   refreshToken: string,
  //   @Res({ passthrough: true })
  //   res: Response,
  // ) {
  //   return this.stuffService.refreshToken(+id, refreshToken, res);
  // }

  @Query(()=>[Stuff])
  findAllStuff() {
    return this.stuffService.findAll();
  }

  @Query(()=>Stuff)
  findOneStuff(@Args('id',{type:()=>ID}) id: number) {
    return this.stuffService.findOne(id);
  }

  @Mutation(()=>Stuff)
  updateStuff(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateStuff') updateStuffDto: UpdateStuffDto) {
    return this.stuffService.update(id, updateStuffDto);
  }

  @Mutation(()=>Stuff)
  removeStuff(@Args('id',{type:()=>ID}) id: number) {
    return this.stuffService.remove(id);
  }
}
