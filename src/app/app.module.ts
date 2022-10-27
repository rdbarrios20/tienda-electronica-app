import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { OrderComponent } from './components/order/order.component';
import { OrderService } from 'src/app/services/order.service';
import { FormsModule } from '@angular/forms';
import { ProviderComponent } from './components/provider/provider.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OrderComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
