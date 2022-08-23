import { Button, Form } from "antd";
import RangeSlider from './RangeSlider';
const BannerForm = () =>{
    return(
        <>
            <div className="bannerForm">
                    <h2>Find Your Accessible Homes For Rent</h2>
                    <Form>
                        <input type='text' placeholder="What are you looking for?" />
                        <select >
                            <option value='Property Type'>Property Type</option>
                            <option value='Test'>Test</option>
                        </select>
                        <select >
                            <option value='Property Type'>All Categories</option>
                            <option value='Test'>Test</option>
                        </select>
                        <select >
                            <option value='Property Type'>All Cities</option>
                            <option value='Test'>Test</option>
                        </select>
                        <div className="rangeSliderDiv">
                            <RangeSlider />
                        </div>
                        <div className="formControl">
                            <Button type="Submit" className="findproperty">Find Property</Button>
                            <Button type="reset" className="reset">Reset</Button>
                        </div>
                    </Form>
                </div>
        </>
    )
}

export default BannerForm;