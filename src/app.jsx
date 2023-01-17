import { useState } from "react";
import { fetchCharacter } from "./api";
import './style.css';

function Header() {
    return (
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">The Rick and Morty Character</h1>
          </div>
        </div>
      </header>
    );
}

function Form(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const { breed } = event.target.elements;
        props.onFormSubmit(breed.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <div className="select is-fullwidth">
                            <select name="breed" defaultValue="rickandmorty">
                                <option value="823">Young Beth</option>
                                <option value="92">Davin</option>
                                <option value="179">Jessica</option>
                            </select>
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-dark">
                            Reload
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
  
function Main() {
    const [data, setData] = useState(null);
    function characterData(breed) {
        fetchCharacter(breed).then(data => {
            console.log(data);
            setData(data);
        });
    }
    return (
      <main>
        <Form onFormSubmit={characterData} />
        <h2 className="h2Class">{data.name}のプロフィール</h2>
        {<div className="flex">
          <p><img src={data.image} className="imgClass"></img></p>
          <p className="textClass">
            種類：{data.species}<br/ >
            性別：{data.gender}<br/ >
            出身地：{data.origin.name}<br/ >
            生息地：{data.location.name}<br/ >
            生死：{data.status}
          </p>
        </div>}
      </main>
    );
}
  
function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Dog images are retrieved from rickandmortyapi.com API</p>
          <p>
            <a href="https://rickandmortyapi.com">Donate to rickandmortyapi.com API</a>
          </p>
          <p>5421074 大須賀 友</p>
          <p>日本大学文理学部情報科学科 Webプログラミングの最終課題</p>
        </div>
      </footer>
    );
}
  
function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
}
  
export default App;