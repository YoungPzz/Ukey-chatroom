<template>
  <div
    class="user-login-warp"
    :class="{ 'iChat-user-login': type === 'phone' }"
  >
    <div class="user-login-container">
      <div class="user-login-banner" v-if="type === 'pc'"></div>
      <div class="user-login-form-warp">
        <div class="user-login-form">
          <div class="user-login-avatar">
            <!-- //左侧图像 点击图像弹出改变头像 -->
            <img
              :src="user.avatarUrl"
              alt=""
              @mousedown.stop
              class="login-avatar"
              @click.stop="toggleAvatarSelect"
            />

            <!-- 点击选择图像 -->
            <transition name="slide">
              <div class="select-avatar-warp" @mousedown.stop v-show="isShow">
                <div class="avatar-input-warp">
                  <input
                    type="text"
                    class="avatar-input"
                    @keypress.enter="addQQAvatar(qq)"
                    v-model="qq"
                    @click.stop=""
                    placeholder="请输入QQ号码"
                  />
                  <svg
                    @click.stop="randomQQ"
                    t="1603258241849"
                    class="icon-touzi"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3923"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M513.033 512.578m-448.821 0a448.821 448.821 0 1 0 897.642 0 448.821 448.821 0 1 0-897.642 0Z"
                      fill="#76C2AF"
                      p-id="3924"
                    ></path>
                    <path
                      d="M757.434 339.373L565.122 228.339c-27.942-16.135-76.237-16.135-104.179 0L268.632 339.373c-28.722 16.58-52.096 57.055-52.096 90.228v222.054c0 33.174 23.374 73.648 52.096 90.228l192.312 111.034c13.971 8.067 32.469 12.512 52.089 12.512 19.621 0 38.118-4.445 52.089-12.512l192.312-111.034c28.722-16.58 52.096-57.055 52.096-90.228V429.602c0-33.174-23.374-73.648-52.096-90.229z"
                      fill="#231F20"
                      p-id="3925"
                    ></path>
                    <path
                      d="M561.619 206.364c-26.722-15.428-70.45-15.428-97.172 0l-192.309 111.03c-26.722 15.428-48.586 53.298-48.586 84.154v222.06c0 30.856 21.864 68.726 48.586 84.154l192.309 111.03c26.722 15.428 70.45 15.428 97.173 0l192.309-111.03c26.722-15.428 48.586-53.297 48.586-84.154v-222.06c0-30.856-21.864-68.726-48.586-84.154l-192.31-111.03z"
                      fill="#E0E0D1"
                      p-id="3926"
                      data-spm-anchor-id="a313x.7781069.0.i0"
                    ></path>
                    <path
                      d="M513.033 837.373c-19.621 0-38.119-4.438-52.089-12.519L268.632 713.827c-28.722-16.573-52.096-57.048-52.096-90.222V401.551c0-33.174 23.374-73.648 52.096-90.222l192.312-111.027c27.942-16.162 76.237-16.162 104.179 0l192.312 111.027c28.722 16.573 52.096 57.048 52.096 90.222v222.054c0 33.174-23.374 73.648-52.096 90.222L565.122 824.854c-13.971 8.081-32.468 12.519-52.089 12.519z m0-635.565c-17.197 0-33.201 3.78-45.077 10.629L275.645 323.465c-24.435 14.108-45.083 49.87-45.083 78.086v222.054c0 28.216 20.648 63.978 45.083 78.086l192.312 111.027c23.75 13.697 66.403 13.697 90.153 0l192.312-111.027c24.435-14.108 45.083-49.87 45.083-78.086V401.551c0-28.216-20.648-63.978-45.083-78.086L558.109 212.437c-11.875-6.848-27.88-10.629-45.076-10.629z"
                      fill="#E0E0D1"
                      p-id="3927"
                    ></path>
                    <path
                      d="M513.033 482.075c-15.751 0-30.9-3.534-41.57-9.691L279.151 361.351c-8.28-4.78-13.033-10.574-13.033-15.909 0.007-5.321 4.753-11.122 13.033-15.895l192.312-111.034c10.67-6.164 25.819-9.697 41.57-9.697 15.751 0 30.9 3.534 41.57 9.691l192.312 111.041c8.28 4.773 13.026 10.574 13.033 15.895 0 5.335-4.753 11.129-13.033 15.909L554.603 472.378c-10.67 6.163-25.819 9.697-41.57 9.697zM483.699 811.349c-4.205 0-9.245-1.623-14.574-4.698L276.814 695.61c-22.538-13.005-41.577-45.981-41.577-72.005V401.551c0-6.198 1.267-20.614 12.978-20.614 4.198 0 9.239 1.63 14.574 4.712l192.312 111.027c22.531 13.012 41.57 45.987 41.57 72.005v222.061c0 7.253-1.568 13.204-4.424 16.758-2.111 2.63-4.83 3.849-8.548 3.849zM540.036 811.349c-11.711 0-12.978-14.409-12.978-20.607V568.681c0-26.017 19.039-58.993 41.57-72.012l192.312-111.02c5.335-3.082 10.375-4.712 14.574-4.712 11.711 0 12.978 14.416 12.978 20.614v222.054c0 26.024-19.039 58.-41.577 72.005L554.603 806.644c-5.328 3.082-10.369 4.705-14.567 4.705z"
                      fill="#FFFFFF"
                      p-id="3928"
                    ></path>
                    <path
                      d="M513.033 365.309c-17.738 0-32.729-9.095-32.729-19.861s14.991-19.867 32.729-19.867c17.737 0 32.729 9.102 32.729 19.867s-14.992 19.861-32.729 19.861zM276.642 657.998c-10.766 0-19.861-13.336-19.861-29.123 0-15.786 9.095-29.129 19.861-29.129s19.861 13.342 19.861 29.129-9.095 29.123-19.861 29.123zM742.411 657.998c-10.766 0-19.861-13.336-19.861-29.123 0-15.786 9.095-29.129 19.861-29.129s19.861 13.342 19.861 29.129c-0.001 15.787-9.096 29.123-19.861 29.123zM276.642 490.567c-10.766 0-19.861-13.336-19.861-29.123 0-15.786 9.095-29.129 19.861-29.129s19.861 13.342 19.861 29.129-9.095 29.123-19.861 29.123zM441.74 598.393c-10.766 0-19.861-13.342-19.861-29.129 0-15.786 9.095-29.129 19.861-29.129s19.867 13.342 19.867 29.129c0.001 15.787-9.101 29.129-19.867 29.129zM582.581 598.393c-10.766 0-19.861-13.342-19.861-29.129 0-15.786 9.095-29.129 19.861-29.129s19.867 13.342 19.867 29.129c0.001 15.787-9.101 29.129-19.867 29.129zM441.74 752.968c-10.766 0-19.861-13.342-19.861-29.129s9.095-29.129 19.861-29.129 19.867 13.342 19.867 29.129-9.101 29.129-19.867 29.129z"
                      fill="#4F5D73"
                      p-id="3929"
                    ></path>
                  </svg>
                </div>
                <ul class="avatar-list-warp">
                  <li
                    v-for="(item, i) in avatarList"
                    :key="i"
                    :class="{ active: user.avatarUrl === item }"
                    @click="user.avatarUrl = item"
                  >
                    <img :src="item" alt="" />
                  </li>
                </ul>
              </div>
            </transition>
          </div>

          <!-- 用户名 密码输入框 -->
          <form form method="post" action="http://localhost:666">
            <div class="form-input-warp" @mousedown.stop>
              <div class="form-group">
                <input
                  type="text"
                  class="form-input input-text"
                  autocomplete="new-password"
                  name="username"
                  placeholder="用户名"
                  v-model="user.name"
                />
                <!-- <svg @click="randomName"  t="1603258241849" class="icon-random" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3923" width="200" height="200"><path d="M513.033 512.578m-448.821 0a448.821 448.821 0 1 0 897.642 0 448.821 448.821 0 1 0-897.642 0Z" fill="#76C2AF" p-id="3924"></path><path d="M757.434 339.373L565.122 228.339c-27.942-16.135-76.237-16.135-104.179 0L268.632 339.373c-28.722 16.58-52.096 57.055-52.096 90.228v222.054c0 33.174 23.374 73.648 52.096 90.228l192.312 111.034c13.971 8.067 32.469 12.512 52.089 12.512 19.621 0 38.118-4.445 52.089-12.512l192.312-111.034c28.722-16.58 52.096-57.055 52.096-90.228V429.602c0-33.174-23.374-73.648-52.096-90.229z" fill="#231F20" p-id="3925"></path><path d="M561.619 206.364c-26.722-15.428-70.45-15.428-97.172 0l-192.309 111.03c-26.722 15.428-48.586 53.298-48.586 84.154v222.06c0 30.856 21.864 68.726 48.586 84.154l192.309 111.03c26.722 15.428 70.45 15.428 97.173 0l192.309-111.03c26.722-15.428 48.586-53.297 48.586-84.154v-222.06c0-30.856-21.864-68.726-48.586-84.154l-192.31-111.03z" fill="#E0E0D1" p-id="3926" data-spm-anchor-id="a313x.7781069.0.i0"></path><path d="M513.033 837.373c-19.621 0-38.119-4.438-52.089-12.519L268.632 713.827c-28.722-16.573-52.096-57.048-52.096-90.222V401.551c0-33.174 23.374-73.648 52.096-90.222l192.312-111.027c27.942-16.162 76.237-16.162 104.179 0l192.312 111.027c28.722 16.573 52.096 57.048 52.096 90.222v222.054c0 33.174-23.374 73.648-52.096 90.222L565.122 824.854c-13.971 8.081-32.468 12.519-52.089 12.519z m0-635.565c-17.197 0-33.201 3.78-45.077 10.629L275.645 323.465c-24.435 14.108-45.083 49.87-45.083 78.086v222.054c0 28.216 20.648 63.978 45.083 78.086l192.312 111.027c23.75 13.697 66.403 13.697 90.153 0l192.312-111.027c24.435-14.108 45.083-49.87 45.083-78.086V401.551c0-28.216-20.648-63.978-45.083-78.086L558.109 212.437c-11.875-6.848-27.88-10.629-45.076-10.629z" fill="#E0E0D1" p-id="3927"></path><path d="M513.033 482.075c-15.751 0-30.9-3.534-41.57-9.691L279.151 361.351c-8.28-4.78-13.033-10.574-13.033-15.909 0.007-5.321 4.753-11.122 13.033-15.895l192.312-111.034c10.67-6.164 25.819-9.697 41.57-9.697 15.751 0 30.9 3.534 41.57 9.691l192.312 111.041c8.28 4.773 13.026 10.574 13.033 15.895 0 5.335-4.753 11.129-13.033 15.909L554.603 472.378c-10.67 6.163-25.819 9.697-41.57 9.697zM483.699 811.349c-4.205 0-9.245-1.623-14.574-4.698L276.814 695.61c-22.538-13.005-41.577-45.981-41.577-72.005V401.551c0-6.198 1.267-20.614 12.978-20.614 4.198 0 9.239 1.63 14.574 4.712l192.312 111.027c22.531 13.012 41.57 45.987 41.57 72.005v222.061c0 7.253-1.568 13.204-4.424 16.758-2.111 2.63-4.83 3.849-8.548 3.849zM540.036 811.349c-11.711 0-12.978-14.409-12.978-20.607V568.681c0-26.017 19.039-58.993 41.57-72.012l192.312-111.02c5.335-3.082 10.375-4.712 14.574-4.712 11.711 0 12.978 14.416 12.978 20.614v222.054c0 26.024-19.039 58.-41.577 72.005L554.603 806.644c-5.328 3.082-10.369 4.705-14.567 4.705z" fill="#FFFFFF" p-id="3928"></path><path d="M513.033 365.309c-17.738 0-32.729-9.095-32.729-19.861s14.991-19.867 32.729-19.867c17.737 0 32.729 9.102 32.729 19.867s-14.992 19.861-32.729 19.861zM276.642 657.998c-10.766 0-19.861-13.336-19.861-29.123 0-15.786 9.095-29.129 19.861-29.129s19.861 13.342 19.861 29.129-9.095 29.123-19.861 29.123zM742.411 657.998c-10.766 0-19.861-13.336-19.861-29.123 0-15.786 9.095-29.129 19.861-29.129s19.861 13.342 19.861 29.129c-0.001 15.787-9.096 29.123-19.861 29.123zM276.642 490.567c-10.766 0-19.861-13.336-19.861-29.123 0-15.786 9.095-29.129 19.861-29.129s19.861 13.342 19.861 29.129-9.095 29.123-19.861 29.123zM441.74 598.393c-10.766 0-19.861-13.342-19.861-29.129 0-15.786 9.095-29.129 19.861-29.129s19.867 13.342 19.867 29.129c0.001 15.787-9.101 29.129-19.867 29.129zM582.581 598.393c-10.766 0-19.861-13.342-19.861-29.129 0-15.786 9.095-29.129 19.861-29.129s19.867 13.342 19.867 29.129c0.001 15.787-9.101 29.129-19.867 29.129zM441.74 752.968c-10.766 0-19.861-13.342-19.861-29.129s9.095-29.129 19.861-29.129 19.867 13.342 19.867 29.129-9.101 29.129-19.867 29.129z" fill="#4F5D73" p-id="3929"></path></svg> -->
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-input input-pass"
                  autocomplete="new-password"
                  name="userpwd"
                  placeholder="密码"
                  v-model="password"
                />
              </div>
              <div class="form-group form-btn-warp">
                <button class="form-btn" type="button" @click="login">
                  登录
                </button>
              </div>
              <div class="form-group form-btn-warp">
                <!-- <button class="form-btn" type="button" @click="register">注册</button> -->
                <button   class="butt" type="button" @click="captcha">
                  Ukey验证    
                </button>
                <button   class="butt" type="button" @click="denglu1">
                  登录易验证 
                </button>
                <!-- <button
                  class="butt"
                  type="button"
                  @click="return_RandomNumber"
                >
                  确定
                </button> -->
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div>
      <!-- <button @click="captcha">Ukey验证</button>
    <button @click="return_RandomNumber">确定</button> -->
    </div>
  </div>
