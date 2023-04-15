import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('findOne', () => {
    it('should return a user by username', async () => {
      const mockUser = {
        id: 1,
        username: 'yuri',
        password: 'password',
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(mockUser);

      const user = await service.findOne('yuri');
      expect(user).toEqual(mockUser);
    });

    it('should return undefined if user not found', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValue(undefined);

      const user = await service.findOne('unknownuser');
      expect(user).toBeUndefined();
    });
  });
});
