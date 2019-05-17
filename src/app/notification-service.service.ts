import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  info:string = "la notificación generada por el servicio";
  error:string = "alerta de error generada por el servicio";
  Notification:Array<string> = [];

  constructor() {
    this.Notification = [this.info,this.error];
    this.notification();
    
  }

  notification(){
    return this.Notification;
  }

}
