import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArgonauteService } from 'src/app/services/argonaute.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  argonautForm:FormGroup;
  argonautes:any;
  constructor(private fb:FormBuilder,
              private argonauteService:ArgonauteService) { }

  ngOnInit() {
    this.argonautForm=this.fb.group({
      argonauteName:['',Validators.required]
    })

    this.argonauteService.getAllArgonautes().subscribe(
      (data)=>{
        console.log(data.message);
        this.argonautes=data.argonautes;
      }
    );
  }

  addArgonaute(x){
    console.log("Argonaute: ",x);
    this.argonauteService.addArgonaute(x).subscribe();
    this.argonauteService.getAllArgonautes().subscribe(
      (data)=>{
        console.log(data.message);
        this.argonautes=data.argonautes;
      }
    );
  }
}
