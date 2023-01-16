// Import stylesheets
import './style.css';

// Write Javascript code!
// Get the form and button elements from the HTML
const form = document.querySelector("form");
const searchBtn = document.querySelector("#searchBtn");
const movieTitle = document.querySelector("#movieTitle");
const movieInfo = document.querySelector("#movieInfo");

// Add an event listener to the form that will fire when the form is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault();

    // Get the value of the movie title input
      const title = movieTitle.value;

        // Make an HTTP request to the OMDB API to get movie information
          fetch=(`http://www.omdbapi.com/?i=tt3896198&apikey=f8d3aedd=${movie
              .then((response) => response.json())
                  .then((data) => {
                        // Check if the movie was found
                              if (data.Response === "True") {
                                      // Create an image element with the movie poster
                                              const img = document.createElement("img");
                                                      img.src = data.Poster;
                                                              img.alt = data.Title;

                                                                      // Create a paragraph element with the movie title
                                                                              const title = document.createElement("p");
                                                                                      title.textContent = data.Title;

                                                                                              // Create a paragraph element with the movie release year
                                                                                                      const year = document.createElement("p");
                                                                                                              year.textContent = data.Year;

                                                                                                                      // Create a paragraph element with the movie plot
                                                                                                                              const plot = document.createElement("p");
                                                                                                                                      plot.textContent = data.Plot;

                                                                                                                                              // Clear the movie info section
                                                                                                                                                      movieInfo.innerHTML = "";

                                                                                                                                                              // Add the image, title, year, and plot to the movie info section
                                                                                                                                                                      movieInfo.appendChild(img);
                                                                                                                                                                              movieInfo.appendChild(title);
                                                                                                                                                                                      movieInfo.appendChild(year);
                                                                                                                                                                                              movieInfo.appendChild(plot);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                            // If the movie was not found, display an error message
                                                                                                                                                                                                                    movieInfo.textContent = "Movie not found. Please try again.";
                                                                                                                                                                                                                          }
                  ))
                                                                                                                                                                                                                              /////////////