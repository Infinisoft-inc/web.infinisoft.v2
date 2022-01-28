/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import './styles.scss'

const Contact = () => {
    return <div className='contact'>
       

        <div className='informations'>

            <div>
                <div className='container'>
                    <h1 className='title'>C<span className='colored'>o</span>ntact</h1>

                    <div className='line'>
                        <img src='assets/email.svg' alt='Email' />
                        <a href='mailto:info@infini-soft.com' className='text'>info@infini-soft.com</a>
                    </div>

                    <div className='line'>
                        <img src='assets/phone.svg' alt='Telephone' />
                        <a href='tel:5147960626' className='text'>514-796-0626</a>
                    </div>

                    <div className='line'>
                        <img src='assets/location.svg' alt='Location' />
                        <span className='text'>Montreal, CA</span>
                    </div>

                </div>
            </div>


            <div className='mosaic-container'>
                <img className='mosaic' src='assets/mosaic.svg' alt='mosaic design' />
            </div>


        </div>
    </div>
}

export default Contact