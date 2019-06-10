const express = require('express');
const router = express.Router();
const connection = require('../mysql/dbConnection');
const config = require('../config/config');


//登录
router.post('/login',(req, res, next) => {
    console.log(req.body);
    const resData = JSON.parse(JSON.stringify(config.resJson));
    const { user_phone,user_pwd } = req.body.args;
    // 定义sql语句
    const sql = `SELECT * FROM user_info where user_phone = "${user_phone}" and user_pwd = "${user_pwd}"`;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            // 发生错误回传错误提示
            resData.retcode = 0;
            resData.error = err.message;
            res.send(resData);
        } else {
            if (results.length !==0) {
                // 登录成功
                console.log(results);
                resData.obj.list = results;
                resData.retcode = 200;
                res.send(resData);
            } else {
                // 登录失败

                console.log(results.affectedRows);
                resData.obj.list = results;
                resData.retcode = 0;
                res.send(resData);
            }
        }
    });
});
//注册
router.post('/entry', (req, res, next) => {
    const resData = JSON.parse(JSON.stringify(config.resJson));
    const { user_phone, user_pwd} = req.body.args;
    // 定义sql语句
    const sql = `INSERT INTO user_info(user_phone,user_pwd) VALUES("${user_phone}", "${user_pwd}");`;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            // 发生错误回传错误提示
            resData.retcode = -1;
            resData.error = err.message;
            res.send(resData);
        } else {
            // 数据返回
            console.log(results);
            resData.retcode = 200;
            res.send(resData);

        }
    });
});
//下单
router.post('/orderInsert', (req, res, next) => {
    const resData = JSON.parse(JSON.stringify(config.resJson));
    const { shoe_id,user_phone,shoe_size} = req.body.args;
    // 定义sql语句
    const sql = `INSERT INTO order_info (shoe_id,user_phone,shoe_size) VALUES( "${shoe_id}","${user_phone}","${shoe_size}");`;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            // 发生错误回传错误提示
            resData.retcode = -1;
            resData.error = err.message;
            res.send(resData);
        } else {
            // 数据返回
            console.log(results);
            resData.retcode = 200;
            res.send(resData);
        }
    });
});
// 订单
router.post('/cartList', (req, res, next) => {
    const resData = JSON.parse(JSON.stringify(config.resJson));
    const { user_phone } = req.body.args;
    // 定义sql语句
    const sql = `SELECT * FROM order_info where user_phone ="${user_phone}"`;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            // 发生错误回传错误提示
            resData.retcode = -1;
            resData.error = err.message;
            res.send(resData);
        } else {
            // 数据返回
            console.log(results);
            resData.obj.list = results;
            res.send(resData);
        }
    });
});
// 查看关注列表
router.post('/concernList', (req, res, next) => {
    const resData = JSON.parse(JSON.stringify(config.resJson));
    const { user_phone } = req.body.args;
    // 定义sql语句
    const sql = `SELECT * FROM concern_info where user_phone ="${user_phone}"`;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            // 发生错误回传错误提示
            resData.retcode = -1;
            resData.error = err.message;
            res.send(resData);
        } else {
            // 数据返回
            console.log(results);
            resData.obj.list = results;
            res.send(resData);
        }
    });
});
// 关注球鞋
router.post('/concern', (req, res, next) => {
    const resData = JSON.parse(JSON.stringify(config.resJson));
    const { user_phone,shoe_id } = req.body.args;
    // 定义sql语句
    const sql =  `INSERT INTO concern_info(user_phone,shoe_id) VALUES("${user_phone}", "${shoe_id}");`;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            // 发生错误回传错误提示
            resData.retcode = -1;
            resData.error = err.message;
            res.send(resData);
        } else {
            // 数据返回
            console.log(results);
            resData.obj.list = results;
            res.send(resData);
        }
    });
});
// 注销
router.post('/logout', (req, res, next) => {
    const resData = JSON.parse(JSON.stringify(config.resJson));
    const { user_phone } = req.body.args;
    // 定义sql语句
    const sql = `DELETE FROM user_info WHERE user_phone = "${user_phone}"`;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            // 发生错误回传错误提示
            resData.retcode = -1;
            resData.error = err.message;
            res.send(resData);
        } else {
            if (results.affectedRows === 1) {
                // 删除成功
                res.send(resData);
            } else {
                // 删除失败
                resData.retcode = -1;
                res.send(resData);
            }
        }
    });
});

//显示各个商标球鞋
router.post('/searchShoesWithBrand',(req, res, next) => {
    console.log(req.body);
    const resData = JSON.parse(JSON.stringify(config.resJson));
    const { shoes_brand} = req.body.args;
    // 定义sql语句
    const sql = `SELECT * FROM shoesitem where shoesbrand = "${shoes_brand}"`;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            // 发生错误回传错误提示
            resData.retcode = 0;
            resData.error = err.message;
            res.send(resData);
        } else {
            if (results.length !==0) {
                // 登录成功
                console.log(results);
                resData.obj.list = results;
                resData.retcode = 200;
                res.send(resData);
            } else {
                // 登录失败

                console.log(results.affectedRows);
                resData.obj.list = results;
                resData.retcode = 0;
                res.send(resData);
            }
        }
    });
});
//显示首页球鞋
router.post('/searchShoesAll',(req, res, next) => {
    console.log(req.body);
    const resData = JSON.parse(JSON.stringify(config.resJson));
    const { } = req.body.args;
    // 定义sql语句
    const sql = `SELECT * FROM shoesitem `;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            // 发生错误回传错误提示
            resData.retcode = 0;
            resData.error = err.message;
            res.send(resData);
        } else {
            if (results.length !==0) {
                // 登录成功
                console.log(results);
                resData.obj.list = results;
                resData.retcode = 200;
                res.send(resData);
            } else {
                // 登录失败

                console.log(results.affectedRows);
                resData.obj.list = results;
                resData.retcode = 0;
                res.send(resData);
            }
        }
    });
});
//显示搜索的球鞋
router.post('/searchShoes',(req, res, next) => {
    console.log(req.body);
    const resData = JSON.parse(JSON.stringify(config.resJson));
    const { shoes_name } = req.body.args;
    // 定义sql语句
    const sql = `SELECT * FROM shoesitem where shoesname REGEXP "${shoes_name}"`;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            // 发生错误回传错误提示
            resData.retcode = 0;
            resData.error = err.message;
            res.send(resData);
        } else {
            if (results.length !==0) {
                // 登录成功
                console.log(results);
                resData.obj.list = results;
                resData.retcode = 200;
                res.send(resData);
            } else {
                // 登录失败

                console.log(results.affectedRows);
                resData.obj.list = results;
                resData.retcode = 0;
                res.send(resData);
            }
        }
    });
});


module.exports = router;
