import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
@Injectable({
    providedIn:'root'
})


export class AlbumService{

  //Communicating with both ShowAlbumComponent and the AddAlbumComponent 
    
albumId:number;
albumTitle:string;
albumArtist:string;
albumPrice:number;
myallData:any;

//one default record.
albumAll:any[]=[{albumId:101,albumTitle:"Shines",albumArtist:"Zack",albumPrice:200}];

    constructor(private http:HttpClient) {
        
    }

   
    addEmployee(data:any)
    {
        this.albumAll.push(data);
        return true;
    }

    
    getAllAlbum()
    {
     
     return this.albumAll;
     

    }
    
     

} 
