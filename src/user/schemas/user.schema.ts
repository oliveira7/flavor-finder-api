import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Factory } from 'nestjs-seeder';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Factory((faker) => faker.name.firstName())
  @Prop({ required: true })
  name: string;

  @Factory((faker) => faker.internet.userName())
  @Prop({ required: true })
  username: string;

  @Factory((faker) => faker.internet.email())
  @Prop({ required: true })
  email: string;

  @Factory((faker) => faker.internet.password())
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
