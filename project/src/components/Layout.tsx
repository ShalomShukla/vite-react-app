import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">ModernApp</span>
              <div className="hidden md:flex ml-10 space-x-8">
                <a href="#features" className="text-gray-500 hover:text-gray-900">Features</a>
                <a href="#docs" className="text-gray-500 hover:text-gray-900">Documentation</a>
                <a href="#about" className="text-gray-500 hover:text-gray-900">About</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-center text-gray-500">© 2024 ModernApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}