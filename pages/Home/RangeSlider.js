import React from "react";
import { Slider, InputNumber } from "antd";
import "antd/dist/antd.css";
class RangeSlider extends React.Component {
    state = {
        min: 1000,
        max: 9000,
    };

    onChange = (value) => {
        if (value[0] < value[1]) {
            this.setState({ min: value[0], max: value[1] });
        }
    };

    onChangeMin = (value) => {
        if (this.state.max > value) {
            this.setState({ min: value });
        }
    };
    onChangeMax = (value) => {
        if (this.state.min < value) {
            this.setState({ max: value });
        }
    };

    onAfterChange = (value) => {
        console.log("onAfterChange: ", value);
    };
    render() {
        const { max, min } = this.state;
        return (
            <div className="RangeSlider">
                <div className="range-input-number-main">
                    <div className="rangePrice">
                    <span className="range-span"> $ </span>
                        <InputNumber
                            className="min-input-main"
                            min={0}
                            max={10000}
                            value={min}
                            onChange={this.onChangeMin}
                            readonly
                        />
                        <span className="range-span"> - </span>
                        <span className="range-span"> $ </span>
                        <InputNumber
                            className="min-input-main"
                            min={0}
                            max={10000}
                            value={max}
                            onChange={this.onChangeMax}
                            readonly
                        />
                    </div>
                    <div className="RangeSliderDivSection">
                        <p>Price</p>
                        <Slider
                            className="slider-main-div"
                            min={0}
                            max={10000}
                            onChange={this.onChange}
                            range={true}
                            defaultValue={[min, max]}
                            value={[min, max]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default RangeSlider;
