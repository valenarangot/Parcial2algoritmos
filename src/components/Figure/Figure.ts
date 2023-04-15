export enum AttributeFigure{
     "name" = "name",
     "career" = "career",
     "celebrity" = "celebrity",
     "dev" = "explicit",
     "fashion" = "fashion",
     "food" = "food",
     "history" = "history",
     "money" = "money",
     "music" = "music",
     "political" = "political",
     "religion" = "religion",
     "science" = "science",
     "sport" = "sport",
     "travel" = "travel"
}

export default class Figure extends HTMLElement{
    name?: string; 
    career?: string;
    celebrity?: string;
    dev?: string;
    fashion?: string;
    food?: string;
    history?: string;
    money?: string;
    music?: string;
    political?: string;
    religion?: string;
    science?: string;
    sport?: string;
    travel?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeFigure, null> ={
            name: s 
            career?: string;
            celebrity?: string;
            dev?: string;
            fashion?: string;
            food?: string;
            history?: string;
            money?: string;
            music?: string;
            political?: string;
            religion?: string;
            science?: string;
            sport?: string;
            travel?: string;
        }

    }
}