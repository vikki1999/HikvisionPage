<template>
    <div>
        <el-carousel indicator-position="outside" height="416px" style="background: #fff">
          <el-carousel-item v-for="item in imgData" :key="item">
            <el-image
              style="height:416px;padding:0px 70px;background: #fff"
              :src="item"
              fit="fill"></el-image>
          </el-carousel-item>
        </el-carousel>
        <div class="inews clearfix">
            <div class="inewsl clearfix">
                <div class="inewsl1">
                    最新动态
                </div>
                <div class="inewsl2">
                </div>
                <div class="inewsl3" id="scrollNews" style="overflow: hidden; height: 39px; line-height: 39px;">
                  <ul class="clearfix" style="margin-top: 0px;">      
                    <li style="height: 39px">
                      <a href="news_detail_63_i2717.html">
                      海康威视发布2019《网络安全白皮书》和《产品安全白皮书》
                      </a>
                      <span>
                          2019.06.04
                      </span>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
        <div style="margin:0px 100px">
        <el-row type="flex" justify="space-around">
          <el-col :span="6" v-for="(o, index) in cardData" :key="o.title" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <el-image :src="o.src" fit="contain" style="height: 150px;overflow:hidden"></el-image>
              <div style="padding: 14px;">
                <span>{{ o.title }}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
import crousel1 from '@/assets/crousel1.png';
import crousel2 from '@/assets/crousel2.png';
import crousel3 from '@/assets/crousel3.jpg';
import crousel4 from '@/assets/crousel4.jpg';
import crousel5 from '@/assets/crousel5.jpg';
import hot from '@/assets/hot.jpg';
import practise from '@/assets/practise.jpg';
import vedio from '@/assets/vedio.jpg';
import activity from '@/assets/activity.jpg';

  export default {
    data() {
      return {
        currentDate: new Date(),
        imgData: [
          crousel1,
          crousel2,
          crousel3,
          crousel4,
          crousel5
        ],
        cardData: [
          {title:'热点产品',src:hot,},
          {title:'最佳实践',src:practise,},
          {title:'最新活动',src:activity,},
          {title:'视频中心',src:vedio,},
        ]
      };
    },
    components: {
      },
      methods: {
      }
  }
</script>

<style lang="less">
	.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .inewsbg{
    height: 38px;
    width: auto !important;
    min-width: 1162px;
    width: 1162px;
  }
  .inews {
    height: 38px;
    width: 1370px;
    margin: 0 auto;
}
.clearfix {
    zoom: 1;
    display: block;
    background: #fafafa;
}
.inewsl1 {
    float: left;
    line-height: 38px;
    height: 38px;
    color: #C4261D;
    padding-left: 15px;
    padding-right: 14px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
