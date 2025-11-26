import React from 'react';
import { Coffee, Heart, Users, Leaf } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProgressiveImage } from '../components/ProgressiveImage';

export function OurStory() {
  const timeline = [
    { year: '2019', title: 'The Beginning', description: 'Started as a small pop-up at local farmers markets' },
    { year: '2020', title: 'First Shop Opens', description: 'Opened our first brick-and-mortar location downtown' },
    { year: '2021', title: 'Direct Trade', description: 'Established direct relationships with coffee farmers' },
    { year: '2022', title: 'Community Hub', description: 'Launched community events and workshops' },
    { year: '2023', title: 'Roastery Launch', description: 'Opened our own roasting facility' },
    { year: '2024', title: 'Growing Together', description: 'Expanded to three locations serving thousands daily' },
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Founder & Head Roaster',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Jordan Kim',
      role: 'Lead Barista',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Taylor Brooks',
      role: 'Coffee Buyer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Casey Martinez',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
  ];

  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source only the finest beans and never compromise on quality',
    },
    {
      icon: Heart,
      title: 'Community Focused',
      description: 'Building meaningful connections one cup at a time',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to ethical sourcing and eco-friendly practices',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'A welcoming space for everyone in our community',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ProgressiveImage
            src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwcGVvcGxlfGVufDF8fHx8MTc2NDAwNjM3OHww&ixlib=rb-4.1.0&q=80&w=1920&utm_source=figma&utm_medium=referral"
            alt="Brew Collective team collaborating in the café"
            width={1920}
            height={1080}
            priority
            wrapperClassName="w-full h-full"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brown-dark)]/70 to-[var(--color-brown-dark)]/40" />
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-0.02em]">Our Story</h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
            A journey fueled by passion, community, and exceptional coffee
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-16 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl text-[var(--color-brown-dark)] tracking-[-0.01em]">Our Mission</h2>
          <p className="text-base sm:text-lg text-[var(--color-gray)] mb-6 leading-relaxed">
            At Brew Collective, we believe coffee is more than just a drink—it's a catalyst for 
            connection. We're dedicated to creating a space where quality meets community, where 
            every cup tells a story, and where everyone feels at home. From farm to cup, we're 
            committed to sustainability, ethical practices, and supporting the people who make it all possible.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 px-4 overflow-visible">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16 text-2xl sm:text-3xl lg:text-4xl text-[var(--color-brown-dark)] tracking-[-0.01em]">Our Journey</h2>
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div
                key={index}
                className="text-center"
              >
                <span className="inline-block bg-[var(--color-burnt-orange)] text-white px-4 py-2 rounded-full mb-3 text-sm sm:text-base">
                  {event.year}
                </span>
                <h3 className="mb-3 text-xl sm:text-2xl text-[var(--color-brown-dark)]">{event.title}</h3>
                <p className="text-base sm:text-lg text-[var(--color-gray)] max-w-2xl mx-auto mb-6 leading-relaxed px-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16 text-2xl sm:text-3xl lg:text-4xl text-[var(--color-brown-dark)] tracking-[-0.01em]">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center bg-white">
                  <div className="w-16 h-16 bg-[var(--color-burnt-orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="mb-3 text-[var(--color-brown-dark)]">{value.title}</h4>
                  <p className="text-sm text-[var(--color-gray)] leading-relaxed mb-6">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 px-4 bg-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-4 text-2xl sm:text-3xl lg:text-4xl text-[var(--color-brown-dark)] tracking-[-0.01em]">Meet the Team</h2>
          <p className="text-center text-base sm:text-lg text-[var(--color-gray)] mb-6 max-w-2xl mx-auto leading-relaxed">
            The passionate people behind every cup
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 ease-in-out transform-gpu hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[var(--color-burnt-orange)]/30"
              >
                <div className="mb-4 overflow-hidden rounded-3xl shadow-lg">
                  <ProgressiveImage
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    width={400}
                    height={400}
                    className="group-hover:scale-105 group-hover:brightness-110"
                  />
                </div>
                <h4 className="mb-1 text-[var(--color-brown-dark)]">{member.name}</h4>
                <p className="text-sm text-[var(--color-sage)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-brown-dark)] text-white py-16 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl text-white tracking-[-0.01em]">Join Our Community</h2>
          <p className="text-white/90 mb-6 text-base sm:text-lg leading-relaxed">
            Visit us in-store, follow our journey on social media, or sign up for our newsletter 
            to stay connected with the Brew Collective family.
          </p>
          <Button size="large">Get In Touch</Button>
        </div>
      </section>
    </div>
  );
}