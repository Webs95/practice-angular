import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { PassangerDashboardComponent } from './passanger-dashboard/passanger-dashboard.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, InputComponent, PassangerDashboardComponent],
  bootstrap: [AppComponent],
  exports: [],
  providers: [],
})
export class AppModule {}
