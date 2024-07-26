
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
const [products, setProducts] = useState([]);


useEffect(() => {
    fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then((data) => {
    setProducts(data);

    })
.catch((error) => {
    console.error('Error fetching products:', error);

});
}, []);


return (
<div>
<div>
<nav className="nav">
    <a href="/">home</a>
    <a href="#profile">profile</a>
    <a href="#message">message</a>
    <a href="#setting">setting</a> 
<button className="login"><a className="" href="signin">login</a></button>
<button className="signup"><a className="" href="signup">signup</a></button>
</nav>
</div>

<div className=''>
<div className="heading">
    <h1>Dashboard</h1>
</div>

<div className="cards">
    {products.map((product) => (
<div key={product.id} className="product-card">
<div>
<div className='card'>
    <Link to={`/product/${product.id}`}>
    <img src={product.image} alt='' width='50%'/>
    </Link>
    <h5>{product.title}</h5>
    </div>
</div>


</div>
))}
</div>
</div>
</div>
);
};

export default Dashboard;