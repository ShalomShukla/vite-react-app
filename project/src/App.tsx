import React from 'react';
import { Layout } from './components/Layout';
import { Card } from './components/Card';
import { ArrowRight, Code, Palette, Zap, Shield, Users, Globe } from 'lucide-react';

function App() {
  const features = [
    {
      title: 'Modern Tech Stack',
      description: 'Built with React 18, TypeScript, and Tailwind CSS. Leverage the latest features like concurrent rendering and automatic batching.',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
      link: 'https://react.dev/blog/2022/03/29/react-v18'
    },
    {
      title: 'Type-Safe Development',
      description: 'Full TypeScript support with strict type checking. Catch errors early and improve code maintainability.',
      imageUrl: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=2072',
      link: 'https://www.typescriptlang.org/docs/'
    },
    {
      title: 'Performance Optimized',
      description: 'Built-in performance optimizations with Vite. Enjoy instant HMR and optimized production builds.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2072',
      link: 'https://vitejs.dev/guide/features.html'
    },
  ];

  return (
    <Layout>
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Modern Web Development Simplified
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A production-ready template built with modern technologies and best practices.
            Start building your next big project with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose This Template?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <Code className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Clean Code Architecture</h3>
                <p className="text-gray-600">Well-organized project structure following best practices and design patterns.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Palette className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Modern UI Design</h3>
                <p className="text-gray-600">Beautiful, responsive layouts powered by Tailwind CSS utility classes.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Zap className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Optimized for performance with Vite's build tooling and code splitting.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Security First</h3>
                <p className="text-gray-600">Built with security best practices and regular dependency updates.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Developer Experience</h3>
                <p className="text-gray-600">Great DX with TypeScript, ESLint, and hot module replacement.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Globe className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Production Ready</h3>
                <p className="text-gray-600">Deploy with confidence using optimized builds and best practices.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get started with this template and build your next great project with modern tools and best practices.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-white rounded-md text-base font-medium hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default App;