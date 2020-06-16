import React, { useContext } from 'react';
import style from '../style/logo.module.less';
import { Link } from "react-router-dom";
import { natType as natTypeContext } from '../index';

export default () => {

    const {navInline} = useContext(natTypeContext);

    return (

        <div className={style.logo}>

            <Link to="/iframe" className={style.logo_nav}>

                <img src="https://preview.pro.ant.design/static/logo.f0355d39.svg" alt="" />

                {navInline ? null : <h1>鑫家网</h1>}

            </Link>
        </div>
    )
}