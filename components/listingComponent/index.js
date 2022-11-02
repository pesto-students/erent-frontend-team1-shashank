import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { CustomCard } from '@components/Common/CustomCard/style';
import { FlexWrapContainer, SubTitle, Title } from '@components/Common/UIElements';
import { useRouter } from 'next/router'
export default function index() {

    const [listingData,setListingData]=useState([])
const router=useRouter()
    useEffect(() => {
axios.get('https://api.staging.homelisti.com/api/v1/listings').then(res=>setListingData(res.data.data))
    },[])
    return (
        <FlexWrapContainer>
            {listingData.length && 
            listingData
                .map((el) => {
                    return (
                        <CustomCard onClick={()=>router.push(`/listings/${el.slug}}`)}>
                            <img src={el.img} style={{ width: "100%" }} />
                            <div
                                style={{
                                    borderBottom: " 1px solid #80808033;",
                                }}
                            >
                                <Title>{el.type}</Title>
                                <SubTitle>{el.title}</SubTitle>
                                <div
                                    style={{
                                        display: "flex",
                                        marginBottom: "14px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "30px",
                                            height: "30px",
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
                                    <Title>{el.country}</Title>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    marginTop: "10px",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-end",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                        }}
                                    >
                                        <img
                                            src="https://i.pinimg.com/originals/1e/2f/28/1e2f28c0537debcf003afc48375d2775.jpg"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "50%",
                                                fontFamily: "Roboto",
                                            }}
                                        />
                                    </div>
                                    <p
                                        style={{
                                            fontWeight: 400,
                                            fontSize: "14px",
                                            color: "#70778B",
                                            marginLeft: "5px",
                                        }}
                                    >
                                        {el.owner_name}
                                    </p>
                                </div>
                                <p
                                    style={{
                                        fontWeight: 700,
                                        fontSize: "24px;",
                                        color: "#13B18C",
                                        margin: 0,
                                    }}
                                >
                                    {el.monthlyPrice}
                                    <span
                                        style={{
                                            color: "#A7C9C1",
                                            fontSize: "16px;",
                                        }}
                                    >
                                        /month
                                    </span>
                                </p>
                            </div>
                        </CustomCard>
                    );
                })}
        </FlexWrapContainer>
    )
}
