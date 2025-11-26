import React, { useState } from 'react';
import { Star, Camera } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProgressiveImage } from '../components/ProgressiveImage';

export function Reviews() {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Emma Johnson',
      rating: 5,
      date: 'November 15, 2024',
      review: 'Absolutely love this place! The atmosphere is perfect for working or catching up with friends. The Ethiopian pour-over is my go-to.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop',
      ],
    },
    {
      id: 2,
      name: 'David Park',
      rating: 5,
      date: 'November 12, 2024',
      review: 'Best coffee in the city, hands down. The baristas really know their stuff and the beans are always fresh.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1675306408031-a9aad9f23308?w=400&h=300&fit=crop',
      ],
    },
    {
      id: 3,
      name: 'Sarah Martinez',
      rating: 5,
      date: 'November 10, 2024',
      review: 'The vibe here is immaculate. Great for photos, amazing coffee, and the staff are so friendly!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1727896521514-0737f8ec7c13?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1582572426223-d152057ba012?w=400&h=300&fit=crop',
      ],
    },
    {
      id: 4,
      name: 'Michael Chen',
      rating: 4,
      date: 'November 8, 2024',
      review: 'Great coffee shop with a nice selection. Sometimes gets busy but worth the wait. Love their cold brew!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      photos: [],
    },
    {
      id: 5,
      name: 'Jessica Williams',
      rating: 5,
      date: 'November 5, 2024',
      review: 'My favorite coffee spot! The matcha latte is incredible and the space is so Instagram-worthy.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=400&h=300&fit=crop',
      ],
    },
    {
      id: 6,
      name: 'Alex Thompson',
      rating: 5,
      date: 'November 2, 2024',
      review: 'The community events here are amazing! Plus the coffee is top-notch. Highly recommend the house blend.',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1761936513644-cbc5f3207139?w=400&h=300&fit=crop',
      ],
    },
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / totalReviews) * 100,
  }));

  const filteredReviews = filter === 'all' 
    ? reviews 
    : filter === 'photos'
    ? reviews.filter(r => r.photos.length > 0)
    : reviews.filter(r => r.rating === parseInt(filter));

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <section className="bg-white py-12 sm:py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center mb-4 text-3xl sm:text-4xl lg:text-5xl text-[var(--color-brown-dark)] tracking-[-0.02em]">Customer Reviews</h1>
          
          {/* Rating Summary */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Overall Rating */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-2 text-[var(--color-brown-dark)] tracking-[-0.01em]">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.round(averageRating)
                        ? 'fill-[var(--color-burnt-orange)] text-[var(--color-burnt-orange)]'
                        : 'text-[var(--color-gray-light)]'
                    }`}
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg text-[var(--color-gray)] leading-relaxed mb-6">{totalReviews} reviews</p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map(({ rating, count, percentage }) => (
                <div key={rating} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm text-[var(--color-brown-dark)]">{rating}</span>
                    <Star className="w-4 h-4 fill-[var(--color-burnt-orange)] text-[var(--color-burnt-orange)]" />
                  </div>
                  <div className="flex-1 h-2 bg-[var(--color-gray-light)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--color-burnt-orange)]"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-[var(--color-gray)] w-8">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full px-4 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              onClick={() => setFilter('all')}
            >
              All Reviews
            </Button>
            <Button
              variant={filter === 'photos' ? 'primary' : 'secondary'}
              onClick={() => setFilter('photos')}
              className="flex items-center gap-2"
            >
              <Camera className="w-4 h-4" />
              With Photos
            </Button>
            {[5, 4].map(rating => (
              <Button
                key={rating}
                variant={filter === rating.toString() ? 'primary' : 'secondary'}
                onClick={() => setFilter(rating.toString())}
                className="flex items-center gap-1"
              >
                {rating}
                <Star className="w-4 h-4 fill-current" />
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="w-full px-4 pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 ease-in-out transform-gpu hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[var(--color-burnt-orange)]/30"
              >
                {/* User Info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <ProgressiveImage
                      src={review.image}
                      alt={`${review.name} profile`}
                      width={96}
                      height={96}
                      wrapperClassName="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-sm text-[var(--color-brown-dark)]">{review.name}</p>
                      <p className="text-xs text-[var(--color-gray)]">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-[var(--color-burnt-orange)] text-[var(--color-burnt-orange)]'
                            : 'text-[var(--color-gray-light)]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[var(--color-gray)] mb-6 leading-relaxed">{review.review}</p>

                {/* Review Photos */}
                {review.photos.length > 0 && (
                  <div className="grid grid-cols-3 gap-2">
                    {review.photos.map((photo, index) => (
                      <ProgressiveImage
                        key={index}
                        src={photo}
                        alt={`Review photo ${index + 1} from ${review.name}`}
                        width={300}
                        height={300}
                        wrapperClassName="aspect-square rounded-2xl overflow-hidden"
                        className="hover:scale-105 hover:brightness-110 cursor-pointer"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl text-[var(--color-brown-dark)] tracking-[-0.01em]">Share Your Experience</h2>
          <p className="text-base sm:text-lg text-[var(--color-gray)] mb-6 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Leave a review and share your favorite Brew Collective moments.
          </p>
          <Button size="large">Write a Review</Button>
        </div>
      </section>
    </div>
  );
}