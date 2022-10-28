import React from "react";

import { SubTitle } from "@components/Common/UIElements";
import { DateSelection, TourSelectionButton } from "./style";
import TourForm from "./tourForm";
import { CustomButton } from "@components/Common/CustomButton/style";
import Link from "next/link";

export default function index() {
    return (
        <div className="description">
            <SubTitle>Scheduled a Tour</SubTitle>
            <div className="flex">
                <DateSelection>
                    <span>Thu</span>
                    <span>28</span>
                    <span>Jul</span>
                </DateSelection>
                <DateSelection>
                    <span>Thu</span>
                    <span>28</span>
                    <span>Jul</span>
                </DateSelection>
                <DateSelection>
                    <span>Thu</span>
                    <span>28</span>
                    <span>Jul</span>
                </DateSelection>
                <DateSelection>
                    <span>Thu</span>
                    <span>28</span>
                    <span>Jul</span>
                </DateSelection>
                <DateSelection>
                    <span>Thu</span>
                    <span>28</span>
                    <span>Jul</span>
                </DateSelection>
                <DateSelection>
                    <span>Thu</span>
                    <span>28</span>
                    <span>Jul</span>
                </DateSelection>
                <DateSelection>
                    <span>Thu</span>
                    <span>28</span>
                    <span>Jul</span>
                </DateSelection>
            </div>
            <>
                <SubTitle>Tour Type</SubTitle>
                <div className="flex ">
                    <TourSelectionButton>In Person</TourSelectionButton>
                    <Link href="/chat">
                        <TourSelectionButton>Video Chat</TourSelectionButton>
                    </Link>
                </div>
                <TourForm />
            </>
        </div>
    );
}
