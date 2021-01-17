import React, { useCallback } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import startCase from "lodash/startCase";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { NextPageContext } from "next";
import { useRouter } from "next/router";

// mock data - change to real api requests
import airCompressor from "../charts/air-compressor.json";
import ambientConditions from "../charts/ambient-conditions.json";
import compressedAir from "../charts/compressed-air.json";
import production from "../charts/production.json";
import weather from "../charts/weather.json";
import resources from "../charts/resources.json";
import silo from "../charts/silo.json";
import machine from "../charts/machine.json";
import energySource from "../charts/energy-source.json";
import electricityMain from "../charts/electricity-main.json";

const mockData = {
    "air-compressor": airCompressor,
    production,
    "ambient-conditions": ambientConditions,
    "compressed-air": compressedAir,
    weather,
    resources,
    silo,
    machine,
    "energy-sources": energySource,
    "electricity-main": electricityMain,
};

interface Props {
    options: any;
}

const Id = (props: Props) => {
    const { options } = props;
    const router = useRouter();
    const handleBack = useCallback(() => {
        router.push("/");
    }, []);
    return (
        <Container>
            <Button onClick={handleBack} color="primary">
                Back
            </Button>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </Container>
    );
};

// eslint-disable-next-line
export async function getServerSideProps(ctx: NextPageContext) {
    // todo fetch the real item using id
    const { id } = ctx.query;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const options = { ...mockData[id], title: { text: startCase(id) } };

    return { props: { options } };
}

export default Id;
