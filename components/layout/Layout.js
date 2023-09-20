import { Fragment } from "react";
import MainNavigator from "./MainNavigation";

export default function Layout(props) {
    const { children } = props
    return (
        <Fragment>
            <MainNavigator />
            <main>{children}</main>
        </Fragment>
    )
}