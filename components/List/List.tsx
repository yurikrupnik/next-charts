import React, { memo } from "react";
import { Data } from "../../src/types";
import Item from "../Item";

interface Props {
    data: Data[];
}

const List = (props: Props) => {
    const { data } = props;
    return (
        <>
            {data.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </>
    );
};

export default memo(List);
