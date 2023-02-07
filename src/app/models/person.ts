export enum EHmo {
    macabi=1,
    mehuhedet=2,
    clalit=3,
    leumi=4
 }
export enum EGender1{
    male=1,
    female=2
}
export class Person {
    constructor(
        public Id: string,
        public FirstName: string,
        public LastName: string,
        public BirthDay: Date,
        public Gender: EGender1,
        public  HMO: EHmo)  { }
       
}