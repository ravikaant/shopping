const fetchData = async ({ setProducts, setCategories, setBrands }) => {
  fetch('https://demo7242716.mockable.io/products').then(res => res.json()).then(res => {
    console.log(res)
    setProducts(res.products);
    const categories = res.products.map(product => product.category);
    setCategories(categories);
    const brands = res.products.map(product => product.brand);
    setBrands(brands);
  }).catch(err => {
    console.log(err);
  })
};

export default fetchData;