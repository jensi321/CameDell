import React from 'react'
import CashbackStore from './MyCupon/CashbackStore'
import CuponOffer from './MyCupon/CuponOffer'
import VoucherCupon from './MyCupon/VoucherCupon'

const MyCupon = () => {
    return (
        <>
            <div className="mycupon-outer">
                <div className="container">
                    <div className="mycupon-inner">
                        <CashbackStore />
                        <CuponOffer />
                        <VoucherCupon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCupon