import { Component } from "@angular/core";
import { ProductService } from "./product.service";

@Component({
    selector:"productlist",
    templateUrl:"./product.list.html",
    styleUrls:['./product.styles.scss']
})

export class ProductList{
    protected prodList = [];
    protected curPage = 0;
    //protected isdisabled = true;
    public showPopupFlag = false;
    public selecteData = [];
  constructor(private prdService:ProductService){

  }

  ngOnInit(){
   this.prdService.getProductList().subscribe((data)=>{
    this.prodList = data.products;
    console.log(document.getElementsByTagName("body")[0].clientHeight)
   });
  }
  ngDoCheck(){
    
  }
  ngAfterViewChecked(){
    
  }


  handleSort(e){
   let sortby = e.target.value;

   this.prodList.sort((a,b)=>a[sortby]-b[sortby])
  }
  handlePrev(){
    this.getPageList(false);
  }
  handleNext(){
    this.getPageList(true);
  }


  getPageList(isNxt){
    //this.isdisabled = true
    if(isNxt){
        this.curPage += 12; 
    }else{
        this.curPage -=12;
    }
    if(this.curPage < 0){
      //  this.isdisabled = false
        return;
    }
    this.prdService.getProductList(12,this.curPage).subscribe((data)=>{
        this.prodList = data.products;
       });
  }

  showPopup(id){
    this.showPopupFlag = true;
    this.selecteData = this.prodList.filter((val)=>val.id === id);
    window.scrollTo(0,0);
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';

  }
  handleClose(){
    this.showPopupFlag = false;
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }
}