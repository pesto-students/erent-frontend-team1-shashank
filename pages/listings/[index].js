import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";
import { SubTitle, Title } from "@components/Common/UIElements";
import { CustomCard } from "@components/Common/CustomCard/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faTags } from "@fortawesome/fontawesome-svg-core";
import { FaCircle, FaCoffee } from "react-icons/fa";
import axios from "axios";
import {
    faCircleCheck,
    faEnvelope,
    faHouse,
    faParking,
    faRestroom,
    faSmile,
    faTags,
} from "@fortawesome/free-solid-svg-icons";
import { LabelContainer, LabelTitle, UlLIst, MainContainer } from "./style";
import TourInfoComponent from "@components/TourInfoComponent";
import TourForm from "@components/TourInfoComponent/tourForm";
import PropertyInfo from '@components/PropertyInfo'

export default function index() {
    const [propertyData, setPropertyData] = useState({})
    const router = useRouter();
    console.log(router.query.index)
    const { index } = router.query;
useEffect(() => {
    if( router?.query?.index?.length){
axios.get(`https://api.staging.homelisti.com/api/v1/listings/${index}`).then(res=>setPropertyData(res.data.data))}
}, [index])
    return (
 <><PropertyInfo data={propertyData}/></>
    );
}
