import React from 'react'
import "./FooterLink.scss"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import logoImg from "../../assets/shopito_logo.png"
const FooterLink = () => {
  return (
    <>
        <section className='contact-section'>
            <div className='container contact'>
                <div className='contact-icon'>
                    <FaFacebookF className='i' />
                    <FaTwitter className='i' />
                    <FaInstagram className='i' />
                    <FaYoutube className='i' />
                </div>
                <h2>Let's Talk?</h2>
                <a href='#home' className='btn btn-dark'>Make an enquiry!</a>
            </div>
        </section>
        <section className='footer-section'>
          <div className='container footer'>
            <div className='footer-logo'>
              <img src={logoImg} alt='logo'/>
            </div>
            <div className='footer-menu'>
              <p className='link-heading'>Features</p>
              <ul className='nav-ul footer-links'>
                <li>
                  <a href='#homd'>Link Shortening</a>
                </li>
                <li>
                  <a href='#homd'>Branded Links</a>
                </li>
                <li>
                  <a href='#homd'>Analytics</a>
                </li>
                <li>
                  <a href='#homd'>Blog</a>
                </li>
              </ul>
            </div>
            <div className='footer-menu'>
              <p className='link-heading'>Resources</p>
              <ul className='nav-ul footer-links'>
                <li>
                  <a href='#homd'>Blog</a>
                </li>
                <li>
                  <a href='#homd'>Developer</a>
                </li>
                <li>
                  <a href='#homd'>Support</a>
                </li>
                <li>
                  <a href='#homd'>Docs</a>
                </li>
              </ul>
            </div>
            <div className='footer-menu'>
              <p className='link-heading'>Company</p>
              <ul className='nav-ul footer-links'>
                <li>
                  <a href='#homd'>About</a>
                </li>
                <li>
                  <a href='#homd'>Our Team</a>
                </li>
                <li>
                  <a href='#homd'>Career</a>
                </li>
                <li>
                  <a href='#homd'>Contact</a>
                </li>
              </ul>
            </div>
            <div className='footer-menu'>
              <p className='link-heading'>Partners</p>
              <ul className='nav-ul footer-links'>
                <li>
                  <a href='#homd'>Link</a>
                </li>
                <li>
                  <a href='#homd'>Our Team</a>
                </li>
                <li>
                  <a href='#homd'>Career</a>
                </li>
                <li>
                  <a href='#homd'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </>
  )
}

export default FooterLink
