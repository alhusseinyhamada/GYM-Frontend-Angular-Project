import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  favoriteProducts:any[]=[];
  imagepath:any="http://localhost:8000/assets/";
  constructor() { }

  ngOnInit(): void {
    this.getFavoriteProducts();
  }


  getFavoriteProducts(){
        if('detail' in localStorage){

      this.favoriteProducts = JSON.parse(localStorage.getItem('detail')!);
  }
  console.log( this.favoriteProducts);
  
}

}
