import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { CustomButton } from "@components/Common/CustomButton/style";
// import TextArea from "antd/lib/input/TextArea";

const TourForm = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                // label="Username"
                name="time"
                rules={[
                    {
                        required: true,
                        message: "Please input Time!",
                    },
                ]}
            >
                <Input placeholder="Time" />
            </Form.Item>

            <Form.Item
                // label="Password"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Please input name!",
                    },
                ]}
            >
                <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
                // label="Password"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: "Please input phone!",
                    },
                ]}
            >
                <Input placeholder="Phone" />
            </Form.Item>

            <Form.Item
                // label="Password"
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email!",
                    },
                ]}
            >
                <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
                // label="Password"
                name="msg"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
            >
                <Input.TextArea placeholder="Enter Your message" />
            </Form.Item>

            <Form.Item
            // wrapperCol={{
            //     offset: 8,
            //     span: 16,
            // }}
            >
                <CustomButton
                    type="primary"
                    htmlType="submit"
                    style={{
                        width: "100%;",
                        background: "#53d8bb;",
                        border: "none",
                        fontFamily: "Inter",
                        fontStyle: "normal;",
                        fontWeight: "800",
                        fontSize: "12px;",
                    }}
                >
                    Submit a Tour Request
                </CustomButton>
            </Form.Item>
        </Form>
    );
};

export default TourForm;
