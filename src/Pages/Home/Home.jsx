import { useEffect, useState } from 'react'
import './Home.css'
import {Circles,} from 'react-loader-spinner'
import Products from '../../Components/Products/Products'

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchListProducts();
    }, [])

    async function fetchListProducts() {
        try {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok) {
                throw new Error('ooops...error!!')
            }
            else {
                setLoading(false);
                const data = await response.json();
                console.log(data);
                setProducts(data);
            }

        } catch(error) {
            console.log(error);
            setLoading(true);
        }
    }

  return (
    <div>
        {
            loading ? 
            <div className='loader'>
                <Circles
                height={'80'}
                width={'80'}
                color='red'
                visible={true}
                />
            </div> : 
            <div className='products'>
                {
                    products && products.length ? 
                    products.map(productItem => (
                        <Products key={productItem.id} product={productItem}/>
                    ))
                    : null
                }
            </div>
        }
    </div>
  )
}

export default Home