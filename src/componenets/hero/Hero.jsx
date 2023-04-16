import HeroImg from '../../assets/hero.png';
import css from './Hero.module.css';

import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';

import { motion } from 'framer-motion';

const Hero = () => {

    const transtion = {duration: 3 , type:"spring"}
    
    return (
        <section className={css.container}>
            
            {/*left Side */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin protection cream</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>Seedily say has suitable disposal and boy. Exercuse joy man children rejoiced.</span>
                </div>
            </div>

            {/* middle side hero image*/}
            <div className={css.wrapper}>
                <motion.div 
                initial={{bottom:"2rem"}}
                whileInView={{bottom:"0rem"}}
                className={css.blueCircle}
                transition={transtion}>
                </motion.div>

                <motion.img 
                transition={transtion}
                initial={{bottom:"-2rem"}}
                whileInView={{bottom:"0rem"}}
                src={HeroImg} 
                alt='' 
                width={600} />

                
                <motion.div 
                transition={transtion}
                initial={{right:"0%"}}
                whileInView={{right:"-5%"}}
                className={css.cart2}>
                    <RiShoppingBagFill/>

                    <div className={css.signup}>
                        <span>Best Signup Offers</span>

                        <div>
                        <BsArrowRight />
                        </div>

                    </div>
                </motion.div>
            </div>

            {/*right side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
                
            </div>

        </section>
    )
}

export default Hero;
