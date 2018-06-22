import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { CharacterListComponent, DetailsDialog } from './character-list/character-list.component';

import {MatDialogModule, MatDialog} from'@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CharacterListComponent,
    DetailsDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule
    ],
  providers: [	
    MatDialog
    ],
  bootstrap: [AppComponent],
  entryComponents: [DetailsDialog]
})
export class AppModule { }
