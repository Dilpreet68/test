import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ShowAlbumComponent } from './app.showalbum';
import { AddAlbumComponent } from './app.addalbum';



const routes:Routes=[
    {path:'', redirectTo: 'list', pathMatch: 'full' },
    {path:'add',component:AddAlbumComponent},
    {path:'list',component:ShowAlbumComponent},
    
]


@NgModule({
    imports: [
        BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes)
        
    ],
    declarations: [
        AppComponent,AddAlbumComponent,ShowAlbumComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }