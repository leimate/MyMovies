const movies = [
    {
        title: "Movie 1",
        image: "link_to_image_1.jpg", // Replace with your actual image link
        video: "https://drive.google.com/file/d/1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0/preview" // Google Drive preview link
    },
    // Add more movie objects as needed
];

const movieContainer = document.getElementById('movie-container');

movies.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.className = 'movie';

    const movieImage = document.createElement('img');
    movieImage.src = movie.image;

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;

    const watchButton = document.createElement('button');
    watchButton.textContent = "Watch Video";
    watchButton.onclick = () => {
        // Redirect to video.html with video link as a query parameter
        window.location.href = `video.html?video=${encodeURIComponent(movie.video)}`;
    };

    movieDiv.appendChild(movieImage);
    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(watchButton);
    movieContainer.appendChild(movieDiv);
});
