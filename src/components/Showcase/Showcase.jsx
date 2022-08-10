import { useEffect, useState } from "react";
import { Showcaseitems } from './ShowcaseItems';

import './showcase.scss';

export function Showcase() {
    const [showcaseItems, setShowcaseItems] = useState([]);

    useEffect(() => {
        fetch('https://corebiz-test.herokuapp.com/api/v1/products')
        .then(response => response.json())
        .then(data => setShowcaseItems(data));
    }, [])
    
    console.log(showcaseItems);

    return (
        <section className="showcase">
            <div className="container">
                <h2>Mais Vendidos</h2>

                {showcaseItems.map(product => {
                    return <Showcaseitems key={product.productId} product={product} />
                })}
            </div>
        </section>
    )
}