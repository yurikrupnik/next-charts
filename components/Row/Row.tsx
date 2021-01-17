import React, { useCallback, memo } from "react";
import { useRouter } from "next/router";
import kebabCase from "lodash/kebabCase";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Data } from "../../src/types";

interface Props {
    item: Data;
}

const Row = (props: Props) => {
    const { item } = props;
    const router = useRouter();

    const handleClick = useCallback(() => {
        router.push(`/${kebabCase(item.type.name)}`);
    }, [item]);

    return (
        <Grid onClick={handleClick} container style={{ cursor: "pointer" }}>
            <Grid item xs={4}>
                <Typography variant="caption">Type: {item.type.name}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="caption" color="textSecondary">
                    Name: {item.name}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="caption" color="textSecondary">
                    Site: {item.site.name}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default memo(Row);
