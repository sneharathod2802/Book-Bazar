import React, { useState } from 'react';
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import BookCard from '../components/BookCard';

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'All Categories',
    'Fiction & Literature',
    'Science & Technology',
    'Business & Finance',
    'Self-Help',
    'Academic',
    'Children\'s Books',
    'History',
    'Biography',
    'Health & Wellness'
  ];

  const books = [
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
      type: "sale" as const
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
      type: "sale" as const
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
      type: "donation" as const
    },
    {
      id: 4,
      title: "Creative Writing Guide",
      author: "Alex Thompson",
      price: 15.99,
      rating: 4.6,
      reviews: 234,
      cover: "https://images.pexels.com/photos/1904769/pexels-photo-1904769.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Writing",
      type: "sale" as const
    },
    {
      id: 5,
      title: "Data Science Fundamentals",
      author: "Dr. Lisa Park",
      price: 29.99,
      rating: 4.9,
      reviews: 567,
      cover: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Technology",
      type: "sale" as const
    },
    {
      id: 6,
      title: "Philosophy of Mind",
      author: "Robert Williams",
      price: 0,
      rating: 4.5,
      reviews: 76,
      cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      category: "Philosophy",
      type: "donation" as const
    }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesPrice = book.price >= priceRange[0] && book.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search books, authors, genres..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
              </button>
              
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
              
              <span className="text-sm text-gray-500">
                {filteredBooks.length} books found
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === 'All Categories' ? 'all' : category)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      (selectedCategory === 'all' && category === 'All Categories') ||
                      selectedCategory === category
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">Price Range</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="free-books"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setPriceRange([0, 0]);
                        } else {
                          setPriceRange([0, 100]);
                        }
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="free-books" className="ml-2 text-sm text-gray-600">
                      Free books only
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">Book Type</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-600">For Sale</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-600">Donations</span>
                </label>
              </div>
            </div>
          </div>

          {/* Books Grid */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredBooks.map((book) => (
                  <div key={book.id} className="bg-white rounded-lg shadow-sm p-6 flex gap-4">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-24 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h3>
                      <p className="text-gray-600 mb-2">{book.author}</p>
                      <p className="text-sm text-gray-500 mb-4">{book.category}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-800">
                          {book.price === 0 ? 'Free' : `$${book.price}`}
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                          {book.type === 'donation' ? 'Download' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredBooks.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-xl">No books found</p>
                  <p>Try adjusting your search criteria or filters</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;