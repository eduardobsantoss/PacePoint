import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import EventsPreview from '../components/home/EventsPreview';
import FeaturesSection from '../components/home/FeaturesSection';
import CTASection from '../components/home/CTASection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <EventsPreview />
            <FeaturesSection />
            <CTASection />
            <ContactSection />
        </>
    );
}