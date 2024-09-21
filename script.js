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
        const existingIframe = movieDiv.querySelector('iframe');
        if (existingIframe) {
            existingIframe.style.display = existingIframe.style.display === 'none' ? 'block' : 'none';
            return;
        }

        const iframe = document.createElement('iframe');
        iframe.src = movie.video;
        iframe.width = "640";
        iframe.height = "480";
        iframe.allow = "autoplay";
        iframe.style.display = 'block'; // Show the iframe
        
        movieDiv.appendChild(iframe);
    };

    movieDiv.appendChild(movieImage);
    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(watchButton);
    movieContainer.appendChild(movieDiv);
});
