import React from "react";
import ReactDOM from "react-dom";
import { fetchMovie } from "./services/imdb";
import { SearchForm } from "./components/SearchForm";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieContentDisplay from "./components/MovieContentDisplay";

class App extends React.Component {
  state = {
    plot: "",
    actors: "",
    poster: "",
    year: "",
    title: ""
  };
  handleSubmit = text => {
    // console.log(text);
    return fetchMovie(text).then(data => {
      console.log("FetchMovie Data", data);
      this.setState({
        plot: data.Plot,
        actors: data.Actors,
        poster: data.Poster,
        year: data.Year,
        title: data.Title
      });
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header className="header" title="Welcome to MoviSearch" />
        <main>
          <SearchForm className="searchForm" onFormSubmit={this.handleSubmit} />
          <MovieContentDisplay
            className="movieContentDisplay"
            movie={this.state}
          />
        </main>
        <Footer className="footer" footerText="Made with &hearts; by the Mob" />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// http://www.omdbapi.com/?i=tt3896198&apikey=4a29f1dd
