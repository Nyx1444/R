import React from 'react';
import Navbar from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SearchTabs from './components/SearchTabs/SearchTabs';
import ServicesSection from './components/ServicesSection/ServicesSection';
import SearchLinksSection from './components/SearchLinksSection/SearchLinksSection';


import "./App.css"
import AppSection from './components/AppSection/AppSection';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <main>
      <Navbar />
      <SearchTabs />
      <ServicesSection />
      <AppSection/>
      <ContactForm/>
      <SearchLinksSection/>
      <Footer />
    </main>
  );
}

export default App;