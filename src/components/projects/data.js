import homeStay from '../../assets/images/homeStay.png'
import healthTurtle from '../../assets/images/healthTurtle.png'
import nda from '../../assets/images/nda.jpeg'
import salon from '../../assets/images/salon.png'
import feedTheBelly from '../../assets/images/feedTheBelly.png'
import streamSearch from '../../assets/images/stream.png'

export const projects = [
  {
    title: "Stream Search (In Progress)",
    technology: "HTML5, CSS3, Bootstrap, JavaScript, JQuery, ReactJS, NodeJS",
    description:
      "Web App to find out information about movies like their descriptiom, runtime, ratings and where are they streaming. It's the movie streaming search engine which also provides top rated movies which can be filtered based on different genres!. It also provides auto-suggestions based upon your search!",
    image: streamSearch,
    github: "https://61badea7d9e13b20660a275c--determined-curran-0388f1.netlify.app/",
  },
    {
      title: "Home Stay",
      technology: "HTML5, CSS3, Bootstrap, ReactJS, Spring Boot, MongoDB, Apache Mahout",
      description:
        "A Full Stack Web Application to help students book affordable rental units based based on recommendations provided by using machine learning libraries.",
      image: homeStay,
      github: "https://github.com/Aakash145/Homestay",
    },
    {
      title: "Funds Outcome Analyzer",
      technology: "HTML5, CSS3, JavaScript, JQuery, NodeJS, MongoDB, PowerBI",
      description:
        "An award Winning Funds Outcome Analyzer that involves analyzing data and generating reports for the funds used by different institutions that were granted by the government.",
      image: nda,
      github: "",
    },
    {
      title: "Feed the Belly",
      technology: "Android, Firebase, SQLite",
      description:
        "An android app focussed on acting as a food delivery and waste management system for the restaurants and ngo's so that the leftover food/groceries would ne thrown and wasted.",
      image: feedTheBelly,
      github: "https://github.com/Aakash145/Aakash145-W21G4_FeedTheBelly",
    },
    {
        title: "Health Turtle",
        technology: "HTML5, CSS3, JavaScript, Spring Boot, MySQL, OpenCV",
        description:
          "A Web Application that helps patients and doctors to interact with each other without having to book an in-person appointment.",
        image: healthTurtle,
        github: "https://github.com/Aakash145/BarberAppointmentBooking",
      },
    {
      title: "Barber Booking System",
      technology: "HTML5, CSS3, Javascript, PhP, PostgreSQL",
      description:
        "A Barber Appointment Booking System that would help barbers and customers book appointments in advance in the scenario's like Covid-19.",
      image: salon,
      github: "https://github.com/Aakash145/BarberAppointmentBooking",
    }
  ];