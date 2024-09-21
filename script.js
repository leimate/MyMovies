const movies = [
    {
        title: "Movie 1",
        image: "link_to_image_1.jpg", // Replace with your actual image link
        video: "https://drive.google.com/uc?export=preview&id=1SZSgeHm52VtmkvEB8CBGq5UFNiRGOot0" // Replace with your actual video ID
    },
    {
        title: "Movie 2",
        image: "link_to_image_2.jpg", // Replace with your actual image link
        video: "https://drive.google.com/uc?export=preview&id=ANOTHER_FILE_ID" // Replace with another video ID
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
        const videoPlayer = document.createElement('video');
        videoPlayer.setAttribute('width', '320');
        videoPlayer.setAttribute('height', '240');
        videoPlayer.setAttribute('controls', '');

        const source = document.createElement('source');
        source.src = movie.video;
        source.type = 'video/mp4';

        videoPlayer.appendChild(source);
        
        // Clear any previous video player
        const existingVideo = movieDiv.querySelector('video');
        if (existingVideo) {
            movieDiv.removeChild(existingVideo);
        }
        
        movieDiv.appendChild(videoPlayer);
    };

    movieDiv.appendChild(movieImage);
    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(watchButton);
    movieContainer.appendChild(movieDiv);
});
