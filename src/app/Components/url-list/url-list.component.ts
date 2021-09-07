import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from 'src/app/Services/url.service';
import { ExcelServicesService } from '../../Services/excel-services.service';  
import { Observable } from 'rxjs'; 
@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {
  p:any = 1
  urls:any;
  
  constructor(private router:Router,
    private urlService:UrlService,
    private excelService:ExcelServicesService,
    private http:HttpClient
    ){}
  
  ngOnInit() {
    this.urlService.getAll().subscribe(res=>{this.urls = res})
  }

  GoToAddForm(){
    this.router.navigate(['./addUrl'])
  }

  GoToUrl(url){
    window.open(url,'_system');  
  }
  exportAsXLSX():void {  
    this.excelService.exportAsExcelFile(this.urls, 'sample');  
  }  
  public getJSON(): Observable<any> {  
    return this.http.get('https://api.myjson.com/bins/zg8of');  
  }  
}
