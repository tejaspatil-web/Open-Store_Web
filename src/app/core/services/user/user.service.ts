import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/api-url-environment';
import { userAuthenticationModel , userDetails} from '../../../models/user-auth.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}
  private _url = environment.baseApiUrls;

  userAuthentication(userAuth: userAuthenticationModel) {
    return this._http.post(`${this._url.userApi}/login`, userAuth);
  }

  getUserDetails(id: string) {
    return this._http.get(`${this._url.userApi}/user/${id}`);
  }

  userRegistration(userDetails:userDetails){
    return this._http.post(`${this._url.userApi}/create`,userDetails)
  }

  sendOtpForEmailVerification(email:Object){
    return this._http.post(`${this._url.userApi}/sendotp`,email)
  }

  userEmailVerification(email:String,otp:String){
    const parameters = {email:email,otp:otp}
    return this._http.post(`${this._url.userApi}/verifyotp`,parameters)
  }

  sendOtpResetPassword(email:String){
    const url = 'http://localhost:8080/api/user/forgotpassword'
    // return this._http.post(`${this._url.userApi}/forgotpassword`,{email:email})
    return this._http.post(`${url}`,{email:email})
  }

otpVerifiactionResetPassword(email:String,otp:String){
  const parameters = {email:email,otp:otp}
  const url = 'http://localhost:8080/api/user/otpverification'
  // return this._http.post(`${this._url.userApi}/otpverification`,parameters)
  return this._http.post(`${url}`,parameters)
}

updatePassword(email:String,password:String,otp:String){
  const parameters = {email:email,password:password,otp:otp}
  const url = 'http://localhost:8080/api/user/updatepassword'
  return this._http.post(`${url}`,parameters)
}

}
