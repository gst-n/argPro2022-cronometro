import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  constructor() { 

  }
  ngOnInit(): void {
    
  }
  sec:number = 0;
  min:number = 0;
  hrs:number = 0;
  intervalo:any;

  horalocal:any = setInterval(() => {
      this.horalocal = new Date().toLocaleTimeString('en-US')
    }, 1000)

  iniciarTimer = ():any => {
    this.intervalo = setInterval(()=>{
      this.sec++
      if( this.sec >= 60 ){
        this.min++;
        this.sec = 0;
        if (this.min >= 60){
          this.hrs++;
          this.min = 0;
        }
      }
    }, 1000)
  }
  restartTime(){
    this.sec = 0;
    this.min = 0;
    this.hrs = 0;
  }

  clearTime(){
    console.log("pause")
   return clearInterval(this.intervalo);
  }


}
