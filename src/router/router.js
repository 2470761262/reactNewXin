import loadable from '../utils/loadable';

const Login = loadable(()=>import("../view/Login/index"));
const Iframe = loadable(()=>import("../view/iframe/index"));

export default  [
    {
        path:"/",
        exact:true,
        component:Login
    },
    {
        path:"/iframe",
        exact:true,
        component:Iframe
    }
]