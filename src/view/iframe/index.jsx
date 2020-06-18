import React, { useState } from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Logo from './components/Logo';
import style from './less/style.module.less';
import RouterHandle from './router/index';
export const natType = React.createContext(false);

export default () => {

    const [navInline, setNavInline] = useState(false);

    return (
        <natType.Provider value={{ navInline, setNavInline }}>

            <div className={style.layout}>
                <section className={style.nav_content}>
                    <Logo />
                    <Menu />
                </section>
                <section className={style.body_content}>
                    <Header />
                    <main >
                        <RouterHandle /> 
                    </main>
                </section>
            </div>

        </natType.Provider>
    )
}