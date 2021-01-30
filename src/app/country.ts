export class Country {

    public id:string;
    public name: string;
    public slug: string;
    public newCases: number;
    public totalCases: number;
    public newDeaths: number;
    public totalDeaths: number;
    public newRecovered: number;
    public totalRecovered: number;
    public date: string;

    constructor(id:string,name: string,
        slug: string, newCases: number, totalCases: number, 
        newDeaths: number, totalDeaths: number, newRecovered: number, 
        totalRecovered: number, date: string)
        {
            this.id = id;
            this.name = name;
            this.slug = slug;
            this.newCases = newCases;
            this.totalCases = totalCases;
            this.newDeaths = newDeaths;
            this.totalDeaths = totalDeaths;
            this.newRecovered = newRecovered;
            this.totalRecovered = totalRecovered;
            this.date = date;
    }
}
