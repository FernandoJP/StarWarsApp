export class Character{
    name:string;
    height:number;
    mass:number;
    hairColor:string;
    skinColor:string;
    eyeColor:string;
    birthYear:string;
    gender:string;

    constructor(values: Object) {
        for(let key in values){
            let newKey = key.split("_")
                .map(t => t.charAt(0).toUpperCase() + t.slice(1))
                .join("");
            values[newKey.charAt(0).toLowerCase() + newKey.slice(1)] = values[key];
        }
        Object.assign(this, values);
    }

}