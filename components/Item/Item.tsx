import React, { memo } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Data } from "../../src/types";
import Row from "../Row";
import List from "../List";

interface Props {
    item: Data;
}

const Item = (props: Props) => {
    const { item } = props;

    return (
        <Paper key={item.id} style={{ marginBottom: "10px" }}>
            <Grid style={{ padding: "15px" }} container>
                <Row item={item} />
                <br />
                <Grid item xs={12}>
                    {Array.isArray(item.children) &&
                        item.children.map((child) => (
                            <Paper key={child.id} style={{ margin: "5px", padding: "15px" }}>
                                <Row item={child as Data} />
                                {Array.isArray(child.children) && child.children.length ? (
                                    <List key={child.id} data={child.children} />
                                ) : null}
                            </Paper>
                        ))}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default memo(Item);
