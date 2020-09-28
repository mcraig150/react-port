import React, { Component } from "react";
import Header from "../Componets/Header";
import Card from "../Componets/Card";
import './Projects.css'
export class Projects extends Component {
  render() {
    let projects = [
      {
        name: "Google Book Search",
        link: "https://github.com/mcraig150/google-books",
        text: "Web App used to search for books using the google books API.",
      },
       {
        name: "Employee Veiwer",
        link: "https://github.com/mcraig150/employee-viewer",
        text: "Web app used to serch and sort employees for easy acsses for employee info."
      },
       {
        name: "Fitness Tracker",
        link: "https://github.com/mcraig150/Workout-tracker",
        text: "Web app to log and track workouts using mongodb to save workouts.",
      },
       {
        name: "Adopt ME",
        link: "https://github.com/sthapa411/AdoptMe",
        text: "Web app to find animals up for adoption in your aria using the petfinder API.",
      },
      {
        name: "Food Finder",
        link: "https://github.com/njohnerwin/food-finder-P1",
        text: "Web app used to find food in your area utilizes zomato API to find local cusine.",
      },
      {
        name: "Eat The Burger",
        link: "https://github.com/mcraig150/burger",
        text: "Web app the utilizes handlebars rendering engine and mySQL database to create and store burgers.",
      },
    ];
    console.log(projects)
    return (
      <div>
        <Header />
        <div className="projects">
        {projects.map((project) => (
            <Card project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
