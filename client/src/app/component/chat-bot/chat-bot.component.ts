import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/shared/chat.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.sass']
})
export class ChatBotComponent implements OnInit {
  msg:string;
  messages:any =[];
  @ViewChild('scrollMe',{static:false}) myScrollContainer: ElementRef;
  constructor(private chatService:ChatService) {
      this.messages = [
        {msg:'welcome to chat msg',user:1,date:new Date()}
      ];
   }

  ngOnInit() {    
  }

  sendMessage(msg){
    console.log(this.myScrollContainer.nativeElement);
    console.log(this.myScrollContainer.nativeElement.scrollHeight);
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight + 50;
    const msgs =  {msg:msg, user:1,date: new Date()}
    this.messages.push(msgs);
    this.msg = '';
    this.chatService.sendMessage(msg)
    .subscribe((data:any)=>{
      const rmsgs =  {msg:data.result.speech,user:2, date: data.timestamp};
      this.messages.push(rmsgs);
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight + 50;

    })
  }

}
