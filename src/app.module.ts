import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LogementModule } from './logement/logement.module';
import { CategoryModule } from './category/category.module';
import { AddressModule } from './address/address.module';


@Module({

  imports: [MongooseModule.forRoot('mongodb+srv://zakarialoulida92:7fP7hMJsghzAbPxv@workspace.e08cn09.mongodb.net/JABADOOR?retryWrites=true&w=majority&appName=Workspace') ,UserModule, AuthModule, LogementModule, CategoryModule, AddressModule ],

  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
