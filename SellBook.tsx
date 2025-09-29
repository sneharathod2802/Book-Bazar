import React, { useState } from 'react';
import { Upload, DollarSign, Gift, BookOpen } from 'lucide-react';

const SellBook = () => {
  const [bookType, setBookType] = useState<'sell' | 'donate'>('sell');
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    isbn: '',
    category: '',
    condition: '',
    description: '',
    price: '',
    originalPrice: '',
  });

  const categories = [
    'Fiction & Literature',
    'Science & Technology',
    'Business & Finance',
    'Self-Help',
    'Academic',
    'Children\'s Books',
    'History',
    'Biography',
    'Health & Wellness',
    'Art & Design'
  ];

  const conditions = [
    'New',
    'Like New',
    'Very Good',
    'Good',
    'Fair',
    'Poor'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Book submission:', { ...bookData, type: bookType });
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setBookData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">List Your Book</h1>
          <p className="text-xl text-gray-600">
            Share your books with the community - sell or donate to help others discover great reads
          </p>
        </div>

        {/* Book Type Selection */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Listing Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setBookType('sell')}
              className={`p-6 rounded-lg border-2 transition-colors text-left ${
                bookType === 'sell'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${bookType === 'sell' ? 'bg-blue-500' : 'bg-gray-200'}`}>
                  <DollarSign className={`h-6 w-6 ${bookType === 'sell' ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Sell Your Book</h3>
                  <p className="text-gray-600">Set a price and earn money from your books</p>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => setBookType('donate')}
              className={`p-6 rounded-lg border-2 transition-colors text-left ${
                bookType === 'donate'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${bookType === 'donate' ? 'bg-green-500' : 'bg-gray-200'}`}>
                  <Gift className={`h-6 w-6 ${bookType === 'donate' ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Donate Your Book</h3>
                  <p className="text-gray-600">Share knowledge freely with the community</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Book Details Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Book Cover Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Book Cover
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Drag and drop your book cover here, or click to browse</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                <input type="file" className="hidden" accept="image/*" />
              </div>
            </div>

            {/* Basic Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Book Title *
              </label>
              <input
                type="text"
                value={bookData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author *
              </label>
              <input
                type="text"
                value={bookData.author}
                onChange={(e) => handleInputChange('author', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ISBN (Optional)
              </label>
              <input
                type="text"
                value={bookData.isbn}
                onChange={(e) => handleInputChange('isbn', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="978-0-123456-78-9"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={bookData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Condition *
              </label>
              <select
                value={bookData.condition}
                onChange={(e) => handleInputChange('condition', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select condition</option>
                {conditions.map((condition) => (
                  <option key={condition} value={condition}>
                    {condition}
                  </option>
                ))}
              </select>
            </div>

            {bookType === 'sell' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Price ($) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={bookData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            )}

            {bookType === 'sell' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Original Price ($) (Optional)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={bookData.originalPrice}
                  onChange={(e) => handleInputChange('originalPrice', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={bookData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell potential readers about this book..."
            />
          </div>

          {/* PDF Upload */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Book PDF *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <BookOpen className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 mb-2">Upload your book PDF file</p>
              <p className="text-sm text-gray-500">PDF files only, up to 50MB</p>
              <input type="file" className="hidden" accept=".pdf" required />
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="mt-8 border-t pt-6">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" required />
              <span className="ml-2 text-sm text-gray-700">
                I agree to the Terms of Service and Privacy Policy, and confirm that I have the rights to distribute this book
              </span>
            </label>
          </div>

          <div className="flex justify-end space-x-4 mt-8">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className={`px-6 py-2 rounded-md text-white font-semibold transition-colors ${
                bookType === 'sell'
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {bookType === 'sell' ? 'List for Sale' : 'Donate Book'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellBook;