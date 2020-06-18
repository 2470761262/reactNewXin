import React, { useState, useCallback  } from 'react';
import { Tabs } from 'antd';
import routerMap from './router';
import style from '../less/routerNav.module.less';
const { TabPane } = Tabs;


function useParentChange () {
    const [activeName, setActiveName] = useState("1");
    return {
        activeName,
        setActiveName
    }
}


export default () => {

    const { activeName, setActiveName } = useParentChange();

    function parentChange (e) {
        setActiveName(e);
    }

    const renderChildren =  useCallback(children=>{
       // console.log(activeName);
        return (
            children.map((item, index) => {
                return <TabPane tab={item.name} key={index} ></TabPane>
            })
        )
    },[])

    return (
        <div className={style.nav_content}>

            <Tabs defaultActiveKey="1" type="card"  onChange={parentChange}>
                {
                    routerMap.map((item) => {
                        return <TabPane tab={item.name} key={item.active} />
                    })
                }
            </Tabs>
            {
                routerMap.map((item, index) => {
                    if(item.active === activeName){
                        return <Tabs defaultActiveKey="0" size="small" key={index}>
                                {
                                    item.children ? renderChildren(item.children) : null
                                }
                            </Tabs>
                    }else{
                        return null;
                    }
                })
            }

        </div>
    );
}