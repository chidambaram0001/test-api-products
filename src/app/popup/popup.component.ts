import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector:"popup",
    templateUrl:"./popup.component.html",
    styleUrls:['popup.scss'],
    encapsulation:ViewEncapsulation.None
})

export class Popup{
    @Input() curPrdData : Array<any>
    protected modelData;
    protected starCount = [];
    constructor(){

    }

    ngOnChanges(){
        console.log(this.curPrdData)
        this.modelData = this.curPrdData[0];
        let len = Math.floor(this.modelData.rating);
        for(let i=0; i<5;i++){
            if(i < len-1){
                this.starCount.push(true)
            }else{
                this.starCount.push(false)
                
            }
        }
    }
}