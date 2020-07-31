<template>
  <div>
    <!-- CONTENT -->
    <div class="prd-detail container-fluid">
      <input type="hidden" id="is-page-product-detail" value="1" />
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 hidden-xs hidden-sm">
          <ol class="breadcrumb">
            <li>
              <nuxt-link to="/">Trang chủ</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'/collections/' + product.categories[0].id">{{product.categories[0].name}}</nuxt-link>
            </li>

            <li class="active">{{product.name}}</li>
          </ol>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
          <div class="wrapper-slide">
            <div class="prd-detail-main-img">
              <img v-if="product.images.length > 0" class="main-img image" @click="index = indexCurrentImage" :src="mainImage" />
              <svg v-else class="placeholder-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M324.5 212.7H203c-1.6 0-2.8 1.3-2.8 2.8V308c0 1.6 1.3 2.8 2.8 2.8h121.6c1.6 0 2.8-1.3 2.8-2.8v-92.5c0-1.6-1.3-2.8-2.9-2.8zm1.1 95.3c0 .6-.5 1.1-1.1 1.1H203c-.6 0-1.1-.5-1.1-1.1v-92.5c0-.6.5-1.1 1.1-1.1h121.6c.6 0 1.1.5 1.1 1.1V308z"></path><path d="M210.4 299.5H240v.1s.1 0 .2-.1h75.2v-76.2h-105v76.2zm1.8-7.2l20-20c1.6-1.6 3.8-2.5 6.1-2.5s4.5.9 6.1 2.5l1.5 1.5 16.8 16.8c-12.9 3.3-20.7 6.3-22.8 7.2h-27.7v-5.5zm101.5-10.1c-20.1 1.7-36.7 4.8-49.1 7.9l-16.9-16.9 26.3-26.3c1.6-1.6 3.8-2.5 6.1-2.5s4.5.9 6.1 2.5l27.5 27.5v7.8zm-68.9 15.5c9.7-3.5 33.9-10.9 68.9-13.8v13.8h-68.9zm68.9-72.7v46.8l-26.2-26.2c-1.9-1.9-4.5-3-7.3-3s-5.4 1.1-7.3 3l-26.3 26.3-.9-.9c-1.9-1.9-4.5-3-7.3-3s-5.4 1.1-7.3 3l-18.8 18.8V225h101.4z"></path><path d="M232.8 254c4.6 0 8.3-3.7 8.3-8.3s-3.7-8.3-8.3-8.3-8.3 3.7-8.3 8.3 3.7 8.3 8.3 8.3zm0-14.9c3.6 0 6.6 2.9 6.6 6.6s-2.9 6.6-6.6 6.6-6.6-2.9-6.6-6.6 3-6.6 6.6-6.6z"></path></svg>
              <img v-if="product.images.length > 0"
                id="zoom"
                @click="index = indexCurrentImage"
                class="zoom-img hidden-xs hidden-sm"
                src="@/assets/images/icon_zoom.svg"
              />
              <!--
              <img
                class="image"
                v-for="(image, i) in images"
                :src="image.src"
                :key="i"
                @click="index = i"
              />
              -->
              <client-only placeholder="Loading...">
                <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
              </client-only>
            </div>
            <div class="prd-detail-slide1" v-if="product.images.length > 1">
              <VueSlickCarousel v-bind="settingsProSlickMain">
                <div
                  class="thumbnail"
                  v-for="(image,i) in product.images"
                  :key="i"
                  @click="changeImageByThumb(image.src,i)"
                >
                  <div class="cont-item">
                    <img v-if="product.images.length > 0" :src="image.src" :data-img-normal="image.src" :data-img-large="image.src" />
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>

          <div class="row prd-detail-img hidden-xs hidden-sm"></div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 prd-detail-right">
          <h4>{{product.name}}</h4>
          <h6 class="detail1 info-product1">
            <input type="hidden" id="productId" value="26314" />
            <span v-if="product.sku">
              Mã sản phẩm:
              <strong>{{product.sku}}</strong>
            </span>
            <span>
              Tình trạng:
              <strong v-if="product.stock_status == 'outofstock'">Hết hàng</strong>
              <strong v-else>Còn hàng</strong>
            </span>
          </h6>
          <h5 class="detail1">
            <span class="saleprice">{{formatPrice(product.price)}}đ</span>
            <span class="realprice"  v-if="product.on_sale">{{formatPrice(product.regular_price)}}đ</span>
          </h5>
          <div class="divider"></div>
          <h6 class="detail1" v-html="product.short_description"></h6>
          <div class="divider"></div>
          <!--
          <div class="color">
            <ul class="nav tree">
              <li class="cb-color-fixed">
                <label data-link>
                  <span class="bg-color" style="background-color: #656344;"></span>
                  <input name="cbColor" type="checkbox" value="0" hidden />
                </label>
              </li>
            </ul>
          </div>
          <div class="divider"></div>
          -->
          <div class="row">
            <div
              class="col-xs-12 col-sm-6 col-md-6"
              v-for="attr in product.attributes"
              :key="attr.id"
            >
              <h5>{{attr.name}}</h5>
              <CustomSelect :options="attr.options" />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <h5>SỐ LƯỢNG</h5>
              <Quantity id="pickQuantity"></Quantity>
            </div>
          </div>
          <div class="row grp-btn1">
            <a
              href="javascript:void(0)"
              class="btn btn-addcart"
              id="addProductToCart"
              data-ananas-validations
            >THÊM VÀO GIỎ HÀNG</a>
            <a
              href="javascript:void(0)"
              data-id-product="26314"
              class="btn btn-like addToWishList"
              data-is-product-list-page="0"
              data-liked="false"
              data-action="transferCartToWishList"
              data-img="@/assets/images/Heart_product_1.svg"
              data-img-like="@/assets/images/Heart_product_2.svg ?"
              data-img-unlike="@/assets/images/Heart_product_1.svg"
            >
              <img id="image-heart" src="@/assets/images/Heart_product_1.svg" />
            </a>
          </div>
          <div class="row">
            <a
              data-url-cart="https://ananas.vn/your-cart"
              id="pickOrder"
              data-ananas-validations
              class="btn btn-checkout"
            >THANH TOÁN</a>
            <input type="hidden" id="_wpnonce" name="_wpnonce" value="f790eefb7d" />
            <input type="hidden" name="_wp_http_referer" value="/product-detail/a61043/" />
          </div>
          <div
            class="row info-validate empty-error"
            style="display: none;"
          >Vui lòng chọn Size/Số lượng phù hợp</div>
          <div>
            <div class="panel-group" id="prdDetailInfor" role="tablist" aria-multiselectable="true">
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingOne">
                  <h4 class="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#prdDetailInfor"
                      href="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      THÔNG TIN SẢN PHẨM
                      <span class="caret"></span>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseOne"
                  class="panel-collapse collapse in"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div class="divider-1"></div>
                  <div class="panel-body">
                    <h6 v-html="product.description"></h6>
                  </div>
                </div>
                <div class="divider-1"></div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingTwo">
                  <h4 class="panel-title">
                    <a
                      class="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#prdDetailInfor"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      QUY ĐỊNH ĐỔI SẢN PHẨM
                      <span class="caret"></span>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseTwo"
                  class="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div class="divider-1"></div>
                  <div class="panel-body">
                    <h6>
                      <ul>
                        <li>Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.</li>
                        <li>Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.</li>
                        <li>Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.</li>
                        <li>Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.</li>
                        <li>
                          Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:
                          <br />- Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).
                          <br />- Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.
                        </li>
                        <li>Trong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.</li>
                        <li>Không hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm.</li>
                      </ul>
                    </h6>
                  </div>
                </div>
                <div class="divider-1"></div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingThree">
                  <h4 class="panel-title">
                    <a
                      class="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#prdDetailInfor"
                      href="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      BẢO HÀNH THẾ NÀO ?
                      <span class="caret"></span>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseThree"
                  class="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div class="divider-1"></div>
                  <div class="panel-body">
                    <h6>
                      <p>
                        Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua
                        hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung tâm bảo hành Ananas ngay trong
                        trung tâm TP.HCM trong giờ hành chính:
                      </p>
                      <p>Lầu 1, 75/1 Mai Thị Lựu, P. Đa Kao, Q1, TP.HCM</p>
                    </h6>
                  </div>
                </div>
                <div class="divider-1 hidden-xs hidden-sm"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 visible-xs visible-sm">
          <div class="row prd-detail-img"></div>
        </div>
      </div>
    </div>

    <div class="prd-detail-divider"></div>

    <div class="prd-detail container-fluid" v-if="productRelated.length > 1 ">
      <div class="row">
        <div class="prd-detail-title">SẢN PHẨM LIÊN QUAN</div>
        <div id="productRef" class="prd-detail-slide">
          <VueSlickCarousel v-bind="settingsProSlick">
            <Product v-for="products in productRelated" :product="products" :key="products.id"></Product>
          </VueSlickCarousel>
        </div>
      </div>
    </div>

    <div class="prd-detail-divider"></div>

    <div
      class="prd-detail container-fluid"
      data-product-seen
      data-product-i-d="26314"
      data-action="addProductToSeen"
      v-if="getProductViewd.length > 1 "
    >
      <div class="row">
        <div class="prd-detail-title">SẢN PHẨM ĐÃ XEM</div>
        <div id="productViewed" class="prd-detail-slide">
          <VueSlickCarousel v-if="getProductViewd.length > 1 " v-bind="settingsProSlick">
            <Product v-for="products in getProductViewd" :product="products" :key="products.id"></Product>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <input type="hidden" value="1" class="isProductDetailPage" />
    <input type="hidden" value="26314" class="productDetailId" />
    <input type="hidden" value="Vintas The New Military - High Top" class="productName" />
    <input type="hidden" value="Capulet Olive" class="productColor" />
    <input type="hidden" value="A61043" class="productSku" />
    <input type="hidden" value="495000" class="productPrice" />
    <input type="hidden" value="Giày" class="productCategory" />
    <!-- END CONTENT -->
  </div>
