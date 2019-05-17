import { Component } from '@angular/core';
//add library
import { ToastrService } from 'ngx-toastr';
//add service
import { NotificationServiceService } from './notification-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoNotificacion';
  Notification:Array<string> = [];
  info:string = "";
  warning:string ="";
  displayInfo = false;
  displayWarning = false;

  constructor(
    private toastr: ToastrService,
    private NotificationService : NotificationServiceService,
    ) {
      this.Notification = this.NotificationService.notification();
      this.info = this.Notification[0];
      this.warning = this.Notification[1];
      this.showSuccess();
      this.showWarning();
  }

  showSuccess() {
    this.toastr.success('Mensaje de información', this.info);
  }
  showWarning() {
    this.toastr.error( this.warning);
  }

  toogleInfo(){
    this.displayInfo = !this.displayInfo;
  }

  toogleWarning(){
    this.displayWarning = !this.displayWarning;
  }

}
