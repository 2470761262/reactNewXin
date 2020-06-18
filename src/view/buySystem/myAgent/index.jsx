import React,{useState} from 'react';
import ListPage from '../../../components/listPage';


function useTableData (defaultArray = []){
    const [array ,setArrar] =  useState(defaultArray);

    return [
        array,
        setArrar
    ]
}
export default ()=>{
    const [columns] =  useTableData(
        [
           
            {
                title: "房源编号",
                width: "170",
                dataIndex: 'houseNo',
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
        ]
    );
    const [data ] =  useTableData(
        [ {id: 119615, houseNo: "X+CS433168509267275776", communityName: "南城自建房", comId: 1},
        {id: 119614, houseNo: "X+CS432870847070531584", communityName: "龙门自建房", comId: 6},
        {id: 119613, houseNo: "X+CS432859652481544192", communityName: "龙地华府", comId: 5, buildingName: "3"},
        {id: 119612, houseNo: "X+CS432858610394132480", communityName: "龙地华府", comId: 5, buildingName: "2"},
        {id: 119611, houseNo: "X+CS432795439054647296", communityName: "北大·燕园一期", comId: 7, buildingName: "2"},
        {id: 119610, houseNo: "X+CS432802994149584896", communityName: "龙地华府", comId: 5, buildingName: "1"},
        {id: 119608, houseNo: "X+CS431264763507568640", communityName: "晟龙.阳光美地", comId: 21, buildingName: "1"},
        {id: 119606, houseNo: "X+CS431260675097161728", communityName: "天龙富贵城", comId: 270, buildingName: "单"},
        {id: 119605, houseNo: "X+CS431253618495254528", communityName: "龙厦铁路安置小区(小洋)", comId: 289},
        {id: 119604, houseNo: "X+CS430865786358394880", communityName: "南城自建房", comId: 1}]
    );
    return (
        <div>
            
            <ListPage 
                columns={columns}
                data={data}>
            </ListPage>
        </div>
    )
}