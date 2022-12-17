import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

//layouts
import MainLayout from './layouts/MainLayout';
import { useState } from 'react';


function App() {
  const [projects, setProjects] = useState([
      {
          id: 1,
          title: "Project 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
          image: "https://picsum.photos/200/300"
      },
      {
          id: 2,
          title: "Project 2",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
          image: "https://picsum.photos/200/300"
      },
      {
          id: 3,
          title: "Project 3",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
          image: "https://picsum.photos/200/300"
      }
  ])
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio projects={projects}/>} />
          <Route path="/portfolio/:id" element={<Portfolio projects={projects}/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
