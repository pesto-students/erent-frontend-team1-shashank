import React,{useState,useEffect} from 'react'
import { CustomCard } from '@components/Common/CustomCard/style'
import { SubTitle, Title } from '@components/Common/UIElements'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faTags } from "@fortawesome/fontawesome-svg-core";
import { FaCircle, FaCoffee } from "react-icons/fa";
import TourInfoComponent from "@components/TourInfoComponent";
import TourForm from "@components/TourInfoComponent/tourForm";
import {
    faCircleCheck,
    faEnvelope,
    faHouse,
    faParking,
    faRestroom,
    faSmile,
    faTags,
} from "@fortawesome/free-solid-svg-icons";
import { LabelContainer, LabelTitle, MainContainer, UlLIst } from 'pages/listings/style'
import { Descriptions } from 'antd';

export default function index({data}) {
    console.log(data)
    const [displayPicture, setDisplayPicture] = useState(data?.images?.[0])
    useEffect(() =>{setDisplayPicture(data.images?.[0])},[data] )
    return (<>{data && 
               <MainContainer>
            <div>
                <p
                    style={{
                        fontWeight: "500;",
                        fontSize: " 22px",
                        color: "#212121",
                    }}
                >
                    Heading
                </p>
                <div>
                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                        >
                            <img
                                src="https://img.icons8.com/dotty/80/000000/order-delivered.png"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                        <Title>{data?.state}</Title>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                        >
                            <img
                                src="https://img.icons8.com/small/16/000000/pocket-watch.png"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                        <Title>4 days ago</Title>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                        >
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/000000/eyes-cartoon.png"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                        <Title>Views 88</Title>
                    </div>
                    <p
                        style={{
                            fontWeight: 700,
                            fontSize: "24px;",
                            color: "#13B18C",
                            margin: 0,
                        }}
                    >
                        4000
                        <span
                            style={{
                                color: "#A7C9C1",
                                fontSize: "16px;",
                            }}
                        >
                            /month (Fixed)
                        </span>
                    </p>
                    <div>
                        <div
                            style={{
                                width: "100%",
                                height: "250px",
                                padding: "5px",
                            }}
                        >
                            <img
                                src={displayPicture}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "16px;",
                                }}
                            />
                        </div>
                        <div style={{ display: "flex" }}>
                            {data?.images?.map((el,index)=><div
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    padding: "5px",
                                }}
                             onClick={()=>setDisplayPicture(data?.images[index])}
                            >
                                <img
                                    src={el}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "16px;",
                                    }}
                                />
                            </div>)}
                            {/* <div
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    padding: "5px",
                                }}
                            >
                                <img
                                    src="https://s7d2.scene7.com/is/image/ritzcarlton/pnrqz-king-50661983?$XlargeViewport100pct$"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "16px;",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    padding: "5px",
                                }}
                            >
                                <img
                                    src="https://s7d2.scene7.com/is/image/ritzcarlton/pnrqz-king-50661983?$XlargeViewport100pct$"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "16px;",
                                    }}
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
                <CustomCard>
                    <SubTitle>Overview</SubTitle>
                    <div>
                        <UlLIst>
                            <li>
                                {" "}
                                <LabelContainer>
                                    <FontAwesomeIcon icon={faTags} />
                                </LabelContainer>
                                <div style={{ marginLeft: "5px" }}>
                                    <LabelTitle>Type</LabelTitle>
                                    <Title style={{ padding: "0" }}>
                                        Apartment
                                    </Title>
                                </div>
                            </li>
                            <li>
                                {" "}
                                <LabelContainer>
                                    <FontAwesomeIcon icon={faHouse} />
                                </LabelContainer>
                                <div style={{ marginLeft: "5px" }}>
                                    <LabelTitle>Type</LabelTitle>
                                    <Title style={{ padding: "0" }}>
                                        Apartment
                                    </Title>
                                </div>
                            </li>
                            <li>
                                {" "}
                                <LabelContainer>
                                    <FontAwesomeIcon icon={faParking} />
                                </LabelContainer>
                                <div style={{ marginLeft: "5px" }}>
                                    <LabelTitle>Parking</LabelTitle>
                                    <Title style={{ padding: "0" }}>Yes</Title>
                                </div>
                            </li>
                            <li>
                                {" "}
                                <LabelContainer>
                                    <FontAwesomeIcon icon={faRestroom} />
                                </LabelContainer>
                                <div style={{ marginLeft: "5px" }}>
                                    <LabelTitle>Bathroom</LabelTitle>
                                    <Title style={{ padding: "0" }}>2</Title>
                                </div>
                            </li>
                            <li>
                                {" "}
                                <LabelContainer>
                                    <FontAwesomeIcon icon={faSmile} />
                                </LabelContainer>
                                <div style={{ marginLeft: "5px" }}>
                                    <LabelTitle>Purpose</LabelTitle>
                                    <Title style={{ padding: "0" }}>Rent</Title>
                                </div>
                            </li>
                        </UlLIst>
                    </div>
                    <div className="description">
                        <SubTitle>About The Listing</SubTitle>
                        <p>
                           {data?.description}
                        </p>
                    </div>
                    <div className="description">
                        <SubTitle>Features & Amenities</SubTitle>
                       {data?.amentities?.map(el=> <div className="flex align-center space-between mt">
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>{el}</div>
                            </div>
                            {/* <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div> */}
                        </div>)}
                        {/* <div className="flex align-center space-between mt">
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div>
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div>
                        </div>
                        <div className="flex align-center space-between mt">
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div>
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div>
                        </div>
                        <div className="flex align-center space-between mt">
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div>
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div>
                        </div>
                        <div className="flex align-center space-between mt">
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div>
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div>
                        </div>
                        <div className="flex align-center space-between mt">
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div>
                            <div className="flex align-center">
                                <LabelContainer
                                    style={{ border: 0, filter: 0 }}
                                >
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </LabelContainer>
                                <div>TV Cable</div>
                            </div>
                        </div> */}
                    </div>
                    <TourInfoComponent />
                </CustomCard>
            </div>
        </MainContainer>}</>
    )
}
