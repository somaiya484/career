import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='bg-dark text-white d-flex'>
                <div className='mx-5 '>
                    <h2>Olpor</h2>
                    <p>There are many variations of passages of Lorem Ipsum <br /> , but the majority have suffered alteration <br /> in some form.</p>
                </div>
                <div className='me-4'>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className='me-4'>
                    <h3>Product</h3>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className='me-4'>
                    <h3>Support</h3>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div className='me-4'>
                    <h3>Contact</h3>
                    <p>524 Broadway , NYC
                        <br />
                    +1 777 - 978 - 5570</p>
                </div>
            </div>
        </>
    );
};

export default Footer;