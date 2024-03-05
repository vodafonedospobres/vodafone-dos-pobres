// Function to handle banner click and redirect to the video page
function handleBannerClick(videoUrl) {
    // Redirect to the video page using the provided video URL
    window.location.href = videoUrl;
}

var videoElement = document.getElementById('stream');

  videoElement.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

// Function to dynamically create movie banners
function createMovieBanners() {
    const movieContainer = document.getElementById('movie-container');

    movies.forEach((movie) => {
        const movieBanner = document.createElement('button');
        movieBanner.classList.add('movie-banner');
        movieBanner.addEventListener('click', () => handleBannerClick(movie.videoUrl));

        const titleOverlay = document.createElement('div');
        titleOverlay.classList.add('title-overlay');
        titleOverlay.textContent = movie.title;

        movieBanner.appendChild(titleOverlay);
        movieContainer.appendChild(movieBanner);
    });
}

// Execute the function when the page loads
document.addEventListener('DOMContentLoaded', createMovieBanners);
