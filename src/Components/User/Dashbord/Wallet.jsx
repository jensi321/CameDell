import { Tabs } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BankAccount from './WalletTabs/BankAccount'
import WithDrawal from './WalletTabs/WithDrawal'
import Expenses from './WalletTabs/Expenses'
import { DropdownButton, DropdownItem } from 'react-bootstrap'
import Income from './WalletTabs/Income'

const Wallet = () => {

    const [activeKey, setActiveKey] = useState('1');

    const handleWithdrawalClick = (newKey) => {
        setActiveKey(newKey);
    };
    return (
        <>
            <div className="wallet-outer">
                <div className="container">
                    <div className="wallet-inner">
                        <div className="balance-outer">
                            <div className="item your-balance">
                                <div className="item-inner">
                                    <div className="heading">
                                        <h4>Your Balance</h4>
                                    </div>

                                    <div className="balnce-amount"><span className='ruppes-icon'>₹ </span>400</div>
                                    <div className="use-now">
                                        <Link to={''}>Use Now</Link>  </div>
                                </div>
                            </div>
                            <div className="item total-income">
                                <div className="item-inner">
                                    <div className="heading">
                                        <h4>Total income</h4>
                                    </div>
                                    <div className="income-amount"><span className='ruppes-icon'>₹ </span>400</div>
                                </div>
                            </div>
                            <div className="item total-expenses">
                                <div className="item-inner">
                                    <div className="heading">
                                        <h4>Total expenses</h4>
                                    </div>
                                    <div className="expenses-amount"><span className='ruppes-icon'>₹ </span>400</div>
                                </div>
                            </div>
                        </div>
                        <div className="wallet-history">
                            <div className="heading">
                                <h3>Wallet History</h3>
                                <DropdownButton id="dropdown-basic-button" className="list-view" title="List View">
                                    <DropdownItem as={Link} to='' >User</DropdownItem>
                                    <DropdownItem as={Link} to=''>Merchant</DropdownItem>
                                </DropdownButton>
                            </div>
                            <div className="wallet-tabs">
                                <Tabs
                                    centered
                                    defaultActiveKey="1"
                                    activeKey={activeKey}
                                    onChange={(key) => setActiveKey(key)}
                                    items={[
                                        {
                                            label: 'Income',
                                            key: '1',
                                            children: <Income/>,
                                        },
                                        {
                                            label: 'Expenses',
                                            key: '2',
                                            children: <Expenses />,
                                        },
                                        {
                                            label: 'Withdrawal Request',
                                            key: '3',
                                            children: <WithDrawal
                                                activeKey={activeKey}
                                                onClick={() => handleWithdrawalClick('4')}
                                            />,
                                        },
                                        {
                                            label: 'Bank  Account',
                                            key: '4',
                                            children: <BankAccount />,
                                        },
                                    ]}
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallet