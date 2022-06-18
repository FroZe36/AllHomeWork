import { FC } from "react";
import './Tabs.css'

const Tabs = function() {
  return (
    <div className="wrapper">
      <h1 className="wrapper__title">Tabs</h1>
      <div className="wrapper__tabs">
        <a href="#" className="tabs-link checked">All</a>
        <a href="#" className="tabs-link">Favourites</a>
        <a href="#" className="tabs-link disabled">Popular</a>
      </div>
    </div>
  )
};

export default Tabs;
