import React from 'react'
import Slider from '../Slider'
import TypeOfCategory from '../TypeOfCategory'
import CashBack from '../CashBack'
import DealofDay from '../DealofDay'
import Subscribe from '../Subscribe'
import Exclusive from '../Exclusive'
import Treandincupon from '../Treandincupon'
import Store from '../Store'
import Voucher from '../Voucher'

const Dashbord = () => {
    return (
        <>

            <Slider />
            <TypeOfCategory />
            <CashBack />
            <Exclusive/>
            <Treandincupon/>
            <Store/>
            <Voucher/>
            <Subscribe/>
            <DealofDay />
        </>
    )
}

export default Dashbord