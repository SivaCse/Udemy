import { Ingredient } from './ingredients';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Array<Ingredient>;

    constructor(name:string, description:string, imagePath:string, ingredients:Array<Ingredient>){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
