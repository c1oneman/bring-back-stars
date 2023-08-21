function isAmazonPage() {
  return window.location.hostname.includes('amazon');
}

function getStarRatingString(rating) {
  switch (true) {
    case rating === 5:
      return 'a-star-5';
    case rating >= 4.5:
      return 'a-star-4-5';
    case rating >= 4:
      return 'a-star-4';
    case rating >= 3.5:
      return 'a-star-3-5';
    case rating >= 3:
      return 'a-star-3';
    case rating >= 2.5:
      return 'a-star-2-5';
    case rating >= 2:
      return 'a-star-2';
    case rating >= 1.5:
      return 'a-star-1-5';
    case rating >= 1:
      return 'a-star-1';
    case rating >= 0.5:
      return 'a-star-0-5';
    case rating >= 0:
      return 'a-star-0';
    default:
      return 'a-star-0';
  }
}

function removeReviewStars() {
  const reviewStars = document.querySelectorAll('.puis-review-star-single');
  reviewStars.forEach((reviewStar) => {
    const rating =
      reviewStar.parentElement.parentElement.parentElement.getAttribute(
        'aria-label'
      );
    const ratingNumber = parseFloat(rating.split(' ')[0]);
    const starRatingString = getStarRatingString(ratingNumber);
    reviewStar.classList = '';
    reviewStar.classList.add('a-icon', 'a-icon-star', starRatingString);
  });
}

if (isAmazonPage()) {
  removeReviewStars();
}
