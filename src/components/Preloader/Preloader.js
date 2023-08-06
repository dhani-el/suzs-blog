import './Preloader.css';
import { gsap } from 'gsap';
import { useRef, useEffect } from "react";



const Preloader = () => {
    const el = useRef(null);
    const headerRef = useRef(null);
//  preloader animation with GSAP
    useEffect(() => {      
        gsap.to(el.current, { 
            duration: 0.5,
            y: "-10vh",
            ease: 'power2', 
            delay: 6
         });

         gsap.to(headerRef.current, { 
            duration: 0.8,
            autoAlpha: 0,
            ease: 'expo', 
            delay: 8
         });
      }, []);
    return ( 
        <div className="preloader-container" ref={headerRef} data-scroll-section>
            <p>
                <span>The ideal </span>
                <span>lifestyle blog </span>
                <span>for the imperfect 20 something’s.</span>
            </p>
            <div className="name">
                <div className="name2">
                    <span>by</span>
                    <div className="preload-name-container"></div>
                    <div className="preload-nam" ref={el}>susan omono</div>
                </div>
            </div>
        </div>
     );
}
 
export default Preloader;