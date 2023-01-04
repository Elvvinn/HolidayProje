import React from 'react'
import './footer.css'
function Footer() {
    return (
        <footer>

            <div className='footermaindivhome'>

                <div className='itemdiv'>

                    <a href='https://twitter.com/sbootstrap' target={"_blank"}> <i class="fa-brands fa-twitter"></i> </a>
                    <i class="fa-brands fa-facebook"></i>
                    <a href='https://github.com/StartBootstrap/sb-clean-blog-angular' target={"_blank"}> <i class="fa-brands fa-github"></i> </a>

                </div>
                <div className='textfooter'>

                    <h6>Copyright © Your Website 2020</h6>

                </div>

            </div>

        </footer>
    )
}

export default Footer