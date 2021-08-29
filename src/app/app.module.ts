import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriesComponent } from './repositories/repositories.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    RepositoriesComponent,
    GitsearchFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
