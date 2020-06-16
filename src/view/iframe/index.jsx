import React, { useState } from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Logo from './components/Logo';
import style from './style/style.module.less';

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

                    </main>
                </section>
            </div>

        </natType.Provider>
    )
}