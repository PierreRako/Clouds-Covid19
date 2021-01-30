import { User } from "./user";

export class ASingleNews {
    writerUid:string;
    writerDisplayName:string;
    writerEmail:string;
    writerEligibility:boolean;
    description:string;
    date:any;
    slug:string;

    constructor(uid:string,displayName:string,email:string,eligibility,description:string,date:any,slug:string){
        this.writerUid=uid;
        this.writerDisplayName=displayName;
        this.writerEmail=email;
        this.writerEligibility=eligibility;
        this.description=description;
        this.date=date;
        this.slug=slug;
    }
}
