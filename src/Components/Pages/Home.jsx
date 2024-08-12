import React from 'react'
import Slider from '../User/Slider'
import TypeOfCategory from '../User/TypeOfCategory'
import CashBack from '../User/CashBack'
import Exclusive from '../User/Exclusive'
import Treandincupon from '../User/Treandincupon'
import Store from '../User/Store'
import Voucher from '../User/Voucher'
import Subscribe from '../User/Subscribe'
import DealofDay from '../User/DealofDay'
import TermsSetTimeOut from '../User/TermsSetTimeOut'

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