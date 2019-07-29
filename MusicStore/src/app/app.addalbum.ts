

import{ROUTES, Router}from '@angular/router';
import { Component,OnInit } from "@angular/core";
import {AlbumService} from './albumservice';
@Component
({
    selector:'add-comp',
    templateUrl:'addalbum.html'
})
//it is taking data from AlbumService and after adding navigating to showAlbumComponent
export class AddAlbumComponent implements OnInit
{

constructor(private service:AlbumService,private router:Router)
{

}

albumId:number;
albumTitle:string;
albumArtist:string;
albumPrice:number;
myallData:any;

albumAll:any[]=[];

ngOnInit()
{
  
   this.albumAll=this.service.getAllAlbum();
   
}

addData():any{
      
    this.myallData={albumId:this.albumId,albumTitle:this.albumTitle,albumArtist:this.albumArtist,albumPrice:this.albumPrice};
   

   if(this.service.addEmployee(this.myallData))
   {
       this.router.navigate(['list']);
   }
   

   

}
}