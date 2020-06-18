import loadable from '../../../utils/loadable';

const buySystem = loadable(()=>import("../../buySystem/buyIframe/index.jsx"));

export default  [
    {
        path:"/",
        exact:true,
        component:buySystem
    },
]