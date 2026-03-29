// src/app/page.tsx
"use client";
import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BrandsSection from "@/components/sections/BrandsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import BookingModal from "@/components/shared/BookingModal";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <HeroSection onBookService={openModal} />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer onBookService={openModal} />
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
