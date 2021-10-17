import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Regist from "../pages/regist";
import List from "../pages/List";
import Detail from "../pages/detail";
import Sidebar from '../components/sidebar'

export default () =>
(
    <>

        <Switch>
            <Route path="/" component={Dashboard} exact></Route>
            <Route key="regist" path="/regist" exact component={Regist}></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route key="update" path="/modify/:employeeNo" component={Regist}></Route>
            <Route path="*" render={() => { return <Redirect to="/" /> }}></Route>
        </Switch>
    </>
)
