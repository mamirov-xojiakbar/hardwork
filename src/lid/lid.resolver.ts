import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LidService } from './lid.service';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Lid } from './entities/lid.entity';

@Resolver('lid')
export class LidResolver {
  constructor(private readonly lidService: LidService) {}

  

  @Query(()=>[Lid])
  findAllLid() {
    return this.lidService.findAll();
  }

  @Query(()=>Lid)
  findOneLid(@Args('id',{type:()=>ID}) id: number) {
    return this.lidService.findOne(id);
  }

  @Mutation(()=>Lid)
  createLid(@Args('CreateLids') createLidDto: CreateLidDto) {
    return this.lidService.create(createLidDto);
  }
  @Mutation(()=>Lid)
  updateLid(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateLid') updateLidDto: UpdateLidDto) {
    return this.lidService.update(id, updateLidDto);
  }

  @Mutation(()=>Lid)
  removeLid(@Args('id',{type:()=>ID}) id: number) {
    return this.lidService.remove(id);
  }
}
