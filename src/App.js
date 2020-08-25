import React, { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

// let theme = localStorage.getItem('theme');

// if (theme === null) {
//     setTheme('light');
// }else {
//     setTheme(theme)
// }

// function setTheme(mode) {
//     switch (mode) {
//         case 'light':
//             document.getElementById('theme-style').href = 'App.css'
//             break;
//         case 'blue':
//             document.getElementById('theme-style').href = 'style_1.css'
//             break;
//         case 'green':
//             document.getElementById('theme-style').href = 'style_2.css'
//             break;
//         case 'purple':
//             document.getElementById('theme-style').href = 'style_3.css'
//             break;

//         default:
//             document.getElementById('theme-style').href = 'default.css'
//             break;
//     }

//     localStorage.setItem('theme', mode)

// }
function App() {
    return (
        <>
            <Header />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default App
