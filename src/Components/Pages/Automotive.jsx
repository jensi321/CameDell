import React from 'react'
import PageBanner from '../PageBanner'
import { Tabs } from 'antd'
import Allcupon from '../User/Allcupon'

const Automotive = () => {
  return (
    <>
    <PageBanner title='Coupons Description' desc="( Automotive )" />
            <Tabs
            className='coupontab'
                centered
                Tabs
                defaultActiveKey="1"
                items={[
                    {
                        label: 'All',
                        key: '1',
                        children: <Allcupon />,
                    },
                    {
                        label: 'Shirt',
                        key: '2',
                        children: <Allcupon />,
                    },
                    {
                        label: 'Dress',
                        key: '3',
                        children: <Allcupon />,
                    },
                    {
                        label: 'T-shirts',
                        key: '4',
                        children: <Allcupon />,
                    },
                    {
                        label: 'Men Accessories',
                        key: '5',
                        children: <Allcupon />,
                    },
                    {
                        label: 'Women Accessories',
                        key: '6',
                        children: <Allcupon />,
                    },
                    {
                        label: 'Shoes',
                        key: '7',
                        children: <Allcupon />,
                    },
                    {
                        label: 'Slip..',
                        key: '8',
                        children: <Allcupon />,
                    },
                ]}
            />
        </>
  )
}

export default Automotive