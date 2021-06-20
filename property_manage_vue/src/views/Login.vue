<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="../../public/wuye.png" alt />
            </div>
            <!--表单区域-->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm login_form">
                <el-form-item label="账号" prop="username">
                    <el-input class="input_form"  type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input class="input_form" type="password"  v-model="ruleForm.pwd" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            var username = (rule, value, callback) => {
                //用户名正则，4到16位（字母，数字，下划线，减号）
                var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else if(!uPattern.test(value)) {
                    callback(new Error('账号格式不对'));
                }
                else{
                    callback();
                }
            };
            var pwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    username: '',
                    pwd: '',
                },
                rules: {
                    username: [
                        { validator: username, trigger: 'blur' }
                    ],
                    pwd: [
                        { validator: pwd, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //发送请求登录验证

                        // 将登录成功之后的token保存到客户端的sessionStorage中
                        // window.sessionStorage.setItem('token', res.data.token)
                        //通过编程式到路由导航到管理员主页
                        this.$router.replace('/adminIndex')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style scoped>
    .login_container {
        height: 100vh;
        background: #2b4b6b;
    }
    .login_box {
        width: 450px;
        height: 300px;
        background: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .avatar_box {
        padding: 10px;
        width: 110px;
        height: 110px;
        border: 1px solid #eee;
        border-radius: 50%;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
    }
    .avatar_box img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #eee;
    }
    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .input_form{
        width: 260px;
    }
    .btns {
        margin-left: 40px;
        margin-top: 30px;
    }
</style>
