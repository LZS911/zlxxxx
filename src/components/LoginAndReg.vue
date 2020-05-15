<template>
    <div :class="[{'right-panel-active':isRightActive},'main-container']">
        <div class="Login-reg">
            <div class="reg-container form-container">
                <h2>注册</h2>
                <div class="social-container">
                    <a href="#">qq &nbsp;</a>
                    <a href="#">wx &nbsp;</a>
                    <a href="#">wb &nbsp;</a>
                </div>
                <span>请使用以上方式登录或使用您的账号</span>
                <input type="text" placeholder="账号" />
                <input type="text" placeholder="邮箱" />
                <input type="text" placeholder="密码" />
                <button>注册</button>
            </div>
            <div class="login-container form-container">
                <h2>登录</h2>
                <div class="social-container">
                    <a href="#">qq &nbsp;</a>
                    <a href="#">wx &nbsp;</a>
                    <a href="#">wb &nbsp;</a>
                </div>
                <span>请使用以上方式登录或使用您的账号</span>
                <input type="text" placeholder="账号" />
                <input type="text" placeholder="密码" />
                <button>登录</button>
            </div>

            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h2>已有帐号?</h2>
                        <p>请使用您的账号登录</p>
                        <button class="ghost" id="signIn" @click="singIn">登录</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h2>没有帐号?</h2>
                        <p>立刻注册加入我们,和我们一起开始旅程吧.</p>
                        <button class="ghost" id="signUp" @click="singUp">注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            isRightActive: false
        };
    },
    watch: {},
    computed: {},
    methods: {
        singUp() {
            this.isRightActive = true;
        },
        singIn() {
            this.isRightActive = false;
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.main-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.Login-reg {
    background: #f6f5f7;
    font-family: Arial, Helvetica, sans-serif;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}
a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    margin: 15px 0;
}
p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}
span {
    font-size: 12px;
}

.form-container {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.social-container {
    margin: 10px 0;
}
.social-container a {
    border: 1px solid #ddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}
.form-container input {
    border: none;
    background: #eee;
    width: 100%;
    padding: 12px 15px;
    margin: 5px 0;
    border-radius: 4px;
    font-size: 16px;
}
button {
    border-radius: 10px;
    border: 1px solid #ff4b2b;
    background: #ff4b2b;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 12px 30px;
    letter-spacing: 1px;
    transition: transform 80ms ease-in;
}
button:active {
    transform: scale(0.95);
}
button:focus {
    outline: none;
}
button.ghost {
    background: transparent;
    border-color: #fff;
}
.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-out;
}
.login-container {
    left: 0;
    width: 50%;
    z-index: 2;
}
.reg-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}
.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}
.overlay {
    background: #ff416c;
    background: linear-gradient(to right, #ff4b2b, #ff416c) no-repeat 0 0 /
        cover;
    color: #fff;
    height: 100%;
    width: 200%;
    position: relative;
    left: -100%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}
.overlay-panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    padding: 0 40px;
    text-align: center;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}
.overlay-right {
    right: 0;
    transform: translateX(0);
}
.overlay-left {
    transform: translateX(-20%);
}
.right-panel-active .login-container {
    opacity: 0;
    transform: translateX(100%);
}
.right-panel-active .overlay-container {
    transform: translateX(-100%);
}
.right-panel-active .reg-container {
    opacity: 1;
    z-index: 5;
    transform: translateX(100%);
}
.right-panel-active .overlay {
    transform: translateX(50%);
}
.right-panel-active .overlay-left {
    transform: translateX(0);
}
.right-panel-active .overlay-right {
    transform: translateX(20%);
}
</style>