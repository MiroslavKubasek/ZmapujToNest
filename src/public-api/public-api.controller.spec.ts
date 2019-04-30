import { Test, TestingModule } from '@nestjs/testing';
import { PublicApiController } from './public-api.controller';

describe('PublicApi Controller', () => {
  let controller: PublicApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicApiController],
    }).compile();

    controller = module.get<PublicApiController>(PublicApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
