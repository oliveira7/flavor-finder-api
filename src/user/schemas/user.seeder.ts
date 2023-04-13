import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { Seeder, DataFactory } from 'nestjs-seeder';

@Injectable()
export class UserSeeder implements Seeder {
  constructor(@InjectModel(User.name) private readonly user: Model<User>) {}

  async seed(): Promise<any> {
    // Generate 10 user.
    const user = DataFactory.createForClass(User).generate(10);

    // Insert into the database.
    return this.user.insertMany(user);
  }

  async drop(): Promise<any> {
    return this.user.deleteMany({});
  }
}
