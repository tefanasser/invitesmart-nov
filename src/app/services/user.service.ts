import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions1 = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8; charset=UTF-8', 'sessionToken': localStorage.getItem('sessionToken')})
};
const token = localStorage.getItem('sessionToken');
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'sessionToken': localStorage.getItem('sessionToken')})
};
// const apiUrl = "http://localhost:3000";
const apiUrl = "http://18.189.7.163:3000";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  register(data){
    const url = `${apiUrl}/user/signUp`;  
    return this.http.post(url, data,  {headers: new HttpHeaders({'Accept':'application/json', 'Content-Type':  'application/json; charset=UTF-8'})})
    }
    payment(data){
      const url = `${apiUrl}/payment`;    
      return this.http.post(url, data)
      }

  login(data){
    const url = `${apiUrl}/user/login`;  
    return this.http.post(url, data, {headers: new HttpHeaders({'Accept':'application/json', 'Content-Type':  'application/json; charset=UTF-8'})})
    }
    validatePaytabsKey(){
    const url = `${apiUrl}/validateSecurityKey`;  
    return this.http.get(url, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  userProfile(userId) {
    let id = userId || 'me';
    const url = `${apiUrl}/users/`+id;  
    return this.http.get(url, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  refreshToken() {
    const url = `${apiUrl}/user/refreshToken`;  
    return this.http.get(url, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  
  createInvitation(data) {
    const url = `${apiUrl}/user/createInvitation`;  
    return this.http.post(url, data, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  updateInvitation(data) {
    const url = `${apiUrl}/user/updateInvitation`;  
    return this.http.put(url, data, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  invitations(userId) {
    
    console.log(localStorage.getItem('sessionToken'), '####################')
    const url = `${apiUrl}/user/invitations/`+userId;  
    return this.http.get(url, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }

  verifyPayment(data){
    const url = `${apiUrl}/verifyPayment`;  
    return this.http.post(url, data, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  uploadImage(data) {
    const url = `${apiUrl}/upload/image`;  
    return this.http.post(url, data, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  
  forgotPassword(data){
    const url = `${apiUrl}/authentication/forgotpass`;  
    return this.http.post(url, data)
  }
 
  logout(data){
    const url = `${apiUrl}/user/logout`;  
    return this.http.post(url, data, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  updateToken(token: any, deviceToken: any) {
    const url = `${apiUrl}/update/deviceToken`;  
    return this.http.post(url, deviceToken, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'sessionToken': ''})})
  }

 
  addGuestName(data) {
    const url = `${apiUrl}/invitation/addGuest`;  
    return this.http.post(url, data, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  guest_list(userId, invitationId) {
    const url = `${apiUrl}/guests/`+userId+'/'+invitationId;  
    return this.http.get(url, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  guestWithName(userId, invitationId) {
    const url = `${apiUrl}/guestWithName/`+userId+'/'+invitationId;  
    return this.http.get(url, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
 
  delete(id:string){
    const url = `${apiUrl}/delete/`+id;  
    return this.http.put(url, {}, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }

  getInvitation(id) {
    const url = `${apiUrl}/getInvitation/`+id;  
    return this.http.get(url, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  getGuestName(id){
    const url = `${apiUrl}/getGuestName/`+id;  
    return this.http.get(url, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  updateGuest(data) {
    const url = `${apiUrl}/updateGuest`;  
    return this.http.put(url, data, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
  scannedGuest(userId, invitationId) {
    const url = `${apiUrl}/scannedGuest/`+userId+'/'+invitationId;  
    return this.http.get(url, {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('sessionToken')})})
  }
}
