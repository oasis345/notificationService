import { Global, Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';

@Global()
@Module({
  imports: [],
  controllers: [DataController],
  providers: [DataService],
  exports: [DataService],
})
export class DataModule {}
