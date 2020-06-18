import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import style from './less/listPage.module.less';

const ListPage = (props) => {
    const { header, left, nav, columns, data } = props;

    return (

        <div className={style.list_page}>
            {
                header ? <div className={style.list_page_header}>{header}</div> : null
            }
            <div className={style.list_page_content}>
                {
                    left ? <div className={style.list_page_left}>{left}</div> : null
                }
                <div className={style.list_page_right}>

                    <Table columns={columns} dataSource={data} />

                </div>
                {
                    nav ? <div className={style.list_page_nav}>{nav}</div> : null
                }
            </div>
        </div>
    )
}

ListPage.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}

// //设置Props 默认值
ListPage.defaultProps = {
    columns:[],
    data:[]
};

export default ListPage;