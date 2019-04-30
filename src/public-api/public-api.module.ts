import { Module, Controller } from '@nestjs/common';
import { PublicApiController } from './public-api.controller';
import { PublicApiService } from './public-api.service';

@Module({
    controllers: [PublicApiController],
    providers: [PublicApiService],
})
export class PublicApiModule {}
