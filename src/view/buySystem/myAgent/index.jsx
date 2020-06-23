import React, { useState, useEffect } from 'react';
import ListPage from '../../../components/listPage';
import api from '@/api/require';

function useTableData (defaultArray = []) {
    const [array, setArrar] = useState(defaultArray);

    return [
        array,
        setArrar
    ]
}
export default () => {
    const [columns] = useTableData(
        [
            {
                dataIndex: "houseNo",
                title: "房源编号",
                width: "170",
            },
            {
                dataIndex: "communityName",
                title: "小区名称",
                width: "150",
            },
            {
                dataIndex: "buildingName",
                title: "楼栋号",
                width: "90",
            },
            {
                dataIndex: "roomNo",
                title: "房间号",
                width: "110"
            },
            {
                dataIndex: "inArea",
                title: "面积(m²)",
                width: "110"
                //   formart: item => item.inArea + "m²"
            },
            {
                dataIndex: "price",
                title: "售价(万元)",
                width: "120"
                //      formart: item => item.price + "万元"
            },
            {
                dataIndex: "unitPrice",
                title: "单价(元/㎡)",
                width: "130"
                //  format: item => item.unitPrice + "元/㎡"
            },
            {
                dataIndex: "seenNum",
                label: "被看次数",
                width: "120"
            },
            {
                dataIndex: "outfollow",
                title: "未跟进天数",
                width: "120"

            },
            // {
            //     dataIndex: "noSeenDay",
            //     title: "未被看天数",
            //     width: "120"
            // },
            // {
            //     dataIndex: "addTime",
            //     title: "添加时间",
            //     width: "120",
            // },
            {
                dataIndex: "agentName",
                title: "跟单人",
                width: "120"
            },
            {
                dataIndex: "houseType",
                title: "户型",
                width: "150",
                // order: false,
                // disabled: false,
                // default: true,
                // formart: item =>
                //   (item.rooms || 0) +
                //   "室" +
                //   (item.hall || 0) +
                //   "厅" +
                //   (item.toilet || 0) +
                //   "卫"
            },
            {
                dataIndex: "face",
                title: "朝向",
                width: "120",

            },
            {
                dataIndex: "floor",
                title: "楼层",
                width: "120",

            },
            {
                dataIndex: "decoration",
                title: "装修",
                width: "120",

            },
            {
                dataIndex: "addName",
                title: "添加人",
                width: "120",

            }
        ]
    );
    const [data, setData] = useTableData([]);

    useEffect(() => {
       
         getData().then((e)=>{
             setData(e);
             console.log(e);
        //     console.log(e);
         })

    //// eslint-disable-next-line react-hooks/exhaustive-deps
    },[setData])

    function getData () {
        return api.post({
            url: "/myHouse/getMyAgent",
            data: {
                agentName: "",
                cbId: "",
                comId: "",
                customName: "",
                houseNo: "",
                isKey: "",
                isOnly: "",
                limit: 5,
                maxInArea: "",
                maxPrice: "",
                minInArea: "",
                minPrice: "",
                page: 1,
                roomNo: "",
                sortColumn: "id",
                sortType: "descending",
                tel: "",
                treeAccount: "",
                treeCompany: "",
                treeDepartment: ""
            },
            headers: { "Content-Type": "application/json;charset=UTF-8" }
        })
            .then(e => {
                if(e.data.code === 200){
                   return e.data.data.data;
                }
                else
                    return [];
            })
            .catch(e => {
                console.log(e);
            });
    }



    return (
        <div>

            <ListPage
                columns={columns}
                rowKey="id"
                data={data}>
            </ListPage>
        </div>
    )
}