
/* eslint-disable @next/next/no-img-element */
import { WhyChooseReason } from "./../../style";
import {
    DollarOutlined,
    CalculatorOutlined,
    GlobalOutlined
  } from '@ant-design/icons';

const WhyChoose = () =>{
    return(
        <WhyChooseReason>
            <div className="whychoosereasonbox">
                <div className="avatar"><GlobalOutlined /></div>
                <h3>Property Management</h3>
                <p>when an unknown printer took galley and scrambled itmakepe spear survived not five centuries</p>
            </div>

            <div className="whychoosereasonbox">
                <div className="avatar"><DollarOutlined /></div>
                <h3>Property Management</h3>
                <p>when an unknown printer took galley and scrambled itmakepe spear survived not five centuries</p>
            </div>

            <div className="whychoosereasonbox">
                <div className="avatar"><CalculatorOutlined /></div>
                <h3>Property Management</h3>
                <p>when an unknown printer took galley and scrambled itmakepe spear survived not five centuries</p>
            </div>

            <img className="paralaxImage" src="https://res.cloudinary.com/ruhanrk/image/upload/v1661086808/eRent/paralax-to-left-home-2_e9ecjj.png" alt="why choose paralaax" />
        </WhyChooseReason>
    )
}

export default WhyChoose;