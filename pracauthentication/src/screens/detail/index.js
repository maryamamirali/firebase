import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
const { id } = useParams();
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();

useEffect(() => {
        setLoading(true);
fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => {
        setProduct(json);
        setLoading(false);
})
    .catch((error) => {
        console.error('Error fetching product:', error);
        setLoading(false);
});
}, [id]);

    if (loading) {
return <div>Loading...</div>;
}

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


    <h1 className='detail-card'>{product.title}</h1>
<div className="detail-card">
    <img alt='' src={product.image} width='30%' />

<br /><br />
<div>
    <p>{product.category}</p>
    <p>Price: Rs. {product.price}</p>
    <p>{product.description}</p>
    <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
</div>
<button className='backbtn' onClick={() => navigate('/')}>Go back to Product List</button>
</div>
</div>
);
};

export default Detail;