import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import fetchData from './fetchData';
import RenderProduct from './components/Product'
import CategoryFilter from './components/CategoryFilter'

function App() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData({ setProducts, setCategories, setBrands });
  }, []);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const onCategoryChecked = (category) => {
    let newselectedCategories = [...selectedCategories];
    newselectedCategories.includes(category) ? newselectedCategories.splice(newselectedCategories.indexOf(category), 1) : newselectedCategories.push(category);
    setSelectedCategories(newselectedCategories);
  }

  const onBrandChecked = (brand) => {
    let newSelectedBrands = [...selectedBrands];
    newSelectedBrands.includes(brand) ? newSelectedBrands.splice(newSelectedBrands.indexOf(brand), 1) : newSelectedBrands.push(brand);
    setSelectedBrands(newSelectedBrands);
  }

  useEffect(() => {
    setFilteredProducts(products.filter(product => ((selectedCategories.length === 0 || selectedCategories.includes(product.category)) && (selectedBrands.length === 0 || selectedBrands.includes(product.brand)))));
  }, [selectedCategories, selectedBrands, products]);

  return (
    <div className="App">
      <div className="filtersContainer">
        <h3>Filters</h3>
        {categories.length > 0 ? (
          <div>
            <h4>Categories</h4>
            <div className="categories-container">
              {
                categories.map(category => <CategoryFilter filterName={category} onFilterChecked={onCategoryChecked} />)
              }
            </div>
          </div>) : null}
        {categories.length > 0 ? (
          <div>
            <h4>Brands</h4>
            <div className="categories-container">
              {
                brands.map(brand => <CategoryFilter filterName={brand} onFilterChecked={onBrandChecked} />)
              }
            </div>
          </div>) : null}
      </div>
      {products.length > 0 ? <div className="products-grid">{
        filteredProducts.map(product => <RenderProduct {...product} />)
      }</div> : null}
    </div>
  );
}

export default App;
