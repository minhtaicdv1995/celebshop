<template>
  <div>
    <div class="home-banner container-fluid">
      <!-- PC banner1 -->
      <div class="slide-banner hidden-xs hidden-sm">
        <a href="/product-list/?gender=&category=&attribute=corluray">
          <div class="cont-item">
            <img src="https://ananas.vn/wp-content/uploads/kvngang_desktop_web.jpg" />
          </div>
        </a>
        <a href="/product-list?gender=&category=&attribute=track-6">
          <div class="cont-item">
            <img src="https://ananas.vn/wp-content/uploads/banner-chính_2.jpg" />
          </div>
        </a>
      </div>
      <!-- End PC banner1 -->
      <!-- Mobile banner1 -->
      <div class="slide-banner-mobile visible-xs visible-sm">
        <a href="/product-list/?gender=&category=&attribute=corluray">
          <div class="cont-item">
            <img src="https://ananas.vn/wp-content/uploads/kvngang_mobile_web.jpg" />
          </div>
        </a>
        <a href="/product-list?gender=&category=&attribute=track-6">
          <div class="cont-item">
            <img src="https://ananas.vn/wp-content/uploads/banner-chính_2m.jpg" />
          </div>
        </a>
      </div>
      <!-- End Mobile banner1 -->
    </div>
    <div class="home-collection container-fluid">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 left">
          <div class="slide-collection">
            <VueSlickCarousel v-bind="settings">
              <div class="cont-item">
                <div class="adv-collection">
                  <a href="/product-list?gender=&category=&attribute=black">
                    <img src="https://ananas.vn/wp-content/uploads/banner-phụ_2m.jpg" />
                  </a>
                </div>
                <div class="content-collection">
                  <h3 class="title">
                    <a href="/product-list?gender=&category=&attribute=black">ALL BLACK IN BLACK</a>
                  </h3>
                  <h3 class="description">
                    <p>Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán</p>
                  </h3>
                </div>
              </div>
              <div class="cont-item">
                <div class="adv-collection">
                  <a href="/product-detail/a61084/">
                    <img src="https://ananas.vn/wp-content/uploads/banner-phụ_1m.jpg" />
                  </a>
                </div>
                <div class="content-collection">
                  <h3 class="title">
                    <a href="/product-detail/a61084/">ANANAS CREAS FLIP-FLAP</a>
                  </h3>
                  <h3 class="description">
                    <p>Khi sự tích cực, trung thực và ngẫu hứng trở thành tiêu chí sống; niềm vui sẽ xuất hiện ở mọi nơi</p>
                  </h3>
                </div>
              </div>
              <div class="cont-item">
                <div class="adv-collection">
                  <a href="/product-list?gender=&category=&attribute=basas">
                    <img src="https://ananas.vn/wp-content/uploads/IMG_9453_retouch.jpg" />
                  </a>
                </div>
                <div class="content-collection">
                  <h3 class="title">
                    <a href="/product-list?gender=&category=&attribute=basas">BÌNH MỚI RƯỢU "MỚI"</a>
                  </h3>
                  <h3 class="description">
                    <p>Vẫn kế thừa vẻ tối giản, nguyên bản đã được định hướng bởi cái tên, Basas mới trở lại với những cải tiến đáng giá chắc chắn sẽ đem đến một trải nghiệm thú vị như hành trình chúng tôi làm ra nó.</p>
                  </h3>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 right">
          <div class="adv-collection">
            <a href="/product-list/?gender=men,women&category=&attribute=sale-off">
              <img src="https://ananas.vn/wp-content/uploads/Banner_Sale-off-1.jpg" />
            </a>
          </div>
          <div class="content-collection">
            <h3 class="title">
              <a href="/product-list/?gender=men,women&category=&attribute=sale-off">OUTLET SALE</a>
            </h3>
            <h3 class="description">
              <p>Danh mục những sản phẩm bán tại Outlet Store, đã được phát hành trước một thời gian và đang rơi vào tình trạng bể size, hết mã.</p>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <!-- PC: Home-buy -->
    <div class="home-buy container-fluid hidden-xs hidden-sm">
      <div class="row title">DANH MỤC MUA HÀNG</div>
      <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 item">
          <div class="item-bg">
            <div class="black-bg"></div>
            <img src="https://ananas.vn/wp-content/uploads/catalogy-1.jpg" />
          </div>
          <div class="item-group">
            <a class="title" href="#">GIÀY NAM</a>
            <a
              class="sub"
              href="/product-list?gender=men&category=shoes&attribute=new-arrival"
            >New Arrivals</a>
            <a
              class="sub"
              href="/product-list?gender=men&category=shoes&attribute=best-seller"
            >Best Seller</a>
            <a
              class="sub"
              href="/product-list?gender=men&category=shoes&attribute=sale-off"
            >Sale-off</a>
          </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 item">
          <div class="item-bg">
            <div class="black-bg"></div>
            <img src="https://ananas.vn/wp-content/uploads/catalogy-2.jpg" />
          </div>
          <div class="item-group">
            <a class="title" href>GIÀY NỮ</a>
            <a
              class="sub"
              href="/product-list?gender=women&category=shoes&attribute=new-arrival"
            >New Arrivals</a>
            <a
              class="sub"
              href="/product-list?gender=women&category=shoes&attribute=best-seller"
            >Best Seller</a>
            <a
              class="sub"
              href="/product-list?gender=women&category=shoes&attribute=sale-off"
            >Sale-off</a>
          </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 item">
          <div class="item-bg">
            <div class="black-bg"></div>
            <img src="https://ananas.vn/wp-content/uploads/catalogy-3.jpg" />
          </div>
          <div class="item-group">
            <a class="title" href>DÒNG SẢN PHẨM</a>
            <a class="sub" href="/product-list?gender=&category=&attribute=basas">Basas</a>
            <a class="sub" href="/product-list?gender=&category=&attribute=vintas">Vintas</a>
            <a class="sub" href="/product-list?gender=&category=&attribute=urbas">Urbas</a>
            <a class="sub" href="/product-list?gender=&category=&attribute=pattas">Pattas</a>
          </div>
        </div>
      </div>
    </div>
    <!-- PC: Home-buy -->
    <!-- Mobile: Home-buy -->
    <div class="home-buy-mobile container-fluid visible-xs visible-sm">
      <div class="row footer-tree">
        <ul class="nav">
          <li class="first-lvl">
            <label label-default class="tree-toggle nav-header orange">
              GIÀY NAM
              <span class="caret caret-active"></span>
            </label>
            <div class="footer-divider"></div>
            <ul class="nav tree">
              <li>
                <a href="/product-list?gender=men&category=shoes&attribute=new-arrival">New Arrivals</a>
              </li>
              <li>
                <a href="/product-list?gender=men&category=shoes&attribute=best-seller">Best Seller</a>
              </li>
              <li class="last">
                <a href="/product-list?gender=men&category=shoes&attribute=sale-off">Sale-off</a>
              </li>
              <div class="footer-divider"></div>
            </ul>
          </li>
          <li class="first-lvl">
            <label label-default class="tree-toggle nav-header orange">
              GIÀY NỮ
              <span class="caret caret-active"></span>
            </label>
            <div class="footer-divider"></div>
            <ul class="nav tree">
              <li>
                <a
                  href="/product-list?gender=women&category=shoes&attribute=new-arrival"
                >New Arrivals</a>
              </li>
              <li>
                <a
                  href="/product-list?gender=women&category=shoes&attribute=best-seller"
                >Best Seller</a>
              </li>
              <li class="last">
                <a href="/product-list?gender=women&category=shoes&attribute=sale-off">Sale-off</a>
              </li>
              <div class="footer-divider"></div>
            </ul>
          </li>
          <li class="first-lvl">
            <label label-default class="tree-toggle nav-header orange">
              DÒNG SẢN PHẨM
              <span class="caret caret-active"></span>
            </label>
            <ul class="nav tree">
              <li>
                <a href="/product-list?gender=&category=&attribute=basas">Basas</a>
              </li>
              <li>
                <a href="/product-list?gender=&category=&attribute=vintas">Vintas</a>
              </li>
              <li>
                <a href="/product-list?gender=&category=&attribute=urbas">Urbas</a>
              </li>
              <li class="last">
                <a href="/product-list?gender=&category=&attribute=pattas">Pattas</a>
              </li>
              <div class="footer-divider"></div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- End Mobile: Home-buy -->
    <div class="home-best-seller container-fluid">
      <div class="row">
        <div class="prd-detail-title">BEST SELLER</div>
        <div id="productRef" class="prd-detail-slide">
          <VueSlickCarousel v-bind="settingsProSlick">
            <Product v-for="products in productSeller"  :product="products" :key="products.id" ></Product>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <!-- PC banner2 -->
    <div class="home-banner1 container-fluid hidden-xs hidden-sm">
      <a href="/product-list?gender=men,women&category=top,accessories&attribute=">
        <img src="https://ananas.vn/wp-content/uploads/Banner_Clothing.jpg" />
      </a>
    </div>
    <!-- End PC banner2 -->
    <!-- Mobile banner2 -->
    <div class="home-banner1-mobile container-fluid visible-xs visible-sm">
      <a href="/product-list?gender=men,women&category=top,accessories&attribute=">
        <img src="https://ananas.vn/wp-content/uploads/Banner-mobile_Clothing.jpg" />
      </a>
    </div>
    <!-- End Mobile banner2 -->
    <div class="home-instagram container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 left">
          <div class="row title">INSTAGRAM</div>
          <div class="row instagram-list">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 instagram-item">
              <a data-id="0">
                <img
                  width="200"
                  height="200"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aecc86100942757.5f141782a9a2f.png"
                />
              </a>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 instagram-item">
              <a data-id="1">
                <img
                  width="200"
                  height="200"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aecc86100942757.5f141782a9a2f.png"
                />
              </a>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 instagram-item">
              <a data-id="2">
                <img
                  width="200"
                  height="200"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aecc86100942757.5f141782a9a2f.png"
                />
              </a>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 instagram-item">
              <a data-id="3">
                <img
                  width="200"
                  height="200"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aecc86100942757.5f141782a9a2f.png"
                />
              </a>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 instagram-item">
              <a data-id="4">
                <img
                  width="200"
                  height="200"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aecc86100942757.5f141782a9a2f.png"
                />
              </a>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 instagram-item">
              <a data-id="5">
                <img
                  width="200"
                  height="200"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aecc86100942757.5f141782a9a2f.png"
                />
              </a>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 instagram-item">
              <a data-id="6">
                <img
                  width="200"
                  height="200"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aecc86100942757.5f141782a9a2f.png"
                />
              </a>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 instagram-item">
              <a data-id="7">
                <img
                  width="200"
                  height="200"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aecc86100942757.5f141782a9a2f.png"
                />
              </a>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 instagram-item">
              <a data-id="8">
                <img
                  width="200"
                  height="200"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aecc86100942757.5f141782a9a2f.png"
                />
              </a>
            </div>
          </div>
          <div class="row text-center load-more-icon-ins">
            <img src="../assets/images/loading.gif" />
          </div>
          <div class="row text-center visible-xs visible-sm">
            <a id="btnMoreIns" class="btn btn-load-more">MUỐN XEM NỮA</a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 right">
          <div class="row title">TIN TỨC & BÀI VIẾT</div>
          <div class="row news-list">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 post-item">
              <a href="https://ananas.vn/cam-hung-vintas-saigon-1980s/">
                <img
                  width="300"
                  height="300"
                  src="https://ananas.vn/wp-content/uploads/peeping_pattas01.jpg"
                />
              </a>
              <h3 class="post-title">
                <a href="https://ananas.vn/cam-hung-vintas-saigon-1980s/">VINTAS SAIGON 1980s</a>
              </h3>
              <h3
                class="post-des"
              >Với bộ 5 sản phẩm, Vintas Saigon 1980s Pack đem đến một sự lựa chọn “cũ kỹ thú vị” cho những người trẻ sống giữa thời hiện đại nhưng lại yêu nét bình dị của Sài Gòn ngày xưa ...</h3>
              <h3 class="post-detail">
                <a href="https://ananas.vn/cam-hung-vintas-saigon-1980s/">Đọc thêm</a>
              </h3>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 post-item">
              <a href="https://ananas.vn/sneaker-fest-vietnam-va-su-ket-hop/">
                <img
                  width="300"
                  height="300"
                  src="https://ananas.vn/wp-content/uploads/peeping_pattas01.jpg"
                />
              </a>
              <h3 class="post-title">
                <a
                  href="https://ananas.vn/sneaker-fest-vietnam-va-su-ket-hop/"
                >SNEAKER FEST VIETNAM VÀ SỰ KẾT HỢP</a>
              </h3>
              <h3 class="post-des">
                Việc sử dụng dáng giày Vulcanized High Top của Ananas trong thiết kế và cảm hứng bắt nguồn từ linh vật Peeping - đại diện cho tinh thần xuyên suốt 6 năm qua Sneaker Fest Vietnam, chúng tôi tự tin đây sẽ là
                sản phẩm đáng mong chờ cho mọi “đầu giày” vào mùa hè năm nay...
              </h3>
              <h3 class="post-detail">
                <a href="https://ananas.vn/sneaker-fest-vietnam-va-su-ket-hop/">Đọc thêm</a>
              </h3>
            </div>
            <div class="item-break"></div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 post-item">
              <a href="https://ananas.vn/anatomy-of-vulcanized/">
                <img
                  width="300"
                  height="300"
                  src="https://ananas.vn/wp-content/uploads/shoes-anatomy-thumbnail.jpg"
                />
              </a>
              <h3 class="post-title">
                <a href="https://ananas.vn/anatomy-of-vulcanized/">"GIẢI PHẪU" GIÀY VULCANIZED</a>
              </h3>
              <h3
                class="post-des"
              >Trong phạm vi bài viết ngắn, hãy cùng nhau tìm hiểu cấu tạo giày Vulcanized Sneaker - loại sản phẩm mà Ananas đã chọn làm "cốt lõi" để theo đuổi trong suốt hành trình của mình...</h3>
              <h3 class="post-detail">
                <a href="https://ananas.vn/anatomy-of-vulcanized/">Đọc thêm</a>
              </h3>
            </div>
          </div>
          <div class="row text-center load-more-icon-news">
            <img src="../assets/images/loading.gif" />
          </div>
          <div class="row text-center visible-xs visible-sm">
            <a id="btnMoreNews" class="btn btn-load-more">MUỐN XEM NỮA</a>
          </div>
        </div>
      </div>
      <div class="row text-center load-more-icon hidden-xs hidden-sm">
        <img src="../assets/images/loading.gif" />
      </div>
      <div class="row text-center hidden-xs hidden-sm">
        <a id="btnMoreInsNews" class="btn btn-load-more">MUỐN XEM NỮA</a>
      </div>
    </div>
    <div class="templates">
      <div id="templatePopupYesNo">
        <div class="row message">
          BẠN CÓ CHẮC CHẮN MUỐN HUỶ
          <br />ĐƠN HÀNG NÀY KHÔNG?
        </div>
        <div class="row button">
          <div class="col-xs-6 col-sm-6 col-md-6">
            <button class="btn btn-no" type="button">TỪ CHỐI</button>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6">
            <button class="btn btn-yes" type="button">ĐỒNG Ý</button>
          </div>
        </div>
      </div>
      <div id="templatePopupNotice">
        <div class="row message">EMAIL ĐÃ ĐƯỢC ĐĂNG KÝ THÀNH CÔNG</div>
        <div class="row button">
          <button class="btn btn-ok btn-redirect" type="button">QUAY LẠI TRANG CHỦ</button>
        </div>
      </div>
      <input type="hidden" id="home_url" value="https://ananas.vn" />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import axios from "axios";

import Product from "@/components/product-loop";
export default {
  name: "Index",
  components: {
    VueSlickCarousel,
    Product: Product
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true
      },
      settingsProSlick: {
        arrows: true,
        dots: false,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      }
    };
  },
  computed: {
    ...mapGetters({
      productSeller: "getBestSellerProduct"
    })
  },
   asyncData (context) {
     
     axios.get( "https://apiceleb.trungkienit.com/wp-json/wc/v3/products?consumer_key=ck_fe7141bf2f63c8ac3b453f98ffac5aeab778cc06&consumer_secret=cs_f934b0959423d9cf6c4c97f0ec23f1e6f92a44a1&category=30")
      .then(data => {
       return data
    //    console.log(data.data);
     //   this.setProductSeller(data.data);
    
      //  this.$store.action('setProductSeller',data);
         //       console.log(this.productSeller);

      })
      .catch();
  },
  methods:{
    ...mapActions({
            setProductSeller: 'setProductSeller',
        }),
  },
  created() {
    //this.store.dispatch('setProductSeller',);
  },
  mounted() {
  }
};
</script>

