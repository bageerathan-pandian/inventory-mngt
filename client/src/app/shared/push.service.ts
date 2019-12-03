import { Injectable } from '@angular/core';
import * as Notify from 'notifyjs'

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor() {
    if (!Notify.needsPermission) {
      console.log('onPermissionGranted');
    } else if (Notify.isSupported()) {
      Notify.requestPermission(this.onPermissionGranted(), this.onPermissionDenied());
    }
   }


  
onPermissionGranted() {
	console.log('Permission has been granted by the user');
}

onPermissionDenied() {
	console.warn('Permission has been denied by the user');
}

doNotification(title,body){  
	console.log('doNotification');
  var myNotification = new Notify(title, {
    body: body,
    icon:'favicon1.ico',
    notifyShow: console.log('notify'),
    notifyClick: this.doClickNotify()
  });

  myNotification.show();
  // Notify.show()
}

doClickNotify(){
	console.log('doClickNotify');
  // this.router.navigate(['/notification'])
}

}
