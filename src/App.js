/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./img/logo.png";
import axios from "axios";
import Loading from "./loading";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState("coffee");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const handleChange = (e) => {
    setTags(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    callData();
  };

  const handleClickArchitecture = (e) => {
    e.preventDefault();
    setTags("Architecture");
    setPage(1);
    callData();
  };

  const handleClickArt = (e) => {
    e.preventDefault();
    setTags("Art");
    setPage(1)
    callData();
  };

  const handleClickFlower = (e) => {
    e.preventDefault();
    setTags("Flower");
    setPage(1)
    callData();
  };

  const handleClickNature = (e) => {
    e.preventDefault();
    setTags("Nature");
    setPage(1)
    callData();
  };

  const previous = () => {
    setPage(page <= 1 ? 1 : page - 1);
    callData();
  };

  const next = () => {
    setPage(page + 1);
    callData();
  };

  let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b2f9ac2cf5d1bc5e46ecd807e0f76b9a&tags=${tags}&per_page=25&page=${page}&format=json&nojsoncallback=1`;

  const callData = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.photos.photo);
        setTotalPage(res.data.photos.pages);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    callData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container-photo">
        <img src={Logo} alt="home" className="logo" />
      </div>
      <form className="container">
        <input
          label="Search Image"
          icon="search"
          type="text"
          className="input"
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Search</button>
      </form>
      <div className="tags-item">
        <button className="btn-tag" onClick={handleClickNature}>
          Nature
        </button>
        <button className="btn-tag" onClick={handleClickFlower}>
          Flower
        </button>
        <button className="btn-tag" onClick={handleClickArchitecture}>
          Architecture
        </button>
        <button className="btn-tag" onClick={handleClickArt}>
          Art
        </button>
      </div>
      <div className="images">
        {loading ? (
          data.map((item, idx) => (
            <img
              src={`http://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
              alt={item.id}
              key={idx}
              className="pict-item"
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <div className="pagination">
        <button className="btn-tag" onClick={previous}>
          previos
        </button>
        <p className="text-page">
          {page} / {totalPage}
        </p>
        <button className="btn-tag" onClick={next}>
          next
        </button>
      </div>
    </>
  );
}

export default App;
