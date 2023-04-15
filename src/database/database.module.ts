import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';
import { databaseProviders } from './database.providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
  providers: [
    ...databaseProviders,
    {
      provide: 'MongooseConnection',
      useFactory: async (
        configService: ConfigService,
      ): Promise<typeof mongoose> => {
        const connection = await mongoose.connect(
          configService.get<string>('MONGODB_URI'),
        );
        return connection;
      },
      inject: [ConfigService],
    },
  ],
  exports: [...databaseProviders, 'MongooseConnection'],
})
export class DatabaseModule {}
