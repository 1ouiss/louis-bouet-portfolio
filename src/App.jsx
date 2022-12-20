import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

//layouts
import MainLayout from './layouts/MainLayout';
import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import NotFound from './pages/NotFound';
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});


function App() {
  const [projects] = useState([
      {
          id: 1,
          title: "Memphis Design",
          description: "Lors d'un projet de fin d'année, nous devions créer une interface en respectant le design Memphis des années 80. Cette application devait nous permettre de voter les objets de nos choix. Nous avons choisis les musiques des années 80. Suite à la partie design, nous devions développer l'application en JAVASCRIPT.",
          image: "../images/memphis-design.png",
          link: "https://github.com/1ouiss/memphis-design-project"
      },
      {
          id: 2,
          title: "Pointer Class",
          description: "Lors d'un projet, nous devions créer une application en utilisant le framework Angular en TYPESCRIPT et NODEJS. Nous avons décidé de créer une application permettant de faire l'appel des élèves plus simplement. Les élèves s'identifient avec leur classe, leur nom ainsi que leur prénom, ils rentrent alors dans uns salle virtuelle. Le professeur se connecte sur son espace et peut donc télécharger directement en PDF la feuille avec les élèves présents.",
          image: "../images/pointerClass.webp",
          link: ""
      },
      {
          id: 3,
          title: "Halto Game",
          description: "Lors du Digital Event (projet réunissant l'ESD et l'ESP pendant 2 semaines) j'étais dans le WorkShop WebApp. L'objectif était de créer un jeu autour du thème de la « Pause ». Nous avons donc créer un jeu type Space Invider en 1 contre 1. Nous avons utilisé le Framework JAVASCRIPT REACT, NODEJS ainsi que FIREBASE.",
          image: "../images/halto.png",
          link: "https://haltogame.com"
      },
      {
          id: 3,
          title: "Landing Page - Halto Game",
          description: "Lors du Digital Event (projet réunissant l'ESD et l'ESP pendant 2 semaines) j'étais dans le WorkShop WebApp. J'ai pu créer la Landing page permettant de présenter Halto Game",
          image: "../images/halto-landing.png",
          link: "https://discover.haltogame.com"
      }
  ])
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home projects={projects}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio projects={projects}/>} />
          <Route path="/portfolio/:id" element={<Portfolio projects={projects}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
