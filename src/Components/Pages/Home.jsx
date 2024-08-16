import React from 'react'
import Slider from '../User/Home/Slider'
import TypeOfCategory from '../User/Home/TypeOfCategory'
import CashBack from '../User/Home/CashBack'
import Exclusive from '../User/Home/Exclusive'
import Treandincupon from '../User/Home/Treandincupon'
import Voucher from '../User/Home/Voucher'
import Subscribe from '../User/Home/Subscribe'
import DealofDay from '../User/Home/DealofDay'
import TermsSetTimeOut from '../User/TermsSetTimeOut'
import Store from '../User/Home/Store'

const Home = () => {
    return (
        <>
            <TermsSetTimeOut />
            <Slider />
            <TypeOfCategory />
            <CashBack />
            <Exclusive />
            <Treandincupon />
            <Store />
            <Voucher />
            <Subscribe />
            <DealofDay />
        </>
    )
}

export default Home