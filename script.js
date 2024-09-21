const movies = [
    {
        title: "Movie 1",
        image: "https://filipinotimes.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-05-at-1.35.13-PM-1.png", // Replace with your actual image link
        video: "https://drive.google.com/file/d/1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0/preview" // Google Drive preview link
    },
    {
        title: "Movie 2",
        image: "https://asset-ent.abs-cbn.com/ent/entertainment/media/star-cinema/2023/03/0327/kathryn-bernardo-announces-2-powerful-movies-under-abs-cbn-films-pa-1.jpg", // Replace with your actual image link
        video: "https://drive.google.com/file/d/1vZR2IPB0TQwT_8vNrvAFz0kS6h1uLdyv/preview" // Google Drive preview link
    },
    {
        title: "Movie 3",
        image: "https://filipinotimes.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-05-at-1.35.13-PM-1.png", // Replace with your actual image link
        video: "https://drive.google.com/file/d/1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0/preview" // Google Drive preview link
    },
    {
        title: "Movie 4",
        image: "https://filipinotimes.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-05-at-1.35.13-PM-1.png", // Replace with your actual image link
        video: "https://drive.google.com/file/d/1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0/preview" // Google Drive preview link
    },
    {
        title: "Movie 5",
        image: "https://filipinotimes.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-05-at-1.35.13-PM-1.png", // Replace with your actual image link
        video: "https://drive.google.com/file/d/1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0/preview" // Google Drive preview link
    },
    {
        title: "Movie 6",
        image: "https://filipinotimes.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-05-at-1.35.13-PM-1.png", // Replace with your actual image link
        video: "https://drive.google.com/file/d/1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0/preview" // Google Drive preview link
    },
    {
        title: "Movie 7",
        image: "https://filipinotimes.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-05-at-1.35.13-PM-1.png", // Replace with your actual image link
        video: "https://drive.google.com/file/d/1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0/preview" // Google Drive preview link
    },
    {
        title: "Movie 8",
        image: "https://filipinotimes.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-05-at-1.35.13-PM-1.png", // Replace with your actual image link
        video: "https://drive.google.com/file/d/1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0/preview" // Google Drive preview link
    },
    {
        title: "Movie 9",
        image: "https://filipinotimes.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-05-at-1.35.13-PM-1.png", // Replace with your actual image link
        video: "https://drive.google.com/file/d/1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0/preview" // Google Drive preview link
    },
    {
        title: "Movie 10",
        image: "https://filipinotimes.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-05-at-1.35.13-PM-1.png", // Replace with your actual image link
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
