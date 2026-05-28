import React from 'react';
import { createRoot } from 'react-dom/client';
import { CoverSlide } from './components/CoverSlide';
import { sampleAgenda } from './components/sampleData';
import './styles/theme.css';
import { LoginForm, SignupForm } from './components/AuthForms';
import { WhatsAppButton } from './components/WhatsAppButton';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Banner/Cover Utama */}
    <CoverSlide
      dayLabel="Day 4 of 4"
      titleMain="Design Literacy"
      titleAccent="Review & Storybook"
      subtitle="A Storybook-ready version of your presentation design system."
      agenda={sampleAgenda}
      duration="8 Hours"
      sessions="3 + Mini-Project"
      level="Mid-Level Dev"
    />
    {/* Form Login & Signup */}
    <div className="auth-container">
      <div className="auth-forms-row">
        <LoginForm />
        <SignupForm />
      </div>
    </div>
    {/* WhatsApp Button */}
    <WhatsAppButton phoneNumber="6287720993152" message="Halo, saya ingin bertanya tentang pelatihan ini." />
  </React.StrictMode>
);