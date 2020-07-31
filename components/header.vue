<template>
  <div>
    <div class="header container-fluid hidden-xs hidden-sm">
      <div class="row">
        <ul class="menu">
          <li>
            <a href="https://ananas.vn/search-order">
              <img src="../assets/images/icon_tra_cuu_don_hang.svg" /> Tra cứu đơn hàng
            </a>
          </li>
          <li>
            <a href="https://ananas.vn/stores">
              <img src="../assets/images/icon_tim_cua_hang.svg" /> Tìm cửa hàng
            </a>
          </li>
          <li>
            <a href="https://ananas.vn/your-wishlist">
              <img src="../assets/images/icon_heart_header.svg" /> Yêu thích
            </a>
          </li>
          <li>
            <a href="https://ananas.vn/coming-soon">
              <img src="../assets/images/icon_dang_nhap.svg" /> Đăng nhập
            </a>
          </li>
          <li>
            <a href="https://ananas.vn/your-cart/">
              <img src="../assets/images/icon_gio_hang.svg" />
              Giỏ hàng (
              <span class="countProduct">7</span>)
            </a>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="navbar center">
          <div class="navbar-header">
            <div class="navbar-brand">
              <nuxt-link to="/">
                <img src="../assets/images/Logo_Ananas_Header.svg" />
              </nuxt-link>
            </div>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="dropdown open">
                <a href="https://ananas.vn/product-list/" class="dropdown-toggle">
                  SẢN PHẨM
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu style1">
                  <li>
                    <a href="/product-list/?gender=men">
                      <img src="../assets/images/Menu_Nam.jpg" />
                    </a>
                    <a class="style1-title" href="/product-list/?gender=men">CHO NAM</a>
                  </li>
                  <li>
                    <a href="/product-list/?gender=women">
                      <img src="../assets/images/Menu_Nu.jpg" />
                    </a>
                    <a class="style1-title" href="/product-list/?gender=women">CHO NỮ</a>
                  </li>
                  <li>
                    <a href="/product-list/?gender=men,women&category=&attribute=sale-off">
                      <img src="../assets/images/Menu_Sale-off.jpg" />
                    </a>
                    <a
                      class="style1-title"
                      href="/product-list/?gender=men,women&category=&attribute=sale-off"
                    >OUTLET SALE</a>
                  </li>
                  <li>
                    <a
                      href="/product-list?gender=men,women&category=top,bottom,accessories&attribute="
                    >
                      <img src="../assets/images/Menu_Phu-kien.jpg" />
                    </a>
                    <a
                      class="style1-title"
                      href="/product-list?gender=men,women&category=top,bottom,accessories&attribute="
                    >THỜI TRANG & PHỤ KIỆN</a>
                  </li>
                  <div class="style1-des">
                    <a href="/coming-soon/">
                      MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                      <span class="highlight">DỨA</span> !
                    </a>
                  </div>
                </ul>
              </li>
              <li class="line"></li>
              <li class="dropdown open">
                <a href="https://ananas.vn/product-list/?gender=men" class="dropdown-toggle">
                  NAM
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu style2">
                  <li>
                    <a href="#" class="title">NỔI BẬT</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href></a>
                    <a href="/product-list?gender=men&category=&attribute=best-seller">Best Seller</a>
                    <a href="/product-list?gender=men&category=&attribute=new-arrival">New Arrival</a>
                    <a href="/product-list?gender=men&category=&attribute=sale-off">Sale off</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Bộ sưu tập</a>
                    <a
                      href="/product-list?gender=&category=&attribute=pineapple-or-ananas"
                    >Pineapple Or Ananas</a>
                    <a href="/product-list?gender=&category=&attribute=corluray">Corluray</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Collaboration</a>
                    <a class="blank">&nbsp;</a>
                  </li>
                  <li class="style2-divider"></li>
                  <li>
                    <a href="#" class="title">GIÀY</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Dòng sản phẩm</a>
                    <a href="/product-list?gender=men&category=&attribute=basas">Basas</a>
                    <a href="/product-list?gender=men&category=&attribute=vintas">Vintas</a>
                    <a href="/product-list?gender=men&category=&attribute=urbas">Urbas</a>
                    <a href="/product-list?gender=men&category=&attribute=pattas">Pattas</a>
                    <a href="/product-list?gender=men&category=&attribute=creas">Creas</a>
                    <a href="/product-list?gender=men&category=&attribute=track-6">Track 6</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Style</a>
                    <a
                      href="/product-list?gender=men&category=&attribute=high-top?gender=men&category=&attribute=high-top"
                    >High Top</a>
                    <a href="/product-list">Low Top</a>
                    <a href="/product-list?gender=men&category=&attribute=slip-on">Slip-on</a>
                    <a class="blank">&nbsp;</a>
                    <a
                      class="title1"
                      href="/product-list?gender=men&category=shoes&attribute="
                    >Tất cả giày</a>
                    <a class="blank">&nbsp;</a>
                  </li>
                  <li>
                    <a
                      href="/product-list?gender=men&category=top,bottom,accessories&attribute="
                      class="title"
                    >THỜI TRANG & PHỤ KIỆN</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Nửa trên</a>
                    <a href="/product-list?gender=men&category=&attribute=basic-tee-tron">Basic Tee</a>
                    <a href="/product-list/?gender=&category=&attribute=graphic-tee">Graphic tee</a>
                    <a href="/product-list?gender=&category=&attribute=sweatshirt">Sweatshirt</a>
                    <a href="/product-list?gender=&category=&attribute=hoodie">Hoodie</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Phụ kiện</a>
                    <a href="/product-list?gender=men&category=&attribute=cap">Nón</a>
                    <a href="/product-list?gender=men&category=&attribute=shoes-lace">Dây giày</a>
                    <a href="/product-list?gender=men&category=&attribute=socks">Vớ</a>
                    <a href="/product-list?gender=men&category=&attribute=backpack">Ba lô & Túi</a>
                    <a class="blank">&nbsp;</a>
                    <a
                      class="title1"
                      href="/product-list?gender=men&category=top,bottom,accessories&attribute="
                    >Xem tất cả</a>
                    <a class="blank">&nbsp;</a>
                  </li>
                  <div class="style2-des">
                    <a href="/coming-soon/">
                      MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                      <span class="highlight">DỨA</span> !
                    </a>
                  </div>
                </ul>
              </li>
              <li class="line"></li>
              <li class="dropdown open">
                <a href="https://ananas.vn/product-list/?gender=women" class="dropdown-toggle">
                  NỮ
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu style2">
                  <li>
                    <a href class="title">NỔI BẬT</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href></a>
                    <a href="/product-list?gender=women&category=&attribute=best-seller">Best Seller</a>
                    <a href="/product-list?gender=women&category=&attribute=new-arrival">New Arrival</a>
                    <a href="/product-list?gender=women&category=&attribute=sale-off">Sale-off</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Bộ sưu tập</a>
                    <a
                      href="/product-list?gender=&category=&attribute=pineapple-or-ananas"
                    >Pineapple Or Ananas</a>
                    <a href="/product-list?gender=&category=&attribute=corluray">Corluray</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href>Collaboration</a>
                    <a class="blank">&nbsp;</a>
                  </li>
                  <li class="style2-divider"></li>
                  <li>
                    <a href class="title">GIÀY</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Dòng sản phẩm</a>
                    <a href="/product-list?gender=women&category=&attribute=basas">Basas</a>
                    <a href="/product-list?gender=women&category=&attribute=vintas">Vintas</a>
                    <a href="/product-list?gender=women&category=&attribute=urbas">Urbas</a>
                    <a href="/product-list?gender=women&category=&attribute=pattas">Pattas</a>
                    <a href="/product-list?gender=women&category=&attribute=creas">Creas</a>
                    <a href="/product-list?gender=women&category=&attribute=track-6">Track 6</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Style</a>
                    <a
                      href="/product-list?gender=men&category=&attribute=high-top?gender=women&category=&attribute=high-top"
                    >High Top</a>
                    <a
                      href="/product-list?gender=men&category=&attribute=high-top?gender=women&category=&attribute=low-top"
                    >Low Top</a>
                    <a
                      href="/product-list?gender=men&category=&attribute=high-top?gender=women&category=&attribute=slip-on"
                    >Slip-on</a>
                    <a class="blank">&nbsp;</a>
                  </li>
                  <li>
                    <a
                      href="/product-list?gender=women&category=top,bottom,accessories&attribute="
                      class="title"
                    >THỜI TRANG & PHỤ KIỆN</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Nửa trên</a>
                    <a
                      href="/product-list?gender=women&category=&attribute=basic-tee-tron"
                    >Basic Tee</a>
                    <a href="/product-list/?gender=&category=&attribute=graphic-tee">Graphic Tee</a>
                    <a href="/product-list?gender=&category=&attribute=sweatshirt">Sweatshirt</a>
                    <a href="/product-list?gender=&category=&attribute=hoodie">Hoodie</a>
                    <a class="blank">&nbsp;</a>
                    <a class="title1" href="#">Phụ kiện</a>
                    <a href="/product-list?gender=women&category=&attribute=cap">Nón</a>
                    <a href="/product-list?gender=women&category=&attribute=shoes-lace">Dây giày</a>
                    <a href="/product-list?gender=men&category=&attribute=socks">Vớ</a>
                    <a href="/product-list?gender=women&category=&attribute=backpack">Ba lô & Túi</a>
                    <a class="blank">&nbsp;</a>
                    <a
                      class="title1"
                      href="/product-list?gender=women&category=top,bottom,accessories&attribute="
                    >Xem tất cả</a>
                    <a class="blank">&nbsp;</a>
                  </li>
                  <div class="style2-des">
                    <a href="/coming-soon/">
                      MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                      <span class="highlight">DỨA</span> !
                    </a>
                  </div>
                </ul>
              </li>
              <li class="line"></li>
              <li>
                <a href="https://ananas.vn/promotion/clearance-sale/">SALE OFF</a>
              </li>
              <li class="line"></li>
              <li>
                <a href="https://ananas.vn/discoveryou">
                  <img src="../assets/images/DiscoverYOU.svg" />
                </a>
              </li>
            </ul>
            <form action="https://ananas.vn/search-results/?" class="navbar-form navbar-right">
              <div class="form-group">
                <img class="icon-search" src="../assets/images/icon_tim_kiem.svg" />
                <input type="text" name="key" class="form-control" value placeholder="Tìm kiếm" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="hot-news-cont">
          <div class="hot-news-slide">
            <VueSlickCarousel :arrows="true" :dots="false">
              <div class="cont-item">
                <a href="https://ananas.vn/faqs/">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>
              </div>
              <div class="cont-item">
                <a href="https://ananas.vn/policy/">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>
              </div>
              <div class="cont-item">
                <a href="https://ananas.vn/faq">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
    <div class="header-mobile container-fluid visible-xs visible-sm">
      <div class="row">
        <div class="navbar center">
          <div class="navbar-header">
            <div class="col-xs-4 col-sm-4 navbar-brand">
              <a href="https://ananas.vn">
                <img src="../assets/images/Logo_Ananas_Header.svg" />
              </a>
            </div>
            <div class="col-xs-5 col-sm-6 navbar-menu">
              <a data-toggle="collapse" data-target=".group-search">
                <img src="../assets/images/mb_search.png" />
              </a>
              <a href="https://ananas.vn/stores">
                <img src="../assets/images/mb_location.png" />
              </a>
              <a href="https://ananas.vn/your-cart/">
                <img src="../assets/images/mb_cart.png" />
                <span class="navbar-menu-count">
                  (
                  <span class="countProduct">7</span>)
                </span>
              </a>
            </div>
            <div class="col-xs-3 col-sm-2"></div>
          </div>
        </div>
        <div class="collapse navbar-collapse group-search">
          <form id="formSearchAll" action="https://ananas.vn/search-results/?">
            <div class="input-group">
              <input type="text" name="key" value class="form-control" placeholder="Tìm kiếm" />
              <span class="input-group-btn">
                <button class="btn btn-search btn-search-all" type="button">
                  <img src="../assets/images/arrow_right.png" />
                </button>
              </span>
            </div>
          </form>
          <div class="black-rect-bg"></div>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="mobile_menu">
            <li>
              <a href="/product-list/">SẢN PHẨM</a>
              <ul class="submenu">
                <div class="header-divider-1"></div>
                <li>
                  <a href="/product-list/?gender=men">CHO NAM</a>
                  <div class="header-divider"></div>
                </li>
                <li>
                  <a href="/product-list/?gender=women">CHO NỮ</a>
                  <div class="header-divider"></div>
                </li>
                <li>
                  <a href="/product-list/?gender=men,women&category=&attribute=sale-off">OUTLET SALE</a>
                  <div class="header-divider"></div>
                </li>
                <li>
                  <a
                    href="/product-list?gender=men,women&category=top,bottom,accessories&attribute="
                  >THỜI TRANG & PHỤ KIỆN</a>
                  <div class="header-divider-1"></div>
                </li>
                <li class="aboutus">
                  <a href="/coming-soon/">
                    MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                    <span class="highlight">DỨA</span> !
                  </a>
                </li>
              </ul>
              <div class="header-divider"></div>
            </li>
            <li>
              <a href="/product-list/?gender=men">NAM</a>
              <ul class="submenu">
                <div class="header-divider-1"></div>
                <li>
                  <a href="#">NỔI BẬT</a>
                  <ul class="submenu">
                    <div class="header-divider-1"></div>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=best-seller">Best Seller</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=new-arrival">New Arrival</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=sale-off">Sale off</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Bộ sưu tập</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a
                        href="/product-list?gender=&category=&attribute=pineapple-or-ananas"
                      >Pineapple Or Ananas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=&category=&attribute=corluray">Corluray</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Collaboration</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="aboutus">
                      <a href="/coming-soon/">
                        MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                        <span class="highlight">DỨA</span> !
                      </a>
                    </li>
                  </ul>
                  <div class="header-divider"></div>
                </li>
                <li>
                  <a href="#">GIÀY</a>
                  <ul class="submenu">
                    <div class="header-divider-1"></div>
                    <li class="inactive">
                      <a href>Dòng sản phẩm</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=basas">Basas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=vintas">Vintas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=urbas">Urbas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=pattas">Pattas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=creas">Creas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=track-6">Track 6</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Style</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a
                        href="/product-list?gender=men&category=&attribute=high-top?gender=men&category=&attribute=high-top"
                      >High Top</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list">Low Top</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=slip-on">Slip-on</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Tất cả giày</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="aboutus">
                      <a href="/coming-soon/">
                        MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                        <span class="highlight">DỨA</span> !
                      </a>
                    </li>
                  </ul>
                  <div class="header-divider"></div>
                </li>
                <li>
                  <a href="#">THỜI TRANG & PHỤ KIỆN</a>
                  <ul class="submenu">
                    <div class="header-divider-1"></div>
                    <li class="inactive">
                      <a href>Nửa trên</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a
                        href="/product-list?gender=men&category=&attribute=basic-tee-tron"
                      >Basic Tee</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list/?gender=&category=&attribute=graphic-tee">Graphic tee</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=&category=&attribute=sweatshirt">Sweatshirt</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=&category=&attribute=hoodie">Hoodie</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Phụ kiện</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=cap">Nón</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=shoes-lace">Dây giày</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=socks">Vớ</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=backpack">Ba lô & Túi</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Xem tất cả</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="aboutus">
                      <a href="/coming-soon/">
                        MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                        <span class="highlight">DỨA</span> !
                      </a>
                    </li>
                  </ul>
                  <div class="header-divider"></div>
                </li>
                <li class="aboutus">
                  <a href="/coming-soon/">
                    MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                    <span class="highlight">DỨA</span> !
                  </a>
                </li>
              </ul>
              <div class="header-divider"></div>
            </li>
            <li>
              <a href="/product-list/?gender=women">NỮ</a>
              <ul class="submenu">
                <div class="header-divider-1"></div>
                <li>
                  <a href="#">NỔI BẬT</a>
                  <ul class="submenu">
                    <div class="header-divider-1"></div>
                    <li>
                      <a
                        href="/product-list?gender=women&category=&attribute=best-seller"
                      >Best Seller</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a
                        href="/product-list?gender=women&category=&attribute=new-arrival"
                      >New Arrival</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=women&category=&attribute=sale-off">Sale-off</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Bộ sưu tập</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a
                        href="/product-list?gender=&category=&attribute=pineapple-or-ananas"
                      >Pineapple Or Ananas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=&category=&attribute=corluray">Corluray</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Collaboration</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="aboutus">
                      <a href="/coming-soon/">
                        MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                        <span class="highlight">DỨA</span> !
                      </a>
                    </li>
                  </ul>
                  <div class="header-divider"></div>
                </li>
                <li>
                  <a href="#">GIÀY</a>
                  <ul class="submenu">
                    <div class="header-divider-1"></div>
                    <li class="inactive">
                      <a href>Dòng sản phẩm</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=women&category=&attribute=basas">Basas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=women&category=&attribute=vintas">Vintas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=women&category=&attribute=urbas">Urbas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=women&category=&attribute=pattas">Pattas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=women&category=&attribute=creas">Creas</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=women&category=&attribute=track-6">Track 6</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Style</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a
                        href="/product-list?gender=men&category=&attribute=high-top?gender=women&category=&attribute=high-top"
                      >High Top</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a
                        href="/product-list?gender=men&category=&attribute=high-top?gender=women&category=&attribute=low-top"
                      >Low Top</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a
                        href="/product-list?gender=men&category=&attribute=high-top?gender=women&category=&attribute=slip-on"
                      >Slip-on</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="aboutus">
                      <a href="/coming-soon/">
                        MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                        <span class="highlight">DỨA</span> !
                      </a>
                    </li>
                  </ul>
                  <div class="header-divider"></div>
                </li>
                <li>
                  <a href="#">THỜI TRANG & PHỤ KIỆN</a>
                  <ul class="submenu">
                    <div class="header-divider-1"></div>
                    <li class="inactive">
                      <a href>Nửa trên</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a
                        href="/product-list?gender=women&category=&attribute=basic-tee-tron"
                      >Basic Tee</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list/?gender=&category=&attribute=graphic-tee">Graphic Tee</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=&category=&attribute=sweatshirt">Sweatshirt</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=&category=&attribute=hoodie">Hoodie</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Phụ kiện</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=women&category=&attribute=cap">Nón</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=women&category=&attribute=shoes-lace">Dây giày</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=men&category=&attribute=socks">Vớ</a>
                      <div class="header-divider"></div>
                    </li>
                    <li>
                      <a href="/product-list?gender=women&category=&attribute=backpack">Ba lô & Túi</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="inactive">
                      <a href>Xem tất cả</a>
                      <div class="header-divider"></div>
                    </li>
                    <li class="aboutus">
                      <a href="/coming-soon/">
                        MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                        <span class="highlight">DỨA</span> !
                      </a>
                    </li>
                  </ul>
                  <div class="header-divider"></div>
                </li>
                <li class="aboutus">
                  <a href="/coming-soon/">
                    MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                    <span class="highlight">DỨA</span> !
                  </a>
                </li>
              </ul>
              <div class="header-divider"></div>
            </li>
            <li>
              <a href="/promotion/clearance-sale/">SALE OFF</a>
              <div class="header-divider"></div>
            </li>
            <li>
              <a href="https://ananas.vn/discoveryou">DiscoverYOU</a>
              <div class="header-divider-1"></div>
            </li>
            <li class="settingmenu">
              <a href="https://ananas.vn/wp-login.php">
                <img src="../assets/images/icon_dang_nhap.svg" /> Đăng nhập
              </a>
            </li>
            <li class="settingmenu">
              <a href="https://ananas.vn/your-wishlist">
                <img src="../assets/images/icon_heart_header.svg" /> Yêu thích
              </a>
            </li>
            <li class="settingmenu">
              <a href="https://ananas.vn/stores">
                <img src="../assets/images/icon_tim_cua_hang.svg" /> Tìm cửa hàng
              </a>
            </li>
            <li class="settingmenu">
              <a href="https://ananas.vn/search-order">
                <img src="../assets/images/icon_tra_cuu_don_hang.svg" /> Tra cứu đơn hàng
              </a>
              <div class="header-divider-1"></div>
            </li>
            <li class="aboutus">
              <a href="/coming-soon/">
                MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ
                <span class="highlight">DỨA</span> !
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="hot-news-cont">
          <div class="hot-news-slide">
            <VueSlickCarousel :arrows="true" :dots="false" :autoplay="true">
              <div class="cont-item">
                <a href="https://ananas.vn/faqs/">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>
              </div>
              <div class="cont-item">
                <a href="https://ananas.vn/policy/">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>
              </div>
              <div class="cont-item">
                <a href="https://ananas.vn/faq">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "Header",
  components: { VueSlickCarousel }
};
</script>
