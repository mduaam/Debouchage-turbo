'use client';

import { useState, useRef } from 'react';
import { MotionConfig } from 'motion/react';
import { POSTAL_CODE_SUGGESTIONS } from '@/lib/hydroheat-data';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { EmergencyBanner } from './EmergencyBanner';
import { ServicesSection } from './ServicesSection';
import { WhyChooseSection } from './WhyChooseSection';
import { TestimonialSlider } from './TestimonialSlider';
import { FaqSection } from './FaqSection';
import { BottomCtaBanner } from './BottomCtaBanner';
import { Footer } from './Footer';
import { DetailModal, ModalState } from './DetailModal';
import { BrusselsCoverageMap } from './BrusselsCoverageMap';
import { RegionalCoverageLinks } from './RegionalCoverageLinks';

export function HydroHeatHome() {
  const [postalInput, setPostalInput] = useState('');
  const [selectedServiceName, setSelectedServiceName] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalState>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const scrollToForm = () => {
    const formEl = document.getElementById('devis-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 350);
    }
  };

  const handleSelectCommune = (commune: string) => {
    const match = POSTAL_CODE_SUGGESTIONS.find(
      (entry) => entry.commune.toLowerCase() === commune.toLowerCase()
    );
    if (match) {
      setPostalInput(`${match.code} — ${match.commune}`);
    } else if (commune !== 'Autre région en Belgique') {
      setPostalInput(commune);
    } else {
      setPostalInput('');
    }
    scrollToForm();
  };

  const handleRequestServiceQuote = (serviceTitle: string) => {
    setSelectedServiceName(serviceTitle);
    setModal(null);
    scrollToForm();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
        <Navbar onSelectCommune={handleSelectCommune} />

        <main className="flex-1">
          <HeroSection
            postalCodeValue={postalInput}
            onPostalCodeChange={setPostalInput}
            selectedServiceName={selectedServiceName}
            onClearServiceName={() => setSelectedServiceName(null)}
            nameInputRef={nameInputRef}
          />

          <EmergencyBanner onQuoteClick={scrollToForm} />

          <ServicesSection />

          <WhyChooseSection onLearnMore={() => setModal({ type: 'about' })} />

          <TestimonialSlider onQuoteClick={scrollToForm} />

          <FaqSection />

          <BrusselsCoverageMap onSelectCommune={handleSelectCommune} variant="home" />

          <RegionalCoverageLinks variant="white" />

          <BottomCtaBanner onQuoteClick={scrollToForm} />
        </main>

        <Footer
          onSelectCommune={handleSelectCommune}
          onOpenAbout={() => setModal({ type: 'about' })}
          onOpenLegal={(tab) => setModal({ type: 'legal', tab })}
        />

        <DetailModal
          modal={modal}
          onClose={() => setModal(null)}
          onRequestServiceQuote={handleRequestServiceQuote}
        />
      </div>
    </MotionConfig>
  );
}
