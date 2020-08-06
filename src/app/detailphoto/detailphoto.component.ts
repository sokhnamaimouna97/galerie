import { Component, OnInit } from '@angular/core';
import { GalerieService } from '../galerie.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-detailphoto',
  templateUrl: './detailphoto.component.html',
  styleUrls: ['./detailphoto.component.css']
})
export class DetailphotoComponent implements OnInit {

  photos:any;

  constructor(private galerieservice : GalerieService) { }

  ngOnInit() {
    this.galerieservice.findbyid(1).subscribe(response=>{
      this.photos=response;
      console.log(response)
        },error=>{
       console.log(error)

    }
    )
  }
}
