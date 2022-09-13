import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { PassangerDashboardModule } from './passanger-dashboard/passanger-dashboard.module';

@NgModule({
  imports: [BrowserModule, FormsModule, PassangerDashboardModule],
  declarations: [AppComponent, InputComponent],
  bootstrap: [AppComponent],
  exports: [],
  providers: [],
})
export class AppModule {}
