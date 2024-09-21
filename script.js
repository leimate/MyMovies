const movies = [
    {
        title: "Movie 1",
        image: "link_to_image_1.jpg",
        video: "link_to_video_1.mp4"
    },
    {
        title: "Movie 2",
        image: "link_to_image_2.jpg",
        video: "link_to_video_2.mp4"
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
    watchButton.textContent = "Watch Movie";
    watchButton.onclick = () => {
        window.open(movie.video, '_blank');
    };

    movieDiv.appendChild(movieImage);
    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(watchButton);
    movieContainer.appendChild(movieDiv);
});
