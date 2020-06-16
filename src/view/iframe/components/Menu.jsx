import React, { useContext } from 'react';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import style from '../style/menu.module.less';
import { natType as natTypeContext } from '../index';


export default () => {

    const { navInline } = useContext(natTypeContext);

    return (
        <div className={navInline ? style.active_inline : style.menu_content}>
            <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={navInline}
            >
                <Menu.SubMenu
                    key="sub0"
                    title={
                        <span>
                            <MailOutlined />
                            <span>新房源系统</span>
                        </span>
                    }
                >
                    <Menu.Item key="1">房源管理</Menu.Item>
                    <Menu.Item key="2">补充楼盘审核</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </div>
    )
}