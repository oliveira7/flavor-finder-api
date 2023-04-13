import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user/schemas/user.schema';
import { UserSeeder } from './user/schemas/user.seeder';

seeder({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
}).run([UserSeeder]);
