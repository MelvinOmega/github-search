import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriesComponent } from './repositories/repositories.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component'
import { RouterModule, Routes } from '@angular/router';
import { GitsearcherService } from './gitsearcher.service';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { RoutingModule } from './routing/routing/routing.module';
import { FormsModule } from '@angular/forms';
// import { NotFoundComponent } from './not-found/not-found.component';

const routes:Routes=[
  {path:"gitsearch",component:GitsearchComponent},
  {path:"repositories",component:RepositoriesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    RepositoriesComponent,
    GitsearchFormComponent,
    GitsearchComponent,
    // NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitsearcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }


