import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { NextPageContext } from "next";
import json from "../systems.json";
import { Data } from "../src/types";
import List from "../components/List";

interface Props {
    data: Data[];
}

const Dashboard = (props: Props) => {
    const { data } = props;
    return (
        <Container>
            <Typography align="center" variant="h5" color="primary">
                Systems
            </Typography>
            <List data={data} />
        </Container>
    );
};

// eslint-disable-next-line
export async function getStaticProps(ctx: NextPageContext) {
    // todo fetch the data async with fetch and set in to the props
    const formattedData = json.data.map((v) => {
        const { name, type, site, children, id } = v;
        return {
            name,
            type,
            site,
            children: Array.isArray(children)
                ? children.map((item) => ({
                      id: item.id,
                      type: item.type,
                      site: item.site,
                      children: item.children || [],
                      name: item.name,
                  }))
                : [],
            id,
        };
    });
    return { props: { data: formattedData } };
}

export default Dashboard;
