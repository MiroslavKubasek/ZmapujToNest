import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicApiController } from './public-api/public-api.controller';
import { PublicApiModule } from './public-api/public-api.module';

@Module({
  imports: [PublicApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
