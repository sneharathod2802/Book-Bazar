import React, { useState } from 'react';
import { User, BookOpen, DollarSign, Gift, Star, Edit, Settings, TrendingUp } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'selling' | 'purchasing' | 'donations'>('overview');

  const userStats = [
    { label: "Books Sold", value: "23", icon: DollarSign, color: "text-green-600 bg-green-50" },
    { label: "Books Purchased", value: "47", icon: BookOpen, color: "text-blue-600 bg-blue-50" },
    { label: "Books Donated", value: "12", icon: Gift, color: "text-purple-600 bg-purple-50" },
    { label: "Average Rating", value: "4.8", icon: Star, color: "text-yellow-600 bg-yellow-50" }
  ];

  const recentActivity = [
    { type: "purchase", title: "The Digital Revolution", author: "Sarah Johnson", date: "2025-01-14", amount: "$24.99" },
    { type: "sale", title: "Machine Learning Guide", author: "You", date: "2025-01-12", amount: "$32.99" },
    { type: "donation", title: "Open Source Philosophy", author: "You", date: "2025-01-10", amount: "Free" },
  ];

  const listedBooks = [
    { id: 1, title: "Advanced JavaScript", status: "active", price: "$28.99", views: 234, likes: 12 },
    { id: 2, title: "React Development", status: "sold", price: "$35.99", views: 456, likes: 28 },
    { id: 3, title: "Web Security Guide", status: "pending", price: "$24.99", views: 89, likes: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                <button className="absolute -bottom-1 -right-1 bg-white p-2 rounded-full shadow-md border border-gray-200 hover:bg-gray-50">
                  <Edit className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
                <p className="text-gray-600">Member since January 2024</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">4.8 (156 reviews)</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Verified Seller</span>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors">
                <Settings className="h-4 w-4" />
                <span>Account Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {userStats.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800">{value}</p>
                  <p className="text-sm text-gray-600">{label}</p>
                </div>
                <div className={`p-3 rounded-full ${color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'selling', label: 'My Listings' },
                { id: 'purchasing', label: 'Purchases' },
                { id: 'donations', label: 'Donations' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                    activeTab === id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-full ${
                            activity.type === 'purchase' ? 'bg-blue-100' :
                            activity.type === 'sale' ? 'bg-green-100' : 'bg-purple-100'
                          }`}>
                            {activity.type === 'purchase' && <BookOpen className="h-4 w-4 text-blue-600" />}
                            {activity.type === 'sale' && <DollarSign className="h-4 w-4 text-green-600" />}
                            {activity.type === 'donation' && <Gift className="h-4 w-4 text-purple-600" />}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{activity.title}</p>
                            <p className="text-sm text-gray-600">by {activity.author}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800">{activity.amount}</p>
                          <p className="text-sm text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Reading Goals</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">2025 Reading Challenge</h3>
                      <span className="text-2xl font-bold text-blue-600">47/50</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <p className="text-gray-700">You're almost there! Just 3 more books to reach your goal.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'selling' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">My Book Listings</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Add New Book
                  </button>
                </div>
                <div className="space-y-4">
                  {listedBooks.map((book) => (
                    <div key={book.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded"></div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{book.title}</h3>
                          <p className="text-sm text-gray-600">Price: {book.price}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-xs text-gray-500">{book.views} views</span>
                            <span className="text-xs text-gray-500">{book.likes} likes</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          book.status === 'active' ? 'bg-green-100 text-green-800' :
                          book.status === 'sold' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                        </span>
                        <button className="text-blue-600 hover:text-blue-700">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'purchasing' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Purchase History</h2>
                <div className="space-y-4">
                  {recentActivity.filter(a => a.type === 'purchase').map((purchase, index) => (
                    <div key={index} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded"></div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{purchase.title}</h3>
                          <p className="text-sm text-gray-600">by {purchase.author}</p>
                          <p className="text-xs text-gray-500">{purchase.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-semibold text-gray-800">{purchase.amount}</span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                          Read Again
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'donations' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Books Donated</h2>
                <div className="space-y-4">
                  {recentActivity.filter(a => a.type === 'donation').map((donation, index) => (
                    <div key={index} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded"></div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{donation.title}</h3>
                          <p className="text-sm text-gray-600">Donated on {donation.date}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-green-600">Helping the community</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">142</div>
                        <div className="text-xs text-gray-500">Downloads</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;