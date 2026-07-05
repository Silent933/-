'use client';

import { Hero } from '@/components/sections/hero';
import { AboutBrief } from '@/components/sections/about-brief';
import { Stats } from '@/components/sections/stats';
import { Process } from '@/components/sections/process';
import { Services } from '@/components/sections/services';
import { Features } from '@/components/sections/features';
import { Clients } from '@/components/sections/clients';
import { Team } from '@/components/sections/team';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutBrief />
      <Stats />
      <Process />
      <Services />
      <Features />
      <Clients />
      <Team />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
