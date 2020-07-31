<template>
  <div class="prd1-cont container-fluid">
    <div class="row">
      <!-- FILTER ON PC VERSION (will be hidden on mobile)-->
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 prd1-left hidden-xs hidden-sm">
        <div class="row left-type">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" data-id="men,women" class>
              <a href="#all" aria-controls="home" role="tab" data-toggle="tab">TẤT CẢ</a>
            </li>
            <li role="presentation" class="type-divider"></li>
            <li role="presentation" data-id="men" class="active">
              <a href="#men" aria-controls="profile" role="tab" data-toggle="tab">NAM</a>
            </li>
            <li role="presentation" class="type-divider"></li>
            <li data-id="women" role="presentation" class>
              <a href="#women" aria-controls="profile" role="tab" data-toggle="tab">NỮ</a>
            </li>
          </ul>
        </div>
        <div class="row left-divider"></div>
        <div class="row left-type-item">
          <!-- Tab panes -->
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane" id="men">
              <ul class="nav nav-pills nav-stacked">
                <li class data-id="shoes">
                  <a>
                    Giày
                    <span class="glyphicon"></span>
                  </a>
                </li>
                <li class data-id="top">
                  <a>
                    Nửa trên
                    <span class="glyphicon"></span>
                  </a>
                </li>
                <li class data-id="accessories">
                  <a>
                    Phụ kiện
                    <span class="glyphicon"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div role="tabpanel" class="tab-pane" id="women">
              <ul class="nav nav-pills nav-stacked">
                <li class data-id="shoes">
                  <a>
                    Giày
                    <span class="glyphicon"></span>
                  </a>
                </li>
                <li class data-id="top">
                  <a>
                    Nửa trên
                    <span class="glyphicon"></span>
                  </a>
                </li>
                <li class data-id="accessories">
                  <a>
                    Phụ kiện
                    <span class="glyphicon"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div role="tabpanel" class="tab-pane active" id="all">
              <ul class="nav nav-pills nav-stacked">
                <li class data-id="shoes">
                  <a>
                    Giày
                    <span class="glyphicon"></span>
                  </a>
                </li>
                <li class data-id="top">
                  <a>
                    Nửa trên
                    <span class="glyphicon"></span>
                  </a>
                </li>
                <li class data-id="accessories">
                  <a>
                    Phụ kiện
                    <span class="glyphicon"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row left-divider"></div>

        <div class="row left-tree">
          <ul class="nav">
         
            <li class="first-lvl">
              <label label-default class="tree-toggle nav-header orange">
                DÒNG SẢN PHẨM
                <span class="caret caret-active"></span>
              </label>
              <ul class="nav tree">
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="basas" hidden />Basas
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="vintas" hidden />Vintas
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="urbas" hidden />Urbas
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="pattas" hidden />Pattas
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="creas" hidden />Creas
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="cbStatus"
                      class="cb-item"
                      type="checkbox"
                      value="graphic-tee"
                      hidden
                    />Graphic Tee
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="hoodie" hidden />Hoodie
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="cbStatus"
                      class="cb-item"
                      type="checkbox"
                      value="sweatshirt"
                      hidden
                    />Sweatshirt
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="backpack" hidden />Backpack | Ba lô
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="socks" hidden />Socks | Vớ
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="cap" hidden />Cap | Nón
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="track-6" hidden />Track 6
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="cbStatus"
                      class="cb-item"
                      type="checkbox"
                      value="basic-tee-tron"
                      hidden
                    />Basic Tee | Áo thun cơ bản
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="cbStatus"
                      class="cb-item"
                      type="checkbox"
                      value="shoes-lace"
                      hidden
                    />Shoes Lace | Dây giày
                    <span class="glyphicon"></span>
                  </label>
                </li>
              </ul>
            </li>
            <li class="nav-divider"></li>
            <li class="first-lvl">
              <label label-default class="tree-toggle nav-header orange">
                GIÁ
                <span class="caret caret-active"></span>
              </label>
              <ul class="nav tree">
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="500-699k" hidden />500k - 699k
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="600k" hidden />&gt; 600k
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="400-499k" hidden />400k - 499k
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="300-399k" hidden />300k - 399k
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="200-299k" hidden />200k - 299k
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="cbStatus"
                      class="cb-item"
                      type="checkbox"
                      value="200k-range-price"
                      hidden
                    />&lt; 200k
                    <span class="glyphicon"></span>
                  </label>
                </li>
              </ul>
            </li>
            <li class="nav-divider"></li>
         
            <li class="first-lvl">
              <label label-default class="tree-toggle nav-header orange">
                SIZE SẢN PHẨM KHÁC
                <span class="caret caret-active"></span>
              </label>
              <ul class="nav tree">
                <li class="cb-size">
                  <label>
                    <input name="cbSize" type="checkbox" value="free" hidden />free
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="s" hidden />S
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="m" hidden />M
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="l" hidden />L
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="xl" hidden />XL
                  </label>
                </li>
              </ul>
            </li>
            <li class="nav-divider"></li>
            <li class="first-lvl">
              <label label-default class="tree-toggle nav-header orange">
                CHẤT LIỆU
                <span class="caret caret-active"></span>
              </label>
              <ul class="nav tree">
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="canvas" hidden />Canvas | Vải
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="suede" hidden />Suede | Da lộn
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="pu" hidden />Synthetic Leather
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="leather" hidden />Leather | Da
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="cotton" hidden />Cotton
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="corduroy" hidden />Corduroy
                    <span class="glyphicon"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input name="cbStatus" class="cb-item" type="checkbox" value="polyester" hidden />Polyester
                    <span class="glyphicon"></span>
                  </label>
                </li>
              </ul>
            </li>
            <li class="nav-divider"></li>
            <li class="first-lvl">
              <label label-default class="tree-toggle nav-header orange">
                SIZE GIÀY
                <span class="caret caret-active"></span>
              </label>
              <ul class="nav tree">
                <li class="cb-size">
                  <label>
                    <input name="cbSize" type="checkbox" value="35" hidden />35
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="36" hidden />36
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="37" hidden />37
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="38" hidden />38
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="39" hidden />39
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="40" hidden />40
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="41" hidden />41
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="42" hidden />42
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="43" hidden />43
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="44" hidden />44
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="45" hidden />45
                  </label>
                  <label>
                    <input name="cbSize" type="checkbox" value="46" hidden />46
                  </label>
                </li>
              </ul>
            </li>
            <li class="nav-divider"></li>
            <li class="first-lvl">
              <label label-default class="tree-toggle nav-header orange">
                MÀU SẮC
                <span class="caret caret-active"></span>
              </label>
              <ul class="nav tree">
                <li class="cb-color">
                  <label>
                    <span class="bg-color" style="background-color: #998338;"></span>
                    <input name="cbColor" type="checkbox" value="yellow-grasses" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #f5f5dc;"></span>
                    <input name="cbColor" type="checkbox" value="beige" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #455851;"></span>
                    <input name="cbColor" type="checkbox" value="pineneedle" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #574d35;"></span>
                    <input name="cbColor" type="checkbox" value="dark-olive" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #a49c8e;"></span>
                    <input name="cbColor" type="checkbox" value="goat" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #006964;"></span>
                    <input name="cbColor" type="checkbox" value="teal-color" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #ddbe78;"></span>
                    <input name="cbColor" type="checkbox" value="creme" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #999999;"></span>
                    <input name="cbColor" type="checkbox" value="grey" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #0e2366;"></span>
                    <input name="cbColor" type="checkbox" value="navy" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #624018;"></span>
                    <input name="cbColor" type="checkbox" value="brown" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #f4f4f4;"></span>
                    <input name="cbColor" type="checkbox" value="white" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #588732;"></span>
                    <input name="cbColor" type="checkbox" value="green" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #6633cc;"></span>
                    <input name="cbColor" type="checkbox" value="violet" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #ff80aa;"></span>
                    <input name="cbColor" type="checkbox" value="pink" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #ffcc00;"></span>
                    <input name="cbColor" type="checkbox" value="yellow" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #fe6702;"></span>
                    <input name="cbColor" type="checkbox" value="orange" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #c10013;"></span>
                    <input name="cbColor" type="checkbox" value="red" hidden />
                  </label>

                  <label>
                    <span class="bg-color" style="background-color: #000000;"></span>
                    <input name="cbColor" type="checkbox" value="black" hidden />
                  </label>
                </li>
              </ul>
            </li>
            <li class="nav-divider"></li>
          </ul>
        </div>
      </div>
      <!-- END FILTER ON PC VERSION (will be hidden on mobile)-->

      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 prd1-right">
        <!-- PC -->
        <!--
        <div class="row prd1-right-box hidden-xs hidden-sm" v-if="this.imageCollection">
          <img :src="this.imageCollection" />
        </div>
        -->
        <!-- End PC -->

        <!-- Mobile -->
        <div class="row prd1-right-box-mobile visible-xs visible-sm">
          <img src="@/assets/images/mobile_productlist_theearth.jpg" />
        </div>
        <!-- End Mobile -->

        <!-- FILTER ON MOBILE VERSION -->
        <div class="row filter-mobile visible-xs visible-sm">
          <div class="title-main">
            <ul class="nav nav-tabs nav-justified" role="tablist">
              <li role="presentation" data-id="men,women" class>
                <a href="#mb_all" role="tab" data-toggle="tab">TẤT CẢ</a>
              </li>
              <div class="divider"></div>
              <li role="presentation" data-id="men" class="active">
                <a href="#mb_men" role="tab" data-toggle="tab">NAM</a>
              </li>
              <div class="divider"></div>
              <li role="presentation" data-id="women" class>
                <a href="#mb_women" role="tab" data-toggle="tab">NỮ</a>
              </li>
            </ul>
          </div>

          <div class="tab">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs mb-category">
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane" id="mb_men">
                  <li class data-id="shoes">
                    <a href="#shoes">Giày</a>
                  </li>
                  <div class="divider"></div>
                  <li class data-id="top">
                    <a href="#top">Nửa trên</a>
                  </li>
                  <div class="divider"></div>
                  <li class data-id="accessories">
                    <a href="#accessories">Phụ kiện</a>
                  </li>
                </div>
                <div role="tabpanel" class="tab-pane" id="mb_women">
                  <li class data-id="shoes">
                    <a href="#shoes">Giày</a>
                  </li>
                  <div class="divider"></div>
                  <li class data-id="top">
                    <a href="#top">Nửa trên</a>
                  </li>
                  <div class="divider"></div>
                  <li class data-id="accessories">
                    <a href="#accessories">Phụ kiện</a>
                  </li>
                </div>
                <div role="tabpanel" class="tab-pane active" id="mb_all">
                  <li class data-id="shoes">
                    <a href="#shoes">Giày</a>
                  </li>
                  <div class="divider"></div>
                  <li class data-id="top">
                    <a href="#top">Nửa trên</a>
                  </li>
                  <div class="divider"></div>
                  <li class data-id="accessories">
                    <a href="#accessories">Phụ kiện</a>
                  </li>
                </div>
              </div>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content tabs">
              <!-- Content Section1 -->
              <div class="tab-pane fade in active">
                <div
                  class="col-xs-6 col-sm-6 option collapsed"
                  data-target="#option1"
                  data-toggle="collapse"
                >
                  TÙY CHỌN
                  <span class="caret"></span>
                </div>
                <div class="col-xs-6 col-sm-6 txt-countproduct">181 Sản phẩm</div>
                <div class="col-xs-12 col-sm-12">
                  <div id="option1" class="collapse left-tree-mobile">
                    <ul class="nav">
                      <li class="first-lvl">
                        <label label-default class="tree-toggle nav-header orange">
                          TRẠNG THÁI
                          <span class="caret caret-active"></span>
                        </label>
                        <ul class="nav tree">
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="limited-edition"
                                hidden
                              />Limited Edition
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="online-only"
                                hidden
                              />Online Only
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="sale-off"
                                hidden
                              />Sale off
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="pre-order"
                                hidden
                              />Pre-order
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="best-seller"
                                hidden
                              />Best Seller
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="new-arrival"
                                hidden
                              />New Arrival
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-divider"></li>
                      <li class="first-lvl">
                        <label label-default class="tree-toggle nav-header orange">
                          KIỂU DÁNG
                          <span class="caret caret-active"></span>
                        </label>
                        <ul class="nav tree">
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="low-top"
                                hidden
                              />Low Top
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="high-top"
                                hidden
                              />High Top
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="slip-on"
                                hidden
                              />Slip-on
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-divider"></li>
                      <li class="first-lvl">
                        <label label-default class="tree-toggle nav-header orange">
                          DÒNG SẢN PHẨM
                          <span class="caret caret-active"></span>
                        </label>
                        <ul class="nav tree">
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="basas"
                                hidden
                              />Basas
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="vintas"
                                hidden
                              />Vintas
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="urbas"
                                hidden
                              />Urbas
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="pattas"
                                hidden
                              />Pattas
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="creas"
                                hidden
                              />Creas
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="graphic-tee"
                                hidden
                              />Graphic Tee
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="hoodie"
                                hidden
                              />Hoodie
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="sweatshirt"
                                hidden
                              />Sweatshirt
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="backpack"
                                hidden
                              />Backpack | Ba lô
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="socks"
                                hidden
                              />Socks | Vớ
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="cap"
                                hidden
                              />Cap | Nón
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="track-6"
                                hidden
                              />Track 6
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="basic-tee-tron"
                                hidden
                              />Basic Tee | Áo thun cơ bản
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="shoes-lace"
                                hidden
                              />Shoes Lace | Dây giày
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-divider"></li>
                      <li class="first-lvl">
                        <label label-default class="tree-toggle nav-header orange">
                          GIÁ
                          <span class="caret caret-active"></span>
                        </label>
                        <ul class="nav tree">
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="500-699k"
                                hidden
                              />500k - 699k
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="600k"
                                hidden
                              />&gt; 600k
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="400-499k"
                                hidden
                              />400k - 499k
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="300-399k"
                                hidden
                              />300k - 399k
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="200-299k"
                                hidden
                              />200k - 299k
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="200k-range-price"
                                hidden
                              />&lt; 200k
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-divider"></li>
                      <li class="first-lvl">
                        <label label-default class="tree-toggle nav-header orange">
                          BỘ SƯU TẬP
                          <span class="caret caret-active"></span>
                        </label>
                        <ul class="nav tree">
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="corluray"
                                hidden
                              />Corluray
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="black-lace"
                                hidden
                              />Black Lace
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="pineapple-or-ananas"
                                hidden
                              />Pineapple Or Ananas
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="the-ocean"
                                hidden
                              />The Ocean
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="pop-up"
                                hidden
                              />Pop-up
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="inversion"
                                hidden
                              />Inversion
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="cloudy"
                                hidden
                              />Cloudy
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="bloody"
                                hidden
                              />Bloody
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="lego"
                                hidden
                              />Lego
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="the-gang"
                                hidden
                              />The Gang
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="the-new-military"
                                hidden
                              />The New Military
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="mister"
                                hidden
                              />Mister
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="earth"
                                hidden
                              />Earth
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="saigon-1980s"
                                hidden
                              />Saigon 1980s
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="bleached-sand-pack"
                                hidden
                              />New Bleached Sand
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="yesterday"
                                hidden
                              />Yesterday
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="thom-x-ananas"
                                hidden
                              />Thơm x Ananas
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="mono"
                                hidden
                              />Mono
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="new-simple-life"
                                hidden
                              />New Simple Life
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="mono-black"
                                hidden
                              />Mono-Black
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="hook-n-loop"
                                hidden
                              />Hook n' Loop
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="new-familiar"
                                hidden
                              />New Familiar
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="bumper-gum"
                                hidden
                              />Bumper Gum
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-divider"></li>
                      <!-- Content Size-->
                      <li class="first-lvl">
                        <label label-default class="tree-toggle nav-header orange">
                          SIZE SẢN PHẨM KHÁC
                          <span class="caret caret-active"></span>
                        </label>
                        <ul class="nav tree">
                          <li class="cb-size">
                            <label>
                              <input name="cbSize" type="checkbox" value="free" hidden />free
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="s" hidden />S
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="m" hidden />M
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="l" hidden />L
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="xl" hidden />XL
                            </label>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-divider"></li>
                      <li class="first-lvl">
                        <label label-default class="tree-toggle nav-header orange">
                          CHẤT LIỆU
                          <span class="caret caret-active"></span>
                        </label>
                        <ul class="nav tree">
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="canvas"
                                hidden
                              />Canvas | Vải
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="suede"
                                hidden
                              />Suede | Da lộn
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="pu"
                                hidden
                              />Synthetic Leather
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="leather"
                                hidden
                              />Leather | Da
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="cotton"
                                hidden
                              />Cotton
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="corduroy"
                                hidden
                              />Corduroy
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                name="cbStatus"
                                class="cb-item"
                                type="checkbox"
                                value="polyester"
                                hidden
                              />Polyester
                              <span class="glyphicon"></span>
                            </label>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-divider"></li>
                      <!-- Content Size-->
                      <li class="first-lvl">
                        <label label-default class="tree-toggle nav-header orange">
                          SIZE GIÀY
                          <span class="caret caret-active"></span>
                        </label>
                        <ul class="nav tree">
                          <li class="cb-size">
                            <label>
                              <input name="cbSize" type="checkbox" value="35" hidden />35
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="36" hidden />36
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="37" hidden />37
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="38" hidden />38
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="39" hidden />39
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="40" hidden />40
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="41" hidden />41
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="42" hidden />42
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="43" hidden />43
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="44" hidden />44
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="45" hidden />45
                            </label>
                            <label>
                              <input name="cbSize" type="checkbox" value="46" hidden />46
                            </label>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-divider"></li>
                      <!-- Content Color -->
                      <li class="first-lvl">
                        <label label-default class="tree-toggle nav-header orange">
                          MÀU SẮC
                          <span class="caret caret-active"></span>
                        </label>
                        <ul class="nav tree">
                          <li class="cb-color">
                            <label>
                              <span class="bg-color" style="background-color: #998338;"></span>
                              <input name="cbColor" type="checkbox" value="yellow-grasses" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #f5f5dc;"></span>
                              <input name="cbColor" type="checkbox" value="beige" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #455851;"></span>
                              <input name="cbColor" type="checkbox" value="pineneedle" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #574d35;"></span>
                              <input name="cbColor" type="checkbox" value="dark-olive" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #a49c8e;"></span>
                              <input name="cbColor" type="checkbox" value="goat" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #006964;"></span>
                              <input name="cbColor" type="checkbox" value="teal-color" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #ddbe78;"></span>
                              <input name="cbColor" type="checkbox" value="creme" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #999999;"></span>
                              <input name="cbColor" type="checkbox" value="grey" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #0e2366;"></span>
                              <input name="cbColor" type="checkbox" value="navy" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #624018;"></span>
                              <input name="cbColor" type="checkbox" value="brown" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #f4f4f4;"></span>
                              <input name="cbColor" type="checkbox" value="white" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #588732;"></span>
                              <input name="cbColor" type="checkbox" value="green" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #6633cc;"></span>
                              <input name="cbColor" type="checkbox" value="violet" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #ff80aa;"></span>
                              <input name="cbColor" type="checkbox" value="pink" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #ffcc00;"></span>
                              <input name="cbColor" type="checkbox" value="yellow" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #fe6702;"></span>
                              <input name="cbColor" type="checkbox" value="orange" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #c10013;"></span>
                              <input name="cbColor" type="checkbox" value="red" hidden />
                            </label>
                            <label>
                              <span class="bg-color" style="background-color: #000000;"></span>
                              <input name="cbColor" type="checkbox" value="black" hidden />
                            </label>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 btn-clear fixed hidden">XÓA CHỌN</div>
                <div class="col-xs-6 col-sm-6 btn-filter fixed hidden">LỌC</div>
              </div>
              <!-- End Content Section1 -->
            </div>
          </div>
        </div>
        <!-- END FILTER ON MOBILE VERSION -->
        <div class="row prd1-right-items">
          <div
            class="col-xs-6 col-sm-6 col-md-4 col-lg-4 item"
            v-for="products in productCollection"
            :key="products.id"
          >
            <Product :product="products" :buyNow="buyNow"></Product>
          </div>
          <div v-if="productCollection.length == 0 " class="col-xs-12">Chưa có sản phẩm nào</div>
        </div>
        <div class="gotop hidden-xs hidden-sm" style="display: block;">
          <a href="#">
            <img src="@/assets/images/gotop.png" />
          </a>
        </div>
        <div class="text-center load-more-icon" style="display: none;">
          <img src="@/assets/images/loading.gif" />
        </div>
      </div>
      <input type="hidden" value="1" class="isProductListPage" />
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Product from "@/components/product-loop";

export default {
  data() {
    return {
        buyNow:true
    };
  },
  async asyncData(context) {
    //Lấy thông tin snar phẩm hiện tại
    let id = context.route.params.id;
    
    let urlCollection = process.env.baseUrl +"/products/?" +process.env.baseKey +"&per_page=20";

    const responseCollection = await axios.get(urlCollection);
    const productCollection = responseCollection.data;
    console.log(productCollection);
    return {
      productCollection,
    };
  },
  components: {
    Product,
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  created() {},
  mounted() {
    
  },
  computed: {
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
