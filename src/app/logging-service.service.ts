import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  log(logMessage: string) {
    console.log(new Date().toLocaleString + "::" + logMessage);
  }
}
