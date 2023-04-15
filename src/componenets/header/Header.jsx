import css from './Header.module.css';
import Logo from '../../assets/logo.png';
import {CgShoppingBag} from 'react-icons/cg';
import {GoThreeBars} from 'react-icons/go';
import { useState } from 'react';


const Header = () => {

    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = ()=>{
        setShowMenu((showMenu)=>!showMenu);
    }


    return (
        <div className={css.container}>
            <div className={css.logo} >
            <img src={Logo} alt="logo"  />
            <span>amazon</span>
            </div>

            <div className={css.right}>

                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars style={{fontSize:'1.5rem'}}/>
                </div>


                    <ul className={css.menu}  style={{display: !showMenu&&'inherit'}}>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>


                <input type="text" placeholder='serach' className={css.search} />

                <CgShoppingBag className={css.cart} />

            </div>
        </div>
    )
}

export default Header
