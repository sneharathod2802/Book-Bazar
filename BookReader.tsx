import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Download, Bookmark, Share2, Settings } from 'lucide-react';

const BookReader = () => {
  const { bookId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [showBookmarks, setShowBookmarks] = useState(false);

  // Mock book data
  const book = {
    id: parseInt(bookId || '1'),
    title: "The Digital Revolution",
    author: "Sarah Johnson",
    totalPages: 248,
    cover: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  };

  const bookmarks = [
    { page: 15, title: "Chapter 1: Introduction", timestamp: "2025-01-15" },
    { page: 42, title: "Key Concepts", timestamp: "2025-01-15" },
    { page: 78, title: "Case Studies", timestamp: "2025-01-16" },
  ];

  const handlePreviousPage = () => {
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(Math.min(book.totalPages, currentPage + 1));
  };

  const handleZoomIn = () => {
    setZoomLevel(Math.min(200, zoomLevel + 25));
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(50, zoomLevel - 25));
  };

  const handleRotate = () => {
    setRotation((rotation + 90) % 360);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/marketplace"
                className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-lg font-semibold">{book.title}</h1>
                <p className="text-sm text-gray-400">{book.author}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                Page {currentPage} of {book.totalPages}
              </div>
              <button
                onClick={() => setShowBookmarks(!showBookmarks)}
                className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
              >
                <Bookmark className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-full">
        {/* Bookmarks Sidebar */}
        {showBookmarks && (
          <div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
            <h3 className="text-lg font-semibold mb-4">Bookmarks</h3>
            <div className="space-y-3">
              {bookmarks.map((bookmark, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentPage(bookmark.page)}
                  className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="font-medium">Page {bookmark.page}</div>
                  <div className="text-sm text-gray-300">{bookmark.title}</div>
                  <div className="text-xs text-gray-400">{bookmark.timestamp}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Reading Area */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="bg-gray-800 border-b border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="p-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === book.totalPages}
                  className="p-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="w-px h-6 bg-gray-600"></div>
                <button
                  onClick={handleZoomOut}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <span className="text-sm text-gray-300">{zoomLevel}%</span>
                <button
                  onClick={handleZoomIn}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button
                  onClick={handleRotate}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                >
                  <RotateCw className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  min="1"
                  max={book.totalPages}
                  value={currentPage}
                  onChange={(e) => setCurrentPage(Math.min(Math.max(1, parseInt(e.target.value) || 1), book.totalPages))}
                  className="w-16 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-center text-white"
                />
                <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
            <div
              className="bg-white shadow-2xl max-w-4xl mx-auto"
              style={{
                transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
                transformOrigin: 'center',
                transition: 'transform 0.3s ease'
              }}
            >
              {/* Mock PDF Page */}
              <div className="w-full h-[800px] p-12 bg-white text-gray-800">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-8">Chapter {Math.ceil(currentPage / 10)}: Digital Transformation</h2>
                  
                  <div className="space-y-4 text-justify leading-relaxed">
                    <p>
                      The digital revolution has fundamentally transformed the way we live, work, and interact with one another. 
                      This transformation extends far beyond simple technological advancement; it represents a paradigmatic shift 
                      in how information is created, processed, stored, and shared across global networks.
                    </p>
                    
                    <p>
                      In the early stages of this revolution, we witnessed the emergence of personal computing systems that 
                      brought computational power directly to individual users. This democratization of technology laid the 
                      groundwork for more sophisticated developments that would follow in subsequent decades.
                    </p>
                    
                    <p>
                      The advent of the internet marked a crucial turning point, creating an interconnected web of information 
                      and communication channels that transcended geographical boundaries. This global network enabled 
                      unprecedented collaboration and knowledge sharing among individuals and organizations worldwide.
                    </p>
                    
                    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-600 my-6">
                      "The digital age has not just changed how we access information—it has fundamentally altered how we 
                      think about knowledge, creativity, and human connection." - Technology Researcher
                    </blockquote>
                    
                    <p>
                      Mobile technology further accelerated this transformation by putting powerful computing capabilities 
                      directly into the hands of billions of users. Smartphones and tablets became ubiquitous tools for 
                      communication, entertainment, commerce, and learning.
                    </p>
                    
                    <p>
                      Today, artificial intelligence and machine learning are driving the next phase of digital evolution, 
                      creating systems that can learn, adapt, and make decisions with increasing sophistication and autonomy.
                    </p>
                  </div>
                  
                  <div className="mt-12 pt-4 border-t border-gray-300 text-center text-sm text-gray-500">
                    Page {currentPage} of {book.totalPages}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page Navigation */}
          <div className="bg-gray-800 border-t border-gray-700 p-4">
            <div className="flex items-center justify-center">
              <input
                type="range"
                min="1"
                max={book.totalPages}
                value={currentPage}
                onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReader;