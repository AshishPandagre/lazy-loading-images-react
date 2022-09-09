// App.js

import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css'


const App = () => {
    return (
        <>
            <LazyLoadImage placeholderSrc='./placeholders/placeholder_1.jpg' effect="blur" className='img' src='./images/1.jpg'/>
            <LazyLoadImage placeholderSrc='./placeholders/placeholder_2.jpg' effect="blur" className='img' src='./images/2.jpg'/>
            <LazyLoadImage placeholderSrc='./placeholders/placeholder_3.jpg' effect="blur" className='img' src='./images/3.jpg'/>
            <LazyLoadImage placeholderSrc='./placeholders/placeholder_4.jpg' effect="blur" className='img' src='./images/4.jpg'/>
            <LazyLoadImage placeholderSrc='./placeholders/placeholder_5.jpg' effect="blur" className='img' src='./images/5.jpg'/>
            <LazyLoadImage placeholderSrc='./placeholders/placeholder_6.jpg' effect="blur" className='img' src='./images/6.jpg'/>
            <LazyLoadImage placeholderSrc='./placeholders/placeholder_7.jpg' effect="blur" className='img' src='./images/7.jpg'/>
        </>
    )
}

export default App
