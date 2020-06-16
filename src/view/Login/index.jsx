import React, { useState, useEffect } from 'react';
import { Input, Button, notification } from 'antd';
import style from './style.module.less';
import validate from '../../utils/validate';
import api from '../../api/require';

const descriptor = {
    accout: {
        required: true,
        message: "账号不能为空"
    },
    passWord: {
        required: true,
        message: "密码不能为空"
    }
};

function useInputChange () {
    const [inputValue, setInputValue] = useState("");
    return {
        inputValue,
        setInputValue
    }
}

function useErrorBags () {

    const [errorFields, setErrorFields] = useState({});

    useEffect(() => {
        console.log(errorFields, "errorFields");

    }, [errorFields])

    return {
        errorFields,
        setErrorFields
    }
}

function Login (props) {
   
    const { inputValue: nameInput, setInputValue: setName } = useInputChange();

    const { inputValue: passWordInput, setInputValue: setPassWord } = useInputChange();

    const { errorFields, setErrorFields } = useErrorBags();



    function handelSubmit () {
        const validator = validate(descriptor);
        validator.validate({ accout: nameInput, passWord: passWordInput }, (errors, fields) => {
            if (errors) {
                setErrorFields(fields);
                return;
            }
            setErrorFields({})
            notification.success({
                message: '成功喽',
                description:
                    '阿sir,一切正常!',
            });

            getUserMessage();
        });
    }

    function getUserMessage () {
        api.post({
            url: "/loginManager/pcLogin",
            data: {
                clientId: 0,
                passWord: "96E79218965EB72C92A549DD5A330112",
                qrCode: "",
                sessionId: "sssss",
                userName: "15280398053",
            },
            headers: { "Content-Type": "application/json;charset=UTF-8" }
        })
            .then(e => {
                props.history.push({pathname:'iframe'});
            })
            .catch(e => {
                console.log("【【【【uups,登录失败】】】】");
                console.log(e);
            });
    }



    return (
        <div className={style.page_login_home}>
            <div className={style.page_cell_head}></div>
            <div className={style.page_cell_content}>
                <div className={style.page_cell_login}>
                    <div className={style.page_cell_account}>
                        <div className={style.account_cell_title}>用户名:</div>
                        <div className="input_content">
                            <Input value={nameInput} onChange={(e) => { setName(e.target.value) }}></Input>
                            {errorFields['accout'] ? <div className={style.error_msg}>{errorFields['accout'][0].message}</div> : null}
                        </div>
                        <div className="account-cell-title">密码:</div>
                        <div >
                            <Input.Password value={passWordInput} onChange={(e) => { setPassWord(e.target.value) }} />
                            {errorFields['passWord'] ? <div className={style.error_msg}>{errorFields['passWord'][0].message}</div> : null}
                        </div>
                        <Button type="primary" onClick={handelSubmit}>登陆</Button>
                    </div>
                </div>
            </div>
            <div className="page-cell-floot"></div>
        </div>
    );
}

export default Login;