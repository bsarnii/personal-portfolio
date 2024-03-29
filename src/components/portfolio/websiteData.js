import IMG1 from "../../assets/portfolio-1.png"
import IMG2 from "../../assets/portfolio-2.png"
import IMG3 from "../../assets/portfolio-3.png"
import IMG4 from "../../assets/portfolio-4.png"
import IMG5 from "../../assets/portfolio-5.png"

export const data = [
    {
        id: 1,
        image: IMG1,
        title: "Easybank",
        tech: "HTML, CSS, TypeScript, Angular, ngrx, Adzuna API",
        github: "https://github.com/bsarnii/easybank",
        demo: "https://beamish-duckanoo-11e2a8.netlify.app/",
        description: "Das Easybank-Projekt ist ein Beispiel für eine gut strukturierte und reaktive Angular-Anwendung, die mithilfe von Angular Router und ngrx eine intuitive Navigation und eine zuverlässige Datenflussverwaltung ermöglicht. Es verwendet Angular Reactive Forms, um ein einfaches und leistungsstarkes Formularsystem zu implementieren."
    },
    {
        id: 2,
        image: IMG2,
        title: "Task management app",
        tech: "HTML, SCSS, TypeScript, Angular",
        github: "https://github.com/bsarnii/kanban-task-manager",
        demo: "https://famous-sopapillas-6eda62.netlify.app/",
        description: "Diese Anwendung ermöglicht es Benutzern, verschiedene Tafeln und Aufgaben zu erstellen, zu bearbeiten oder zu löschen. Man kann die Aufgaben mit Drag & Drop funktion zwischen die Spalten verschieben. Eine weitere Funktion meine Anwendung ist die Verwendung des Browser localstorage, um alle veränderten Daten zu speichern. Durch diese Funktion können Benutzer sicher sein, dass ihre Daten auch dann nicht verloren gehen, wenn den Browser schließen. Es gibt auch die Möglichkeit, das Farbthema der gesamten App zu ändern."
    },
    {
        id: 3,
        image: IMG3,
        title: "Interactive comment section",
        tech: "HTML, SCSS, TypeScript, React, redux-toolkit, Firebase",
        github: "https://github.com/bsarnii/interactive-comment-section",
        demo: "https://comment-section-812cd.web.app/",
        description: "Das Projekt ist eine React-Webanwendung, die mit Typescript entwickelt wurde und Firebase als Backend nutzt. Es ermöglicht den Benutzern, sich mit Google-Authentifizierung anzumelden und neue Kommentare zu schreiben, zu bearbeiten, zu löschen oder auf andere Kommentare zu antworten."
    },
    {
        id: 4,
        image: IMG4,
        title: "Weather app",
        tech: "HTML, CSS, JavaScript, React, Weather API",
        github: "https://github.com/bsarnii/weather-app",
        demo: "https://classy-frangollo-0682eb.netlify.app/",
        description: "Das Weather App ist eine React-Webanwendung, die es dem Benutzer ermöglicht, die Wetterdaten von verschiedenen Städten abzurufen. Durch die Verbindung mit einer Wetter-API können die aktuellen Wetterbedingungen für jede Stadt angezeigt werden, einschließlich der Temperatur sowie der Vorhersage für die kommenden Tage."
    },
    {
        id: 5,
        image: IMG5,
        title: "IP-Adresse / Domain finder",
        tech: "HTML, CSS, JavaScript, React, IP Geolocation API, react-leaflet", 
        github: "https://github.com/bsarnii/ip-adress-tracker",
        demo: "https://magical-donut-5d1284.netlify.app",
        description: 'Mit diesem Tool können Benutzer schnell und einfach die geografische Lage eines Servers oder einer Website bestimmen. Das Tool nutzt "IP Geolocation API" zusammen mit "react-leaflet", um die entsprechenden geografischen Koordinaten zu ermitteln und die Ergebnisse auf einer Karte anzuzeigen.'
    },

]