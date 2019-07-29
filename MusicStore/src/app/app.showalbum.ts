import { Component ,OnInit} from '@angular/core';
import {AlbumService} from './albumservice';

@Component({
    selector: 'show-comp',
    templateUrl: 'showalbum.html'
})


//Taking  data from  albumservice and  from AddAlbumComponent after adding new Album
export class ShowAlbumComponent implements OnInit{
    constructor(private service:AlbumService)
{

}


albumAll:any[]=[];

ngOnInit()
{
   
    this.albumAll=this.service.getAllAlbum();  
}

deleteAlbum(data:number):any{
     
    if (confirm('Are You Sure You want To delete ?')) {
        
        this.albumAll.splice(data,1);
   }

    
}

}

