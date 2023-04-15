import css from './Products.module.css';

import Plane from '../../assets/plane.png';

import {ProductsData} from "../../data/products"
import { useState } from 'react';

import {useAutoAnimate} from '@formkit/auto-animate/react';


const Products = () => {

    const [parent] = useAutoAnimate();

    const [MenuProducts, setMenuProducts] = useState(ProductsData);

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>{
        if(type==="all"){
            return ProductsData;
        }else{
            return product.type ===type;

        }
        }))
    }

    return (
        <div className={css.container}>
            <img src={Plane} alt='plane' />
            <h1>Our Fetured Products</h1>

            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={()=>filter("all")}>All</li>
                    <li onClick={()=>filter("skin care")}>Skin Care</li>
                    <li onClick={()=>filter("conditioner")}>Conditioners</li>
                    <li onClick={()=>filter("foundation")}>Foundations</li>
                </ul>

                <div className={css.list} ref={parent}>
                    {
                        MenuProducts.map((item, i)=>(

                            <div key={i} className={css.product}>
                                <div className='left-s'>
                                    <div className='name'>
                                        <span>{item.name}</span>
                                        <span>{item.detail}</span>
                                    </div>
                                    <span>{item.price}</span>

                                    <div style={{cursor:"pointer"}}>Show Now</div>
                                </div>

                                <img src={item.img} alt="item" className='img-p' />
                            </div>
                        ))
                    }


                </div>

            </div>
        </div>
    )
}

export default Products
