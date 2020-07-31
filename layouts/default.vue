<template>
  <div>
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
    <div id="sm_menu_ham" @click="toggleMenu()" :class="{open : isToggleMenu}">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  </div>
  <div  :class="{active : isToggleMenu,sm_menu_outer:true}">
	<ul class="mobile_menu">
		<li  :class="{active : isToggleMenuChild,hasChild:true}" @click.prevent="toggleMenuChild()" >
			<a href="/product-list/">SẢN PHẨM</a>
			<ul class="submenu">
				<li class="back">
					<a href="#">SẢN PHẨM</a>
				</li>
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
					<a href="/product-list/?gender=men,women&amp;category=&amp;attribute=sale-off">OUTLET SALE</a>
					<div class="header-divider"></div>
				</li>
				<li>
					<a href="/product-list?gender=men,women&amp;category=top,bottom,accessories&amp;attribute=">THỜI TRANG &amp; PHỤ KIỆN</a>
					<div class="header-divider-1"></div>
				</li>
				<li class="aboutus">
					<a href="/coming-soon/">MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ 
						<span class="highlight">DỨA</span> ! 
					</a>
				</li>
			</ul>
			<div class="header-divider"></div>
		</li>
		<li class="hasChild">
			<a href="/product-list/?gender=men">NAM</a>
			<ul class="submenu">
				<li class="back">
					<a href="#">NAM</a>
				</li>
				<div class="header-divider-1"></div>
				<li class="hasChild">
					<a href="#">NỔI BẬT</a>
					<ul class="submenu">
						<li class="back">
							<a href="#">
								<span class="parent-title">NAM</span>
								<span class="divider"></span>NỔI BẬT
							</a>
						</li>
						<div class="header-divider-1"></div>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=best-seller">Best Seller</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=new-arrival">New Arrival</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=sale-off">Sale off</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Bộ sưu tập</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=&amp;category=&amp;attribute=pineapple-or-ananas">Pineapple Or Ananas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=&amp;category=&amp;attribute=corluray">Corluray</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Collaboration</a>
							<div class="header-divider"></div>
						</li>
						<li class="aboutus">
							<a href="/coming-soon/">MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ 
								<span class="highlight">DỨA</span> ! 
							</a>
						</li>
					</ul>
					<div class="header-divider"></div>
				</li>
				<li class="hasChild">
					<a href="#">GIÀY</a>
					<ul class="submenu">
						<li class="back">
							<a href="#">
								<span class="parent-title">NAM</span>
								<span class="divider"></span>GIÀY
							</a>
						</li>
						<div class="header-divider-1"></div>
						<li class="inactive">
							<a href="">Dòng sản phẩm</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=basas">Basas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=vintas">Vintas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=urbas">Urbas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=pattas">Pattas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=creas">Creas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=track-6">Track 6</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Style</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=high-top?gender=men&amp;category=&amp;attribute=high-top">High Top</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list">Low Top</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=slip-on">Slip-on</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Tất cả giày</a>
							<div class="header-divider"></div>
						</li>
						<li class="aboutus">
							<a href="/coming-soon/">MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ 
								<span class="highlight">DỨA</span> ! 
							</a>
						</li>
					</ul>
					<div class="header-divider"></div>
				</li>
				<li class="hasChild">
					<a href="#">THỜI TRANG &amp; PHỤ KIỆN</a>
					<ul class="submenu">
						<li class="back">
							<a href="#">
								<span class="parent-title">NAM</span>
								<span class="divider"></span>THỜI TRANG &amp; PHỤ KIỆN
							</a>
						</li>
						<div class="header-divider-1"></div>
						<li class="inactive">
							<a href="">Nửa trên</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=basic-tee-tron">Basic Tee</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list/?gender=&amp;category=&amp;attribute=graphic-tee">Graphic tee</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=&amp;category=&amp;attribute=sweatshirt">Sweatshirt</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=&amp;category=&amp;attribute=hoodie">Hoodie</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Phụ kiện</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=cap">Nón</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=shoes-lace">Dây giày</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=socks">Vớ</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=backpack">Ba lô &amp; Túi</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Xem tất cả</a>
							<div class="header-divider"></div>
						</li>
						<li class="aboutus">
							<a href="/coming-soon/">MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ 
								<span class="highlight">DỨA</span> ! 
							</a>
						</li>
					</ul>
					<div class="header-divider"></div>
				</li>
				<li class="aboutus">
					<a href="/coming-soon/">MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ 
						<span class="highlight">DỨA</span> ! 
					</a>
				</li>
			</ul>
			<div class="header-divider"></div>
		</li>
		<li class="hasChild">
			<a href="/product-list/?gender=women">NỮ</a>
			<ul class="submenu">
				<li class="back">
					<a href="#">NỮ</a>
				</li>
				<div class="header-divider-1"></div>
				<li class="hasChild">
					<a href="#">NỔI BẬT</a>
					<ul class="submenu">
						<li class="back">
							<a href="#">
								<span class="parent-title">NỮ</span>
								<span class="divider"></span>NỔI BẬT
							</a>
						</li>
						<div class="header-divider-1"></div>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=best-seller">Best Seller</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=new-arrival">New Arrival</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=sale-off">Sale-off</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Bộ sưu tập</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=&amp;category=&amp;attribute=pineapple-or-ananas">Pineapple Or Ananas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=&amp;category=&amp;attribute=corluray">Corluray</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Collaboration</a>
							<div class="header-divider"></div>
						</li>
						<li class="aboutus">
							<a href="/coming-soon/">MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ 
								<span class="highlight">DỨA</span> ! 
							</a>
						</li>
					</ul>
					<div class="header-divider"></div>
				</li>
				<li class="hasChild">
					<a href="#">GIÀY</a>
					<ul class="submenu">
						<li class="back">
							<a href="#">
								<span class="parent-title">NỮ</span>
								<span class="divider"></span>GIÀY
							</a>
						</li>
						<div class="header-divider-1"></div>
						<li class="inactive">
							<a href="">Dòng sản phẩm</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=basas">Basas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=vintas">Vintas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=urbas">Urbas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=pattas">Pattas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=creas">Creas</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=track-6">Track 6</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Style</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=high-top?gender=women&amp;category=&amp;attribute=high-top">High Top</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=high-top?gender=women&amp;category=&amp;attribute=low-top">Low Top</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=high-top?gender=women&amp;category=&amp;attribute=slip-on">Slip-on</a>
							<div class="header-divider"></div>
						</li>
						<li class="aboutus">
							<a href="/coming-soon/">MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ 
								<span class="highlight">DỨA</span> ! 
							</a>
						</li>
					</ul>
					<div class="header-divider"></div>
				</li>
				<li class="hasChild">
					<a href="#">THỜI TRANG &amp; PHỤ KIỆN</a>
					<ul class="submenu">
						<li class="back">
							<a href="#">
								<span class="parent-title">NỮ</span>
								<span class="divider"></span>THỜI TRANG &amp; PHỤ KIỆN
							</a>
						</li>
						<div class="header-divider-1"></div>
						<li class="inactive">
							<a href="">Nửa trên</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=basic-tee-tron">Basic Tee</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list/?gender=&amp;category=&amp;attribute=graphic-tee">Graphic Tee</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=&amp;category=&amp;attribute=sweatshirt">Sweatshirt</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=&amp;category=&amp;attribute=hoodie">Hoodie</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Phụ kiện</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=cap">Nón</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=shoes-lace">Dây giày</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=men&amp;category=&amp;attribute=socks">Vớ</a>
							<div class="header-divider"></div>
						</li>
						<li>
							<a href="/product-list?gender=women&amp;category=&amp;attribute=backpack">Ba lô &amp; Túi</a>
							<div class="header-divider"></div>
						</li>
						<li class="inactive">
							<a href="">Xem tất cả</a>
							<div class="header-divider"></div>
						</li>
						<li class="aboutus">
							<a href="/coming-soon/">MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ 
								<span class="highlight">DỨA</span> ! 
							</a>
						</li>
					</ul>
					<div class="header-divider"></div>
				</li>
				<li class="aboutus">
					<a href="/coming-soon/">MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ 
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
				<img src="../assets/images/icon_dang_nhap.svg"> Đăng nhập 
				</a>
			</li>
			<li class="settingmenu">
				<a href="https://ananas.vn/your-wishlist">
					<img src="../assets/images/icon_heart_header.svg"> Yêu thích 
					</a>
				</li>
				<li class="settingmenu">
					<a href="https://ananas.vn/stores">
						<img src="../assets/images/icon_tim_cua_hang.svg"> Tìm cửa hàng 
						</a>
					</li>
					<li class="settingmenu">
						<a href="https://ananas.vn/search-order">
							<img src="../assets/images/icon_tra_cuu_don_hang.svg"> Tra cứu đơn hàng 
							</a>
							<div class="header-divider-1"></div>
						</li>
						<li class="aboutus">
							<a href="/coming-soon/">MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ 
								<span class="highlight">DỨA</span> ! 
							</a>
						</li>
					</ul>
				</div>
  </div>
</template>
<script>
import header from '~/components/header';
import footer from '~/components/footer';
export default {
  data(){
    return{
      isToggleMenu:false,
      isToggleMenuChild:false
    }
  },
  components:{
    Header:header,
    Footer:footer,
  },
  methods:{
    toggleMenu(){
      this.isToggleMenu =  !this.isToggleMenu;
    },
    toggleMenuChild(){
      this.isToggleMenuChild =  !this.isToggleMenuChild;
      console.log(this.isToggleMenuChild);
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
