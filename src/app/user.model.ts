/**
 * Created by mattdiederick on 3/7/17.
 */

export class UserModel {

  constructor(
    public fName:string,
    public lName:string,
    public email:string,
    public phone:string,
    public password?:string,
    public password2?:string,
    public gender?:string,
    public birthday?:Date
  ){}
}
