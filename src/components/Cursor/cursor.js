import "./cursor.css";
import { useRef } from "react";

const Cursor = ({curse}) => {
    const cursor = useRef();

    window.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;
        if (cursor.current !== undefined) {
            cursor.current.style.left = x + "px"
            cursor.current.style.top = y + "px"
            cursor.current.style.opacity = "95%";
        }
    });
    window.addEventListener('scroll', () => {    
        let e = window.event;
        let y = e.clientY;
        let x = e.clientX;
        if (cursor.current !== undefined) {
            cursor.current.style.left = x + "px";
            cursor.current.style.top = y + "px";
            cursor.current.style.position = "fixed";
            cursor.current.style.opacity = "95%";
        }
    });
    return ( 
        <div className={curse ? 'lin' : 'cursor'} ref={cursor}></div>
     );
}
 
export default Cursor;