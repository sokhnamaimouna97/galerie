import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { GalerieService } from '../galerie.service';



@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  searchForm: FormGroup;
  submitted=false;
  motcle:String='';
  items:Array<any>=[];
  photos:Array<any>=[]
  photo:any;
  mode=true;
  currentPage:number=1;
  size:number=5;
  totalpages:number;
  pages:Array<number>=[]

  constructor(private galerieservice:GalerieService ,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.searchForm=this.formBuilder.group({
      motcle:['',Validators.required],
      //currentPage:['',Validators.required],
      //size:['',Validators.required],

    })

  }
  get f(){
    return this.searchForm.controls;

  }
  onSearch(){
   //this.submitted=true;
    if(this.searchForm.invalid){
      return;
    }
   this.motcle=this.searchForm.value.motcle;
   //this.currentPage=this.searchForm.value.currentPage;
   //this.size=this.searchForm.value.size;

   //console.log(this.motcle);
   this.galerieservice.search(this.motcle,this.currentPage,this.size).subscribe(response=>{
   this.mode=true;
   this.items=response.hits;
   this.totalpages=response.totalHits/this.size;
   if(response.totalHits % this.size !=0 ) ++this.totalpages;
   //this.pages=new Array(this.totalpages);
      console.log(response)
   },error=>{
      //console.log(error)
       }
    )
   }
  detailimage(item){
  this.photo=item;
  this.mode=false;

  }
/*goTopage(i){
  this.page=i+1;
  this.onSearch();
}*/

}
