import React from "react";
import { render, cleanup } from "@testing-library/react";
import Component from "../index";
import { Data } from "../../../src/types";

const { it, afterEach } = global;

afterEach(cleanup);

it("should render Item component", () => {
    const mock: Data = {
        children: [],
        id: "12",
        name: "stam name",
        site: {
            name: "name of site",
        },
        type: {
            name: "name of type",
        },
    };
    render(<Component item={mock} />);
});
