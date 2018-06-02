export class Contact {
    public imgPath: string;
    public name: string;
    public surname: string;
    public proffesion: string;
    public contactInfo: {[infotype: string]: string};
    

    constructor(imgPath: string, name: string, surname: string, proffesion: string, email: string){
        this.imgPath = imgPath;
        this.name = name;
        this.surname = name;
        this.proffesion = proffesion;
    }
}