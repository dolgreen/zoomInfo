import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MyConfigModule } from './config.module';

@Module({
  imports: [UsersModule, AuthModule, MyConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