</template>

<script>
import Message from "./Message";
import axios from "axios";
import SoftKey3W from "./Syunew3";
import { BASE_URL } from "./config";
export default {
  name: "UserLogin",
  props: {
    type: {
      type: String,
      default: "pc",
    },
  },
  data() {
    return {
      user: {
        name: "",
        avatarUrl: "http://q.qlogo.cn/headimg_dl?dst_uin=705597001&spec=100",
      },
      password: "",
      avatarList: [
        "http://q.qlogo.cn/headimg_dl?dst_uin=705597001&spec=100",
        "http://q.qlogo.cn/headimg_dl?dst_uin=956411241&spec=100",
        "http://q.qlogo.cn/headimg_dl?dst_uin=1361514346&spec=100",
        "http://q.qlogo.cn/headimg_dl?dst_uin=624748513&spec=100",
        "http://q.qlogo.cn/headimg_dl?dst_uin=1741841217&spec=100",
        "http://q.qlogo.cn/headimg_dl?dst_uin=157509895&spec=100",
        "http://q.qlogo.cn/headimg_dl?dst_uin=453079985&spec=100",
        "http://q.qlogo.cn/headimg_dl?dst_uin=753678776&spec=100",
      ],
      isShow: false,
      qq: "",
      key: "12312eqwd",
      encodedata: "",
      text: "8888ad",
      encode_Data: "",
      secretText: "",
      decodeText: "",
      Flag: false, //当FLAG为true时，才可以显示登录
      ifLogin: false, //判断是否能最终登录
      ukeyIn: false, //ukey的状态
    };
  },
  mounted() {
    this.intSoftKey3A();
  },
  created() {
    //created:在模板渲染成html前调用
    let list = [
      "20180414170003.jpg",
      "20180414165754.jpg",
      "20180414165815.jpg",
      "20180414165821.jpg",
      "20180414165827.jpg",
      "20180414165834.jpg",
      "20180414165846.jpg",
      "20180414165855.jpg",
      "20180414165909.jpg",
      "20180414165914.jpg",
      "20180414165920.jpg",
      "20180414165927.jpg",
      "20180414165936.jpg",
      "20180414165942.jpg",
      "20180414165947.jpg",
      "20180414165955.jpg",
    ];
    list = list.map((item) => {
      return BASE_URL + "static/img/avatar/" + item;
    });
    this.avatarList = list;
    this.randomAvatar();
  },
  methods: {
    toggleAvatarSelect() {
      if (this.isShow) {
        this.isShow = false;
        document.removeEventListener("click", this.hideAvatarSelect);
      } else {
        this.isShow = true;
        document.addEventListener("click", this.hideAvatarSelect);
      }
    },
    hideAvatarSelect() {
      this.isShow = false;
      document.removeEventListener("click", this.hideAvatarSelect);
    },
    addQQAvatar(qq) {
      let qqReg = /^[1-9][0-9]{3,9}[0-9]$/;
      if (qqReg.test(qq)) {
        let qqAvatarUrl =
          "http://q.qlogo.cn/headimg_dl?dst_uin=" + qq + "&spec=100";
        if (this.avatarList.indexOf(qqAvatarUrl) == -1) {
          this.avatarList.push(qqAvatarUrl);
        }
        this.qq = "";
      } else {
        Message.error("输入正确的QQ号有误");
      }
    },
    captcha() {
      axios
        .get("http://localhost:1036/list/captcha", {
          params: {
            username: this.user.name,
            userpwd: this.password,
          },
        })
        .then((res) => {
          console.log(res.data); //成功了
          this.encodedata = res.data;
          this.sm2EncString(res.data);
        })
        .catch((err) => {
          console.log("获取验证码失败" + err);
        });
    },
    return_RandomNumber() {
      this.sm2DecString();
    },
    denglu1() {
     window.open("https://qrconnect.denglu.net.cn/connect.php?sAppId=db9662da36bc6fa1f8b2d76dcf80dddd&sUrl=http://111.230.202.213:8080/&sType=login&sResType=web"); 
    },
    login() {
      let _this = this;
      if (this.ifLogin == false) {
        console.log(this.user.name, this.password);
        if (this.user.name === "") {
          Message.error("请输入用户名称！");
          return;
        }

        axios
          .get("http://localhost:1036/list/denglu", {
            params: {
              username: this.user.name,
              userpwd: this.password,
            },
          })
          .then((res) => {
            if (res.data.length > 0) {
              if (_this.ukeyIn) {
                alert(
                  "检测ukey已插入，验证用户名密码成功,请点击“ukey验证”按钮，验证ukey是否与该输入用户一致"
                );
              } else {
                alert("未检测到ueky");
              }

              // this.$emit("login",this.user)
            } else {
              alert("用户名或密码错误");
            }
          })
          .catch((err) => {
            console.log("获取数据失败" + err);
          });
      } else {
        this.$emit("login", this.user);
      }
    },
    register() {
      console.log(this.user.name, this.password, "sss");
      if (this.user.name === "") {
        Message.error("请输入用户名称！");
        return;
      }
      axios
        .get("http://localhost:1036/list/zhuce", {
          params: {
            username: this.user.name,
            userpwd: this.password,
          },
        })
        .then((res) => {
          if (res.data.status == 200) {
            console.log("注册成功");
          } else {
            this.$message({
              message: "添加失败",
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.log("注册失败" + err);
        });
    },
    detect() {
      console.log("已经插入");
      var usbDetect = require("usb-detection");
      usbDetect.startMonitoring();
    },
    randomQQ() {
      let min = 100000;
      let max = 1000000000;
      let qq = parseInt(Math.random() * (max - min + 1) + min, 10);
      this.qq = qq;
    },
    randomName() {
      this.user.name = "cname";
    },
    randomAvatar() {
      const len = this.avatarList.length;
      const index = parseInt(Math.random() * len);
      this.user.avatarUrl = this.avatarList[index];
    },
    // ------------------------
    /**
     * 初始化
     * @returns {boolean}
     */
    intSoftKey3A: function () {
      let ms = this.mSoftKey3W;
      console.log("this实例指向： ", this);
      let _this = this;
      //如果是IE10及以下浏览器，则跳过不处理
      if (
        navigator.userAgent.indexOf("MSIE") > 0 &&
        !navigator.userAgent.indexOf("opera") > -1
      )
        return;
      try {
        let mSoftKey3W = new SoftKey3W();
        _this.mSoftKey3W = mSoftKey3W;
        mSoftKey3W.Socket_UK.onopen = function () {
          _this.bConnect = 1; //代表已经连接，用于判断是否安装了客户端服务
          console.log("客户端连接");
          mSoftKey3W.FindPort(0);
        };

        //在使用事件插拨时，注意，一定不要关掉Sockey，否则无法监测事件插拨
        mSoftKey3W.Socket_UK.onmessage = function got_packet(Msg) {
          console.log("load onmessage Msg = ", Msg);
          var PnpData = JSON.parse(Msg.data);
          if (PnpData.type == "PnpEvent") {
            //如果是插拨事件处理消息
            if (PnpData.IsIn) {
              _this.ukeyIn = true;
              alert("UKEY已被插入，被插入的锁的路径是：" + PnpData.DevicePath);
            } else {
              _this.ukeyIn = false;
              alert("UKEY已被拨出，被拨出的锁的路径是：" + PnpData.DevicePath);
            }
          }

          if (PnpData.type == "Process") {
            switch (PnpData.order) {
              case 0: {
                if (PnpData.LastError != 0) {
                  _this.ukeyIn = false;
                  window.alert("未发现加密锁，请插入加密锁");

                  ms.Socket_UK.close();
                  return false;
                }
                _this.ukeyIn = true;
                _this.devicePath = PnpData.return_value; //获得返回的UK的路径
                console.log("获得返回的UK的路径：" + PnpData.return_value);
              }
            }
          }
        };

        mSoftKey3W.Socket_UK.onclose = function () {};
      } catch (e) {
        alert(e.name + ": " + e.message);
        return false;
      }
    },
    sm2EncString: function () {
      let ms = this.mSoftKey3W;
      let _this = this;

      ms.ResetOrder(); //重置order
      ms.SM2_EncString(_this.encodedata, _this.devicePath); //加密
      console.log(_this);
      ms.Socket_UK.onmessage = function gotPacket(Msg) {
        console.log("sm2 encode onmessage Msg：" + Msg.data);
        var UK_Data = JSON.parse(Msg.data);
        if (UK_Data.type != "Process") return;

        if (UK_Data.LastError != 0) {
          window.alert(
            "sm2进行加密运算时出现错误，错误码为：" +
              UK_Data.LastError.toString()
          );
          ms.Socket_UK.close();
          return false;
        }

        _this.secretText = UK_Data.return_value;

        console.log("sm2加密成功：" + UK_Data.return_value);
        // _this.return_RandomNumber();
        alert("验证成功，请点击确定按钮");
        // alert("验证失败，该输入用户与Ukey代表的用户身份不一致")
      };
    },
    sm2DecString: function () {
      console.log("this.text = ", this.secretText);

      let ms = this.mSoftKey3W;
      let _this = this;

      ms.ResetOrder(); //重置order
      ms.SM2_DecString(_this.secretText, "123", _this.devicePath);

      ms.Socket_UK.onmessage = function gotPacket(Msg) {
        console.log("sm2!!!!! decode onmessage Msg：" + Msg.data);
        var UK_Data = JSON.parse(Msg.data);
        if (UK_Data.type != "Process") return;

        if (UK_Data.LastError != 0) {
          window.alert(
            "sm2进行解密运算时出现错误，错误码为：" +
              UK_Data.LastError.toString()
          );
          ms.Socket_UK.close();
          return false;
        }

        _this.decodeText = UK_Data.return_value;
        console.log("sm2解密成功：" + UK_Data.return_value);
        if (_this.decodeText == _this.encodedata) {
          _this.ifLogin = true;
          alert("验证成功");
          _this.login();
        }
      };
    },
  },
};
</script>

<style scoped>
.user-login-warp {
  position: fixed;
  width: 400px;
  left: 70%;
  top: 50%;
  margin-left: -180px;
  margin-top: -140px;
  /* border: solid 2px rgb(158, 220, 233); */
  box-shadow: 0 1px 1px #3a3c3e;
  /* border-radius: 20px; */
}
/* .user-login-container{

  } */
.user-login-banner {
  /* background-color: #ffffff; */
  background-image: url(../assets/images/bground.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: auto;
  height: 120px;
  border-radius: 4px 4px 0 0;
  text-align: center;
  font-weight: lighter;
}
.user-login-form-warp {
  text-align: center;
  background-color: #ffffff;
  padding: 30px 30px 30px 10px;
  border-radius: 0 0 4px 4px;
}
.user-login-form {
  display: inline-block;
  text-align: left;
}
.user-login-form:after,
.avatar-list-warp:after {
  display: block;
  content: "";
  clear: both;
}
.user-login-avatar {
  display: block;
  width: 60px;
  height: 60px;
  float: left;
  position: relative;
}
.user-login-avatar .login-avatar {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.form-input-warp {
  margin-left: 70px;
}
.form-group {
  position: relative;
}
.form-group .form-input {
  display: block;
  width: 100%;
  height: 30px;
  outline: none;
  border: 1px solid #d1d1d1;
  margin: -1px;
  padding: 0 10px;
  font-size: 14px;
  color: #333333;
  box-sizing: border-box;
  position: relative;
}
.icon-random {
  display: block;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  z-index: 20;
}
.form-group .form-input:focus {
  border-color: #3a8ee6;
  z-index: 9;
}
.form-group .input-text {
  border-radius: 4px 4px 0 0;
}
.form-group .input-pass {
  border-radius: 0 0 4px 4px;
}
.butt {
  /* background-color: rgb(87, 197, 210); */
  background-color: #3a8ee6;
  margin-right: 15px;
  border-radius: 4px;
  margin-left: 60px;
  color: #f2f2f2;
  /* border: none; */
  border: solid 1px ;
  border-radius: 10px;
  font-size: small;
}
.form-group .form-btn {
  display: block;
  width: 100%;
  line-height: 30px;
  font-size: 14px;
  border: none;
  color: #f2f2f2;
  background-color: #3a8ee6;
  border-radius: 4px;
  outline: none;
}
.form-group.form-btn-warp {
  margin-top: 10px;
}
.avatar-input-warp {
  margin: 0 15px;
  padding-top: 15px;
  border-radius: 4px;
  position: relative;
}
.avatar-input-warp .avatar-input {
  display: block;
  line-height: 30px;
  border: 1px solid #d1d1d1;
  color: #3a3c3e;
  font-size: 14px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  border-radius: 4px;
}
.select-avatar-warp {
  position: absolute;
  background-color: #ffffff;
  width: 320px;
  border-radius: 4px;
  top: 100%;
  left: -40px;
  border: 1px solid #d1d1d1;
  margin-top: 15px;
  z-index: 999;
}
.select-avatar-warp:after {
  display: block;
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  bottom: 100%;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #ffffff;
  left: 40px;
  z-index: 99;
  margin-bottom: -1px;
}
.select-avatar-warp:before {
  display: block;
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  bottom: 100%;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  left: 40px;
  z-index: 99;
  border-bottom: 10px solid #d1d1d1;
  margin-bottom: 0;
}
.avatar-list-warp {
  list-style: none;
  margin: 0;
  padding: 10px;
  max-height: 120px;
  overflow-y: auto;
}
.avatar-list-warp li {
  float: left;
  width: 50px;
  height: 50px;
  margin: 5px;
  box-sizing: border-box;
  position: relative;
  border: 2px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}
.avatar-list-warp li.active {
  border-color: #3a8ee6;
}
.avatar-list-warp li.active:after {
  display: block;
}
.avatar-list-warp li:after {
  display: none;
  width: 12px;
  height: 12px;
  padding: 2px 1px 0;
  text-align: right;
  line-height: 12px;
  font-size: 12px;
  color: #f2f2f2;
  background-color: #3a8ee6;
  content: "\2714";
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 10px 0 0 0;
}
.avatar-list-warp li img {
  display: block;
  width: 100%;
  height: 100%;
}
.icon-touzi {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 5px;
  top: 20px;
  cursor: pointer;
}
.iChat-user-login {
  width: 300px;
  margin-left: -150px;
}
.iChat-user-login .user-login-form-warp {
  border-radius: 4px;
}
.iChat-user-login .select-avatar-warp {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  top: auto;
  border: none;
  border-radius: 4px 4px 0 0;
}
.iChat-user-login .select-avatar-warp:before,
.iChat-user-login .select-avatar-warp:after {
  display: none;
}
</style>
