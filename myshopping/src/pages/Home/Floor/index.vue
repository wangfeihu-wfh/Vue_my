<template>
  <div>
    <div class="floor" v-for="item in floorList" :key="item.id">
      <div class="py-container">
        <div class="title clearfix">
          <h3 class="fl">{{ item.name }}</h3>
          <div class="fr">
            <ul class="nav-tabs clearfix">
              <li
                v-for="(nav, index) in item.navList"
                :key="index"
                :class="{ active: index === 0 }"
              >
                <a href="#tab1" data-toggle="tab">{{ nav.text }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane">
            <div class="floor-1">
              <div class="blockgary">
                <ul class="jd-list">
                  <li v-for="(item3, index) in item.keywords" :key="index">
                    {{ item3 }}
                  </li>
                </ul>
                <img :src="item.imgUrl" />
              </div>
              <div class="floorBanner">
                <!-- 轮播图 -->
                <Carousel :List="item.carouselList" />
              </div>
              <div class="split">
                <span class="floor-x-line"></span>
                <div class="floor-conver-pit">
                  <img :src="item.recommendList[0]" />
                </div>
                <div class="floor-conver-pit">
                  <img :src="item.recommendList[1]" />
                </div>
              </div>
              <div class="split center">
                <img :src="item.bigImg" />
              </div>
              <div class="split">
                <span class="floor-x-line"></span>
                <div class="floor-conver-pit">
                  <img :src="item.recommendList[2]" />
                </div>
                <div class="floor-conver-pit">
                  <img :src="item.recommendList[3]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
// import { mapState } from "vuex";

export default {
  name: "FloorPage",
  props: ["floorList"],
  //#region
  //   mounted() {
  //     var mySwiper = new Swiper(this.$refs.mySwiper, {
  //       loop: true, // 循环模式选项
  //       // 如果需要分页器
  //       pagination: {
  //         el: ".swiper-pagination",
  //       },
  //       // 如果需要前进后退按钮
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //       },
  //       // 如果需要滚动条
  //       scrollbar: {
  //         el: ".swiper-scrollbar",
  //       },
  //     });
  //   },
  // floor获取数据的时候也可以根据banner.vue一样自己请求数据，或者根据上面用父组件请求数据传递给子组件
  //   watch: {
  //     floorList: {
  //       immediate: true,
  //       handler() {
  //         this.$nextTick(() => {
  //           var mySwiper = new Swiper(this.$refs.mySwiper, {
  //             loop: true, // 循环模式选项
  //             // 如果需要分页器
  //             pagination: {
  //               el: ".swiper-pagination",
  //             },
  //             // 如果需要前进后退按钮
  //             navigation: {
  //               nextEl: ".swiper-button-next",
  //               prevEl: ".swiper-button-prev",
  //             },
  //             // 如果需要滚动条
  //             scrollbar: {
  //               el: ".swiper-scrollbar",
  //             },
  //           });
  //         });
  //       },
  //     },
  //   },

  //   mounted() {
  //     this.$store.dispatch("getFloorList");
  //   },
  //   computed: {
  //     ...mapState({
  //       floorList: (state) => state.home.floorList,
  //     }),
  //   },
  //#endRegion
};
</script>

<style lang='less'>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>