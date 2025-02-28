import React from "react";
import './Sidebar.css'
import img1 from '../../assets/sidebarimg/download1.webp'
import img2 from '../../assets/sidebarimg/Home1.png'
import img3 from '../../assets/sidebarimg/anly.png'
import img4 from '../../assets/op1.jpg'
import img5 from '../../assets/op2.png'
import img6 from '../../assets/op3.png'
import img7 from '../../assets/op4.png'
import img8 from '../../assets/op5.png'
import img9 from '../../assets/op8.png'
import img13 from '../../assets/op13.jpg'
import img11 from '../../assets/op10.png'
import img12 from '../../assets/op11.png'


const Sidebar1=()=>{
    return(
        <>
        <div className="sidebar">
           <div className="step1">
            <img src={img1} alt="" className="image1" />
            <div className="text-1">
            <p className="text1">Kital</p>
            </div>
           </div>
           <div className="step2">
             <div className="se1">
                <img src={img2} alt="" className="image2"/>
                <p className="text2">Dashboard</p>
             </div>
             <div className="se2">
             <img src={img3} alt="" className="image2"/>
             <p className="text2">Analytics</p>
             </div>
           </div>
            <div className="step3">
                <div className="se3">
                    <p>FINANCING</p>
                    <div className="se-1">
                    <div className="se1">
                <img src={img4} alt="" className="image2"/>
                <p className="text2">All transactions</p>
             </div>
             <div className="se2">
             <img src={img6} alt="" className="image2"/>
             <p className="text2">New Draw</p>
             </div>
                    </div>
                </div>
            </div>
            <div className="step4">
            <div className="se3">
                    <p>TOOLS</p>
                    <div className="se-1">
                    <div className="se1">
                <img src={img7} alt="" className="image2"/>
                <p className="text2">Churn Funnel</p>
             </div>
             <div className="se2">
             <img src={img8} alt="" className="image2"/>
             <p className="text2">Saas Planner</p>
             </div>
             <div className="se2">
             <img src={img9} alt="" className="image2"/>
             <p className="text2">Customer Hub</p>
             </div>
                    </div>
                </div>
            </div>
            <div className="step5"></div>
            <div className="step6">
                <div className="solo1">
                <img src={img13} alt="" className="image2" />
                <p className="text2">Need Help</p>
                </div>
                <span className="txt1">Get in touch with one of our</span>
                <span className="txt1">experts or visit our FAQ</span>
            </div>
            <div className="step7">
            <div className="se3">
                    <p>GENERAL</p>
                    <div className="se-1">
                    <div className="se1">
                <img src={img11} alt="" className="image2"/>
                <p className="text2">Settings</p>
             </div>
             <div className="se2">
             <img src={img12} alt="" className="image2"/>
             <p className="text2">Log out</p>
             </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default Sidebar1;