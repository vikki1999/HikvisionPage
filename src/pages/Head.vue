<template>
<el-container>
  <el-header
    style="margin: 30px 0px"
  >
    <el-image
      style="margin: 0px 30px"
      :src="logoSrc"
      fit="contain"></el-image>
    <el-menu 
      :default-active="defaultActive"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="home">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">产品中心</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">解决方案</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ys7.com/" target="_blank">萤石官网</a></el-menu-item>
      <el-menu-item index="5">海康机器人</el-menu-item>
      <el-menu-item index="6">汽车电子</el-menu-item>
      <el-menu-item index="7">服务支持</el-menu-item>
      <el-menu-item index="8">关于我们</el-menu-item>
      <el-menu-item index="9">新闻中心</el-menu-item>
      <el-menu-item index="10">供应商平台</el-menu-item>
      <li :class="[{ 'is-active': active }, 'el-menu-item']" @focus="changeActive">
        <el-input
          placeholder="请输入内容"
          v-model="input">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </li>
    </el-menu>
  </el-header>
  <el-main>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </el-main>
   <el-footer style="background:#9f9f9f;height:362px; color:#FFF">
     <div class="bottom2">
    <div class="indexbo">
        <div class="indexbo1">
            <font style="font-family: Arial; padding-right: 2px;">©</font><font style="padding-right: 10px;">2013</font>杭州海康威视数字技术股份有限公司
            版权所有 <a style="display:none;" href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" target="_blank">浙ICP备200903225号</a><a style=" " href="http://www.mountor.cn/" target="_blank">  Powered by Mountor </a></div>
        <div class="indexbo2">
            <span style="padding-right: 8px;"><a href="map_11.html">网站地图</a></span>
			<span>|</span>
			<a href="http://bbs.hikvision.com/" target="_blank">公共论坛</a>
			<span>|</span>
			<a href="lxwm_375.html">联系我们</a>
			<span>|</span>
			<a href="about_441.html">免责声明</a>
			<span>|</span>
			<a href="about_1541.html">隐私权政策</a>
		</div>
    </div>
    <div class="bottomb">
        <div class="bottombf1">
            <a href="pdy_4.html">新闻中心</a></div>
        <ul>
            <li><a href="newsmt_xx_63.html">公司新闻</a></li>
            <li><a href="newsmt_x_64.html">媒体关注</a></li>
            <li><a href="newsmt_x_65.html">行业资讯</a></li>
            <li><a href="newssp_x_68.html">多媒体资源</a></li>
        </ul>
    </div>
    <div class="bottomb">
        <div class="bottombf1">
            <a href="tzzgx_37.html">投资者关系</a></div>
        <ul>
            <li><a href="tzzgx_37.html">临时公告</a></li>
            <li><a href="tzzgx_38.html">定期报告</a></li>
            <li><a href="about_39.html">投资者关系管理部门</a></li>
            <li><a href="feedback_376.html">在线留言</a></li>
        </ul>
    </div>
    <div class="bottomb">
        <div class="bottombf1">
            <a href="http://talent.hikvision.com/">招贤纳士</a></div>
        <ul>
            <li><a href="http://talent.hikvision.com/home/socity/index" target="_blank">社会招聘</a></li>
            <li><a href="http://campus.hikvision.com">校园招聘</a></li>
            <li><a href="http://campus.hikvision.com">实习生招聘</a></li>
        </ul>
    </div>
    <div class="bottomb">
        <div class="bottombf1">
            <a href="about_8.html">关于我们</a></div>
        <ul>
            <li><a href="about_8.html">公司信息</a></li>
            <li><a href="zzry_21.html">资质荣誉</a></li>
            <li><a href="about_28.html">社会责任</a></li>
            <li><a href="about_35.html">品牌资源</a></li>
            <li><a href="lxwm_375.html">联系我们</a></li>
        </ul>
    </div>
    <div class="bottomb">
        <div class="bottombf1">
            <a href="newsmt_xx_71.html">常用链接</a></div>
        <ul>
	<li><a href="https://open.hikvision.com/?c_kind=5&amp;c_kind2=1831&amp;c_kind3=1832">开放平台</a></li>
            <li><a href="newsmt_xx_71.html">市场活动</a></li>
            <li><a href="newsmt_xx_72.html">展会信息</a></li>
            <li style=" display:none;"><a href="#">公司刊物</a></li>
            <li><a href="newshd_85.html">最佳实践</a></li>
            <li><a href="newshd_86.html">创意安防</a></li>
            <li><a href="support_list_591.html">安全中心</a></li>
        </ul>
    </div>
    <div class="bottomb">
        <div class="bottombf1">
            <a href="zj_42.html">供应商平台</a></div>
        <ul>
            <li><a href="zj_42.html">自荐</a></li>
            <li><a href="email.aspx?stat=1&amp;c_kind=41&amp;c_kind2=43">内控部邮箱</a></li>
        </ul>
    </div>
    <div class="bottomsx">
    </div>
    <div class="bottomxx">
        <div class="bottomxx1">
            <a href="about_16.html">全球营销网络</a></div>
        <div class="bottomxx2">
			
            <a href="about_16.html"><img :src="map"></a></div>
    </div>
</div>
   </el-footer>
</el-container>
  

</template>

<script>
import logoSrc from '@/assets/logo.png';
import map from '@/assets/bottompic2.png';
  export default {
    data() {
      return {
        logoSrc: logoSrc,
        map: map,
        menu: 'menu',
        input: '',
        active: false,
        footerData: [
          {name:'新闻中心', url:'', children: [
            {name:'公司新闻'}
          ]}
        ]
      };
    },
    computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    methods: {
      handleSelect(key) {
        this.$router.push(key);
      },
      changeActive(){
        this.active = true;
      }
    }
  }
</script>

<style lang="less">
.el-menu-demo .is-active{
  background: #D2332F;
}
.bottom2 {
    width: 1347px;
    background: #9f9f9f;
    margin: 0 auto;
    padding-top: 35px;
    position: relative;
    height: 327px;
    a{
      color: #fff;
      font-size: 13px;
    }
}
.indexbo {
    position: absolute;
    left: 0;
    width: 1166px;
    bottom: 20px;
}
.indexbo1 {
    float: left;
    line-height: 18px;
    color: #fff;
}
.indexbo2 {
    float: right;
    color: #fff;
    line-height: 18px;
}
.bottombf1 {
    padding-bottom: 17px;
}
.bottomb {
    float: left;
    width: 138px;
}
.bottomsx {
    float: left;
    width: 2px;
    height: 242px;
    overflow: hidden;
}
.bottomxx {
    float: left;
    padding-left: 31px;
    z-index: -100;
}
.bottomxx1 {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    line-height: 18px;
    padding-left: 13px;
}
.bottomxx2 {
    width: 272px;
    height: 156px;
    padding-top: 25px;
}
</style>