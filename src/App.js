import React from 'react';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Head from 'next/head';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import History from './components/History/History';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-172038517-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
    <>
	<Head>
		<title>Kapilan Navaratnam | Web Developer, Toronto ON</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="description" 
		content="Kapilan Navaratnam, a web developer based in Toronto, Ontario. 
		Specializes in coding HTML, CSS, JavaScript, Node, React, PHP, MySQL" />
	</Head>
    <Particles className="particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      {<Hero />}
      {<Experience />}
      {<History />}
	  {<Projects />}
	  {<Contact />}

</>
    </div>
  );
}

export default App;
