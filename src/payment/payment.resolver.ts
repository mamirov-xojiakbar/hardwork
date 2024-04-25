
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Payment } from './entities/payment.entity';

@Resolver('payment')
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

 

  @Query(()=>[Payment])
  findAllPayment() {
    return this.paymentService.findAll();
  }

  @Query(()=>Payment)
  findOnePayment(@Args('id',{type:()=>ID}) id: number) {
    return this.paymentService.findOne(id);
  }

  @Mutation(()=>Payment)
  createPayment(@Args('createPayment') createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Mutation(()=>Payment)
  updatePayment(@Args('id',{type:()=>ID}) id: number,
   @Args('updatePayment') updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  @Mutation(()=>Payment)
  removePayment(@Args('id',{type:()=>ID}) id: number) {
    return this.paymentService.remove(id);
  }
}