</template>

<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import VueGallerySlideshow from "vue-gallery-slideshow";
import CustomSelect from "@/components/CustomSelect.vue";
import Quantity from "@/components/Quantity.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Product from "@/components/product-loop";

export default {
  data() {
    return {
      mainImage: "",
      indexCurrentImage: 0,
      images: [],
      index: null,
      settingsProSlickMain: {
        arrows: true,
        dots: false,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
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
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
      value: "",
    };
  },
  async asyncData(context) {
    //Lấy thông tin snar phẩm hiện tại
    let id = context.route.params.id;
    let url =
    process.env.baseUrl +  "/products/" +
      id +
      "?" + process.env.baseKey;
    const response = await axios.get(url);
    const product = response.data;

    //Lấy nhóm sản phẩm liên quan
    let idCategory = product.categories[0].id;
    let urlRelated =
     process.env.baseUrl + "/products/?"+process.env.baseKey+"&category=" +
      idCategory;
    const responseRelated = await axios.get(urlRelated);

    const productRelated = responseRelated.data;
    return {
      product,
      productRelated,
    };
  },
  components: {
    VueSlickCarousel,
    VueGallerySlideshow,
    CustomSelect,
    Quantity,
    Product,
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    changeImageByThumb(src, i) {
      this.mainImage = src;
      this.indexCurrentImage = i;
    },
    ...mapActions({
      setProductViewed: "setProductViewed",
    }),
  },
  created() {
    if(this.product.images.length  > 0){
      this.mainImage = this.product.images[0].src;
    }
    this.test;
  },
  mounted() {
    this.setProductViewed(this.product);
  },
  computed: {
    test() {
       if(this.product.images.length  > 0){
      this.product.images.map((v) => {
        this.images.push(v.src);
      });
      }
    },
    ...mapGetters({
      getProductViewd: "getProductViewd",
    }),
  },
};
</script>


<style scoped>
.col-xs-12.col-sm-6.col-md-6 {
  margin-bottom: 15px;
}
</style>
