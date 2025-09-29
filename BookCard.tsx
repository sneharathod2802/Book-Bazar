import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Download } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  cover: string;
  category: string;
  type: 'sale' | 'donation';
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-colors">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        {book.type === 'donation' && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            FREE
          </div>
        )}
        {book.originalPrice && book.originalPrice > book.price && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            SALE
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {book.category}
          </span>
        </div>
        
        <Link to={`/reader/${book.id}`}>
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {book.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-3">{book.author}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {book.rating} ({book.reviews} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {book.price === 0 ? (
              <span className="text-2xl font-bold text-green-600">Free</span>
            ) : (
              <>
                <span className="text-2xl font-bold text-gray-800">${book.price}</span>
                {book.originalPrice && book.originalPrice > book.price && (
                  <span className="text-sm text-gray-500 line-through">${book.originalPrice}</span>
                )}
              </>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {book.type === 'donation' ? (
              <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors">
                <Download className="h-4 w-4" />
              </button>
            ) : (
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                <ShoppingCart className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;