import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Heart, Sparkles, TrendingUp, Shield, Star, ArrowRight } from 'lucide-react';
import BookCard from '../components/BookCard';

const HomePage = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "The Digital Revolution",
      author: "Sarah Johnson",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviews: 342,
      cover: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Technology",
      type: "sale"
    },
    {
      id: 2,
      title: "Mindful Leadership",
      author: "Dr. Michael Chen",
      price: 19.99,
      rating: 4.9,
      reviews: 128,
      cover: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Business",
      type: "sale"
    },
    {
      id: 3,
      title: "Climate Solutions",
      author: "Emma Rodriguez",
      price: 0,
      rating: 4.7,
      reviews: 89,
      cover: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Science",
      type: "donation"
    },
  ];

  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Books Available", value: "100K+", icon: BookOpen },
    { label: "Books Donated", value: "25K+", icon: Heart },
    { label: "AI Recommendations", value: "1M+", icon: Sparkles },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Discover Your Next
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 block">
                  Great Read
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join the ultimate digital book marketplace. Buy, sell, donate, and discover books with AI-powered recommendations tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/marketplace"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Browse Books</span>
                </Link>
                <Link
                  to="/recommendations"
                  className="bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-blue-900 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Sparkles className="h-5 w-5" />
                  <span>Get AI Recommendations</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {featuredBooks.slice(0, 4).map((book, index) => (
                    <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                      <div className="w-16 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-md mx-auto mb-2"></div>
                      <p className="text-sm font-medium truncate">{book.title}</p>
                      <p className="text-xs text-blue-200">{book.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{value}</div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Books</h2>
            <p className="text-xl text-gray-600">Discover trending titles and hidden gems</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/marketplace"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>View All Books</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Book Bazar?</h2>
            <p className="text-xl text-gray-600">Everything you need for your digital reading journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Recommendations</h3>
              <p className="text-gray-600">Get personalized book suggestions based on your reading history and preferences.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Buy & Sell</h3>
              <p className="text-gray-600">Join our thriving marketplace to buy from others or sell your own books.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Donate Books</h3>
              <p className="text-gray-600">Share knowledge by donating books to our community library.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Reading Journey?</h2>
          <p className="text-xl mb-8">Join thousands of book lovers in our growing community</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/sell"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;