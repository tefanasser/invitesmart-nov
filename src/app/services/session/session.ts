import { Injectable } from '@angular/core';
@Injectable()
export class SessionProvider {
    constructor(){
    }

    async checkIfLogin(){
        var data = localStorage.getItem('cUser')
        if(data){
            var verified = this.checkIfVerified()
            if(verified == 'true'){
                return true
            }else{
                return false
            }
        }else {
            return false
        }
    }

    addSession(data:any){
        localStorage.setItem('cUser', JSON.stringify(data))
    }

    removeSession(){
        localStorage.removeItem('cUser')
        localStorage.removeItem('isEmailVerified');
    }

    isFirstVisit(){
        var data = localStorage.getItem('isFirstVisit')
        console.log(data)
        if(data){
            return false
        }else {
            return true
        }
    }

    firstVisited(){
        localStorage.setItem('isFirstVisit', 'true')
    }

    async getToken(){
        var data = JSON.parse(localStorage.getItem('cUser'))
        if(data){
            return await data.token
        }else {
            return await ''
        }
    }

    emailVerifiedStatus(val: any){
        localStorage.setItem('isEmailVerified', val);
    }

    checkIfVerified(){
        return localStorage.getItem('isEmailVerified');
    }


}