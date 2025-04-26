import React from 'react';
import Template from '@/pages/Programs/Template';
import AnimatedElement from '@/components/ui/animated-element';

export default function AdultKarate() {
  // Sample class schedule
  const classSchedule = [
    { day: 'Monday', time: '6:30 PM - 7:30 PM' },
    { day: 'Wednesday', time: '6:30 PM - 7:30 PM' },
    { day: 'Friday', time: '6:00 PM - 7:00 PM' },
  ];

  // Program benefits with icons
  const benefits = [
    {
      title: 'Complete Self-Defense',
      description: 'Learn practical, effective techniques for real-world scenarios and personal protection.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Physical Fitness',
      description: 'Develop strength, flexibility, coordination, and cardiovascular endurance through diverse training.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Mental Discipline',
      description: 'Cultivate focus, resilience, and mental clarity through consistent practice and challenge.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Stress Management',
      description: 'Release tension and find balance through physical activity and mindful practice.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // Belt progression
  const beltProgression = [
    {
      color: 'White',
      description: 'Fundamentals of stances, blocks, strikes, and basic movements.'
    },
    {
      color: 'Yellow',
      description: 'Building on fundamentals with more complex combinations and techniques.'
    },
    {
      color: 'Orange',
      description: 'Introduction to more advanced striking techniques and beginning self-defense applications.'
    },
    {
      color: 'Purple',
      description: 'Expanding technical repertoire with intermediate level combinations and defensive tactics.'
    },
    {
      color: 'Blue',
      description: 'Advanced combination techniques, introduction to weapons, and more complex katas.'
    },
    {
      color: 'Green',
      description: 'Refinement of techniques with greater focus on speed, power, and execution.'
    },
    {
      color: 'Brown (3 levels)',
      description: 'Mastery of core curriculum and development of personal expression within the art.'
    },
    {
      color: 'Black (multiple degrees)',
      description: 'Continued refinement and deeper understanding of the art\'s principles and applications.'
    },
  ];

  return (
    <Template title="Adult Kempo Karate">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/images/programs/adult-karate-hero.jpg"
          alt="Adult Kempo Karate Program"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Adult Kempo Karate</h1>
            <p className="text-xl text-white">For ages 14 and up</p>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-8">Program Overview</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Our Adult Kempo Karate program blends traditional martial arts wisdom with modern, practical self-defense techniques. This comprehensive system incorporates strikes, kicks, blocks, joint locks, throws, and ground defense to create well-rounded martial artists.
              </p>
              <p className="text-lg mb-6">
                Classes are designed to challenge participants physically while fostering mental discipline and emotional balance. Our supportive environment allows adults of all fitness levels to progress at their own pace while continuously improving their skills.
              </p>
              <p className="text-lg">
                Whether you're seeking self-defense capabilities, physical fitness, stress relief, or personal growth, our Adult Kempo Karate program offers a path to achieving your goals under the guidance of experienced instructors.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-12">Class Schedule</h2>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white py-3">
                <h3 className="text-xl font-semibold text-center">Adult Kempo Karate (14+)</h3>
              </div>
              <div className="p-6">
                {classSchedule.map((session, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-0">
                    <span className="font-medium">{session.day}</span>
                    <span>{session.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Belt Progression */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-12">Belt Progression</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {beltProgression.map((belt, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <div
                      className="w-16 h-16 rounded-full mr-6 flex-shrink-0"
                      style={{
                        backgroundColor:
                          belt.color.toLowerCase().includes('white') ? '#f9fafb' :
                          belt.color.toLowerCase().includes('yellow') ? '#fef3c7' :
                          belt.color.toLowerCase().includes('orange') ? '#ffba08' :
                          belt.color.toLowerCase().includes('purple') ? '#8b5cf6' :
                          belt.color.toLowerCase().includes('blue') ? '#3b82f6' :
                          belt.color.toLowerCase().includes('green') ? '#10b981' :
                          belt.color.toLowerCase().includes('brown') ? '#92400e' : '#111827',
                        border: belt.color.toLowerCase().includes('white') ? '1px solid #e5e7eb' :
                                belt.color.toLowerCase().includes('yellow') ? '1px solid #fbbf24' : 'none'
                      }}
                    ></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{belt.color} Belt</h3>
                      <p className="text-gray-600">{belt.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Class Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-8">Class Structure</h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Warm-up (10-15 minutes)</h3>
                <p>Dynamic stretching, cardiovascular conditioning, and basic movement patterns to prepare the body for training.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Basics & Technique Training (20 minutes)</h3>
                <p>Practice of fundamental strikes, blocks, kicks, and stances, with focus on proper form and execution.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Combinations & Applications (15 minutes)</h3>
                <p>Learning to combine techniques into effective sequences and practicing practical self-defense applications.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Forms (Kata) Practice (10 minutes)</h3>
                <p>Traditional patterns of movement that encode combat principles and develop focus, memory, and precision.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Conditioning & Cool-down (10 minutes)</h3>
                <p>Strength and endurance exercises followed by static stretching to improve flexibility and reduce muscle tension.</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-8">What to Expect</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="list-disc list-inside space-y-3">
                  <li>Respectful, supportive training environment suitable for all fitness levels</li>
                  <li>Progressive curriculum that builds skills systematically</li>
                  <li>Regular belt testing opportunities to measure progress</li>
                  <li>Optional competition training for those interested in tournaments</li>
                  <li>Special workshops and seminars with guest instructors</li>
                  <li>Community events and social gatherings</li>
                </ul>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Required Equipment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-8">Required Equipment</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="list-disc list-inside space-y-3">
                  <li>Karate uniform (Gi) - available for purchase at our pro shop</li>
                  <li>Belt (provided with uniform purchase)</li>
                  <li>Mouth guard (for sparring sessions)</li>
                  <li>Hand and foot protectors (for advanced training)</li>
                  <li>Water bottle</li>
                </ul>
                <p className="mt-6 text-gray-600">Beginners can wear comfortable athletic clothing for their first few classes until they purchase a uniform.</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-6">Start Your Martial Arts Journey Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join our community of dedicated martial artists and discover your potential.</p>
            <div>
              <button className="bg-white text-red-600 hover:bg-gray-100 text-lg font-semibold py-3 px-8 rounded-full">
                Try Your First Class FREE
              </button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </Template>
  );
}
