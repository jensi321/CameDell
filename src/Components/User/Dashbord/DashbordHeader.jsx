import { Tabs } from 'antd'
import React from 'react'
import { FaUserCircle, FaUsers } from 'react-icons/fa'
import { FaDatabase, FaUserCheck } from 'react-icons/fa6'
import { GiWallet } from 'react-icons/gi'
import { IoIosGift } from 'react-icons/io'
import { IoLogOut } from 'react-icons/io5'
import { MdWorkHistory } from 'react-icons/md'
import { RiDiscountPercentFill, RiLockPasswordFill } from 'react-icons/ri'
import { TfiMenuAlt } from 'react-icons/tfi'
import Profile from './Profile'
import MyCupon from './MyCupon'
import SubscriptionPlan from '../SubscriptionPlan'
import Wallet from './Wallet'
import SubscriptionHistory from './SubscriptionHistory'
import LoyaltyPoints from './LoyaltyPoints'
import ReferralID from './ReferralID'
import UsertermsCondition from './UsertermsCondition'
import ChangePassword from './ChangePassword'

const DashbordHeader = () => {
    return (
        <>

            <Tabs
                className='dashbordheader'
                centered
                defaultActiveKey="1"
                items={[
                    {
                        label: 'Profile',
                        key: '1',
                        children: <Profile />,
                        icon: <FaUserCircle />
                    },
                    {
                        label: 'My Coupons',
                        key: '2',
                        children: <MyCupon />,
                        icon: <FaUserCheck />

                    },
                    {
                        label: 'Used Coupons',
                        key: '3',
                        children: <MyCupon />,
                        icon: <RiDiscountPercentFill />

                    },
                    {
                        label: 'Wallet',
                        key: '4',
                        children: <Wallet />,
                        icon: <GiWallet />

                    },
                    {
                        label: 'Subscription Plan',
                        key: '5',
                        children: <SubscriptionPlan />,
                        icon: <IoIosGift />

                    },
                    {
                        label: 'Subscription History',
                        key: '6',
                        children: <SubscriptionHistory />,
                        icon: <MdWorkHistory />

                    },
                    {
                        label: 'Loyalty Points',
                        key: '7',
                        children: <LoyaltyPoints />,
                        icon: <FaDatabase />

                    },
                    {
                        label: 'Referral ID',
                        key: '8',
                        children: <ReferralID />,
                        icon: <FaUsers />

                    },
                    {
                        label: 'Terms & Condition',
                        key: '9',
                        children: <UsertermsCondition />,
                        icon: <TfiMenuAlt />

                    },
                    {
                        label: 'Change Password',
                        key: '10',
                        children: <ChangePassword />,
                        icon: <RiLockPasswordFill />

                    },
                    {
                        label: 'Log out',
                        key: '11',
                        children: 'logOut',
                        icon: <IoLogOut />

                    },

                ]}
            />
        </>
    )
}

export default DashbordHeader