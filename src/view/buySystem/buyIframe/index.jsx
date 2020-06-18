import React from 'react';
import RouterNav from './routerNav/index';
import RouterHandle from './router/index';
import style from './less/index.module.less';
export default ()=>{
    return (
        <div className={style.main_content}>
             <RouterNav />
             <section className={style.main_body}>
                   <RouterHandle />
             </section>
        </div>

    )
}