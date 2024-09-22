import React from "react";
import ReactDOM from "react-dom/thirdweb-app";
import { BrowserRouter as Router } from "react-router-dom";
import {ChainId, Thirdwebprovider } from "@thirdweb-dev/react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Thirdwebprovider desiredChainId={ChainId.Goerli}>

    </Thirdwebprovider>
)