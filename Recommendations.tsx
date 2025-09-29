import React, { useState } from 'react';
import { Sparkles, TrendingUp, Heart, Clock, Star } from 'lucide-react';
import BookCard from '../components/BookCard';

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState<'ai' | 'trending' | 'favorites'>('ai');

  const aiRecommendations = [
    {
      id: 7,
      title: "Machine Learning Mastery",
      author: "Dr. Amanda Foster",
      price: 32.99,
      rating: 4.9,
      reviews: 423,
      cover: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Technology",
      type: "sale" as const,
      matchReason: "Based on your interest in 'The Digital Revolution'"
    },
    {
      id: 8,
      title: "Sustainable Future",
      author: "Green Solutions Team",
      price: 0,
      rating: 4.6,
      reviews: 156,
      cover: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Environment",
      type: "donation" as const,
      matchReason: "Similar to your donated book 'Climate Solutions'"
    },
    {
      id: 9,
      title: "Leadership Psychology",
      author: "Dr. Robert Kim",
      price: 27.99,
      rating: 4.8,
      reviews: 289,
      cover: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Business",
      type: "sale" as const,
      matchReason: "Complements your reading of 'Mindful Leadership'"
    }
  ];

  const trendingBooks = [
    {
      id: 10,
      title: "Quantum Computing Guide",
      author: "Physics Collective",
      price: 29.99,
      rating: 4.7,
      reviews: 234,
      cover: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Science",
      type: "sale" as const
    },
    {
      id: 11,
      title: "Creative Design Principles",
      author: "Art Academy",
      price: 0,
      rating: 4.5,
      reviews: 167,
      cover: "https://images.pexels.com/photos/1904769/pexels-photo-1904769.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Design",
      type: "donation" as const
    }
  ];

  const favoriteGenres = [
    {
      id: 12,
      title: "Philosophy of Ethics",
      author: "Dr. Maria Santos",
      price: 22.99,
      rating: 4.8,
      reviews: 198,
      cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Philosophy",
      type: "sale" as const
    }
  ];

  const tabs = [
    { id: 'ai', label: 'AI Recommendations', icon: Sparkles, books: aiRecommendations },
    { id: 'trending', label: 'Trending Now', icon: TrendingUp, books: trendingBooks },
    { id: 'favorites', label: 'Your Favorites', icon: Heart, books: favoriteGenres }
  ];

  const readingInsights = [
    { label: "Books Read This Month", value: "12", icon: Clock },
    { label: "Favorite Genre", value: "Technology", icon: Star },
    { label: "Reading Streak", value: "15 days", icon: TrendingUp },
    { label: "Books Saved", value: "8", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Sparkles className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Recommendations</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover your next favorite book with our intelligent recommendation system that learns from your reading habits and preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Reading Insights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {readingInsights.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        {/* Recommendation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                    activeTab === id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'ai' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Personalized for You</h2>
                  <p className="text-gray-600 mb-6">
                    Based on your reading history, preferences, and ratings, we've found these books that match your interests.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aiRecommendations.map((book) => (
                    <div key={book.id} className="relative">
                      <BookCard book={book} />
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-2 text-sm text-blue-700">
                          <Sparkles className="h-4 w-4" />
                          <span>{book.matchReason}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'trending' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Trending This Week</h2>
                  <p className="text-gray-600 mb-6">
                    Discover what other readers are talking about right now.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trendingBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">More Like Your Favorites</h2>
                  <p className="text-gray-600 mb-6">
                    Similar books to the ones you've loved and rated highly.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteGenres.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommendation Settings */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Improve Your Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Preferred Genres</h4>
              <div className="flex flex-wrap gap-2">
                {['Technology', 'Business', 'Science', 'Philosophy', 'Fiction', 'Self-Help'].map((genre) => (
                  <button
                    key={genre}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Reading Goals</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-gray-700">Include free books</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-gray-700">Focus on trending topics</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-gray-700">Discover new authors</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;