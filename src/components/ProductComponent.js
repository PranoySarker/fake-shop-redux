import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const productList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div>
                <div className='four column wide' key={id}>
                    <Link to={`/product/${id}`}>
                        <div className='ui link cards'>
                            <div className='card'>
                                <div className='image' style={{ width: '15rem', height: '20rem' }}>
                                    <img src={image} alt="" />
                                </div>
                                <div className="content">
                                    <div className="header">{title}</div>
                                    <div className="meta price">$-{price}</div>
                                    <div className='meta'>{category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <>
            {productList}
        </>
    );
};

export default ProductComponent;