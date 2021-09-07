import { UrlClass } from './../../Models/url-class';
import { Router } from '@angular/router';
import { UrlService } from './../../Services/url.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {
  urlReg = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)$/
  checkUrl:any =false;
  originalUrl:string = '';
  urlClass:UrlClass;
  constructor(private urlService:UrlService,
    private router:Router
    ) { 
      this.urlClass = new UrlClass();
    }

  ngOnInit() {
  }

  checkValidUrl(url){
    if(url.match(this.urlReg)){
      this.checkUrl = true;
    }
    else{
      alert('in valid url')
      this.checkUrl = false
    }
  }
  submit(){
    if(this.checkUrl == true){
      this.urlClass.url = this.originalUrl;
      this.urlService.addNewUrl(this.urlClass).subscribe(res=>{
        if(res == true)this.router.navigate(['./UrlList'])
        else alert('Error !!')
      })
    }
    else{
      alert('Invalid Url')
    }
  }
}
