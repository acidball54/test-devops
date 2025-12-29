import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-blue-100/50 bg-white/90 backdrop-blur-lg shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YourBrand
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:gap-10">
              <a href="#features" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600">
                Features
              </a>
              <a href="#about" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600">
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600">
                Contact
              </a>
            </div>
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Column - Text */}
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm">
                <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                <span className="text-blue-700 font-medium">New features available now</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                Build Something
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Amazing Today
                </span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Transform your ideas into reality with our powerful platform. Join thousands of creators who are already building the future.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105">
                  Get Started
                </button>
                <button className="rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-blue-500 hover:text-blue-600">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column - Image/Visual */}
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/800/600?random=1"
                  alt="Modern workspace with technology"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30"></div>
                {/* Decorative shapes */}
                <div className="absolute inset-0">
                  <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/20 blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/20 blur-3xl"></div>
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-400 to-blue-500"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Fast Performance</div>
                    <div className="text-sm text-gray-500">99.9% uptime</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 rounded-2xl bg-white p-4 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Secure</div>
                    <div className="text-sm text-gray-500">Enterprise grade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32 bg-white/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Powerful features to help you build, deploy, and scale your projects faster.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Lightning Fast",
                description: "Built for performance with optimized architecture and modern technologies.",
                gradient: "from-yellow-400 to-orange-500",
                icon: "⚡",
              },
              {
                title: "Secure by Default",
                description: "Enterprise-grade security features to keep your data safe and protected.",
                gradient: "from-green-400 to-blue-500",
                icon: "🔒",
              },
              {
                title: "Easy to Use",
                description: "Intuitive interface designed for both beginners and experts alike.",
                gradient: "from-purple-400 to-pink-500",
                icon: "✨",
              },
              {
                title: "Scalable",
                description: "Grow from zero to millions of users without breaking a sweat.",
                gradient: "from-blue-400 to-cyan-500",
                icon: "📈",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance from our expert team whenever you need it.",
                gradient: "from-indigo-400 to-purple-500",
                icon: "💬",
              },
              {
                title: "Open Source",
                description: "Transparent, community-driven development you can trust and contribute to.",
                gradient: "from-pink-400 to-red-500",
                icon: "🌐",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg border border-gray-100 transition-all hover:shadow-2xl hover:scale-105"
              >
                <div className={`mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery/Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              See it in action
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Beautiful design meets powerful functionality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 10, title: 'Team Collaboration' },
              { id: 20, title: 'Code Development' },
              { id: 30, title: 'Data Analytics' },
              { id: 40, title: 'Global Connection' },
              { id: 50, title: 'Business Growth' },
              { id: 60, title: 'Innovation' },
            ].map((item) => (
              <div
                key={item.id}
                className="group relative h-64 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105"
              >
                <Image
                  src={`https://picsum.photos/600/400?random=${item.id}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 sm:p-16 text-center shadow-2xl">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to get started?
              </h2>
              <p className="mt-6 text-xl leading-8 text-white/90">
                Join thousands of users who are already building amazing things. Start your journey today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105">
                  Start Free Trial
                </button>
                <button className="rounded-xl border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="text-xl font-bold text-white">
                  YourBrand
                </div>
              </div>
              <p className="text-gray-400">
                Building the future, one project at a time.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-400">
              © 2024 YourBrand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
