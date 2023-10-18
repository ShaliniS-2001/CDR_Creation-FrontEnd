import { Component } from '@angular/core';

@Component({
  selector: 'app-makecall',
  templateUrl: './makecall.component.html',
  styleUrls: ['./makecall.component.css']
})
export class MakecallComponent {

  dialScreenContent: string = '';
  isCalling:boolean=false;
  timer:number=0;
  timerInterval:any;
  fullscreen:boolean=false;
  callingSectionVisible:boolean=false;

  toggleCallingSection() {
    this.callingSectionVisible = true;
    this.fullscreen = true;
    console.log(this.fullscreen)
    setTimeout(()=>{
      this.initiateCall();
    },100);
  }

 

  displayDialKey(key: string) {
    if(key==='back'){
      this.dialScreenContent = this.dialScreenContent.slice(0,-1);
    }
    else{
      this.dialScreenContent += key;
    }
   
  }

  initiateCall(){
    this.isCalling=true;
    this.timerInterval=setInterval(()=>{
      this.timer++;
    },1000);

  }

  endCall() {
    this.isCalling = false;
    this.callingSectionVisible = false;
    clearInterval(this.timerInterval);
    this.fullscreen=false;
    console.log('Call ended duration => '+this.calculateDuration());
    this.timer = 0;
  }

  calculateDuration(){
    const min:string=Math.floor(this.timer/60).toString().padStart(2,'0');
    const sec:String=(this.timer%60).toString().padStart(2,'0');
    return min+':'+sec;
  }
  formatTimer(){
    const minutes:string=Math.floor(this.timer/60).toString().padStart(2,'0');
    const seconds:string=(this.timer%60).toString().padStart(2,'0');
    return minutes+':'+seconds;
  }

}
