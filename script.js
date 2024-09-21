const movies = [
    {
        title: "Movie 1",
        image: "https://filipinotimes.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-05-at-1.35.13-PM-1.png",
        video: "https://drive.google.com/file/d/1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0/view?usp=sharing"
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
