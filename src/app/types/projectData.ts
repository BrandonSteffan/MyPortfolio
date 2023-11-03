import { Project } from "./project";

export const projectData : Project[] = [
    {
        name:"Aim Trainer" ,
        urlName:"AimTrainer",
        img:"assets/images/aim-trainer-home.png",
        description:"Aim training game based on vanilla JS", 
        gitUrl:"https://github.com/BrandonSteffan/AimTrainer", 
        html:true,
        css:true,
        js:true,
        angular:false,
        netUrl:"https://aim-trainer-brandon.netlify.app/",
        imgD1:"assets/images/aim-trainer-game.png",
        imgD2:"assets/images/aim-trainer-end.png",
        descriptionLong:"This project is a game where the goal is to hit as much targets as possible before the timer runs out. Every time you hit the target your score gets increased but also the difficulty. If you hit multiple targets in a row you get bonus points. The target of this project was to get comfortable creating more advanced logic using Javascript"
    },
    {
        name: "Astronomy Picture of the Day",
        urlName:"APOD", 
        img:"assets/images/pod-home.png", 
        description:"Angular Project using the NASA Picture of the Day API", 
        gitUrl:"https://github.com/BrandonSteffan/POD",
        html:true,
        css:true,
        js:false,
        angular:true,
        netUrl:"",
        imgD1:"assets/images/pod-detail.png",
        imgD2:"",
        descriptionLong:"This Project was created using Angular. It uses the NASA astronomy picture of the day API to display those pictures during a set interval. With the date inputs you can set a start and end date, then all the pictures from this timeframe will be displayed. If you click on an image you get to a detail view which displays more information about the image."
    },
    {
        name:"Asteroids",
        urlName:"Asteroids", 
        img:"assets/images/asteroids-home.png", 
        description:"Angular Project using the NASA Near Earth Object API", 
        gitUrl:"https://github.com/BrandonSteffan/Asteroids",
        html:true,
        css:true,
        js:false,
        angular:true,
        netUrl:"",
        imgD1:"assets/images/asteroids-detail.png",
        imgD2:"",
        descriptionLong:"This project was created using Angular. It uses The NASA near earth objects API to display all asteroids near earth on a given day. Asteroids who are potentially dangerous will have a red background color.If you click on details button you will get a more detailed view of the card with some additional info if the asteroid is potentially dangerous or not."
    }
]