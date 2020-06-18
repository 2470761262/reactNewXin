import loadable from '../../../../utils/loadable';

const MyAgent = loadable(()=>import("../../myAgent/index"));

export default  [
    {
        path:"/",
        exact:true,
        component:MyAgent
    },
]