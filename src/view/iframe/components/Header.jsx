import React, { useContext } from 'react';
import style from '../style/header.module.less';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { natType as natTypeContext } from '../index';

export default () => {

    const {navInline, setNavInline} = useContext(natTypeContext);



    function resultNavBtn () {
        if (navInline)
            return <MenuFoldOutlined className={style.icon_header} onClick={() => setNavInline(false)} />
        return <MenuUnfoldOutlined className={style.icon_header} onClick={() => setNavInline(true)} />
    }


    return (
        <header className={style.layout_header}>
            {
                resultNavBtn()
            }


        </header>
    )
}