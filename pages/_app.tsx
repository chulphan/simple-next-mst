import { Provider } from "mobx-react";
import { getSnapshot } from "mobx-state-tree";
import App, { Container } from "next/app";
import React from "react";
import { initStore } from "../stores/RootStore";

class ChulPhanApp extends App {
    public static async getInitProps({ Component, router, ctx }) {

        const isServer = (typeof window === "undefined")
        const store = initStore(isServer)

        let pageProps = {};
        if (Component.getInitProps) {
            pageProps = await Component.getInitProps(ctx);
        }

        return {
            initState: getSnapshot(store),
            isServer,
            pageProps,
        }
    }

    private store;

    constructor(props) {
        super(props);
        this.store = initStore(props.isServer, props.initState);
    }

    public render() {
        const { Component, pageProps } = this.props;
        console.log(this.store);
        return (
            <Container>
                <Provider store={this.store}>
                    <Component {...pageProps}/>
                </Provider>
            </Container>
        )
    }
}

export default ChulPhanApp;