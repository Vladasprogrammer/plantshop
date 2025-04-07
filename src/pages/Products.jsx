import { useState } from "react";
import PlantCardsList from "../components/PlantCardsList";
import SecondTitle from "../components/SecondTitle";
import './PagesStyle/Products.css';

export default function Products() {

  const [ sortType, setSortType ] = useState('default');

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };
  
  return (
    <>
      <SecondTitle text1='Shop' text2='Find the perfect plant for your space' />
      <div className="wrapper product-page">
        <aside className="aside">
          ahsdfjasdfkhfuduohas dufhasjo fhasofhasjdfs
        </aside>
        <div className="cards-block">
          <div className="sort-block">
            <div className="border">
              <label htmlFor="sort">
                Sort By
              </label>
              <select name="" value={sortType} onChange={handleSortChange} id="sort">
                <option value="default">Default</option>
                <option value="price-high">Price (high-to-low)</option>
                <option value="price-low">Price (low-to-high)</option>
                <option value="most-popular">Popular</option>
                <option value="deals">Discount</option>
              </select>
            </div>
            <p>Showing 82734 Products</p>
          </div>
          <PlantCardsList filterType={sortType}  limit={0} />
        </div>
      </div>
    </>
  )
}