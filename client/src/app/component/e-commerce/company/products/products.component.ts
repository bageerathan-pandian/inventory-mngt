import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/shared/stock.service';
import { Stock } from 'src/app/model/stock.model';
declare var $:any

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  stocksList: Stock[]
  constructor(private stockService: StockService) { }

  ngOnInit() {
   this.getStockByCompanySlug()
  }

  
  getStockByCompanySlug(){
    this.stockService.getStockByCompanySlug()
    .subscribe((data:any)=>{
      console.log('stocksList',data);
      this.stocksList = data;
    })
  }


  addCart(){
    $(function(){
  var cart = $('.shopping-cart');
  var imgtodrag = $(this).parent('.item').find("img").eq(0);
  if (imgtodrag) {
      var imgclone = imgtodrag.clone()
          .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
      })
          .css({
          'opacity': '0.5',
              'position': 'absolute',
              'height': '150px',
              'width': '150px',
              'z-index': '100'
      })
          .appendTo($('body'))
          .animate({
          'top': cart.offset().top + 10,
              'left': cart.offset().left + 10,
              'width': 75,
              'height': 75
      }, 1000, 'easeInOutExpo');
      
      setTimeout(function () {
          cart.effect("shake", {
              times: 2
          }, 200);
      }, 1500);

      imgclone.animate({
          'width': 0,
              'height': 0
      }, function () {
          $(this).detach()
      });
  }

    })
  }

}
