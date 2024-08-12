import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdMyLocation } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Location = ({ onClose }) => {
    return (
        <>
            <div className="location-outer">
                <div className="location-inner">
                    <div className="heading">
                        <span className='icon'>
                            <MdMyLocation /></span>

                        <h3>Use Your Location</h3>
                    </div>

                    <form method="post">
                        <input type="text" id='location' name='location' placeholder='Enter the location' />
                        <span>or</span>
                        <Link><FaMapMarkerAlt />Use current location</Link>
                        <div className="button-group">
                            <button className='border-button'>Cancel</button>
                            <button className='button'>OK</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Location