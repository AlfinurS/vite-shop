import{d as s,_ as o,a as n,b as v,e as g,f as u,c as d,o as _,g as l,h as m,r as h,i as f,F as x,j as $,k as P,l as y}from"./index-1deb61e0.js";const w=s({name:"ItemProduct",components:{},props:{dataProps:{type:Object,default:()=>({})}}}),b=n('<div class="catalog__item-wrapper"><a href="#" class="catalog__image-wrapper"><img class="catalog__image" src="'+v+'" alt="product"></a><div class="catalog__hover"><div class="catalog__add-wrapper"><button class="btn-plain" type="button"><img class="btn-plain-icon" src="'+g+'" alt="bag" width="24" height="24"><span class="btn-plain-text">Add to Cart</span></button></div></div></div><div class="catalog__content"><p class="catalog__content-name">ellery x m&#39;o capsule</p><p class="catalog__content-text"> Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. </p><p class="catalog__content-price">$52.00</p></div>',2);function k(a,t,e,i,c,r){return b}const C=o(w,[["render",k],["__file","D:/GB/vite-project/src/components/ItemProduct.vue"]]),j=s({name:"ProductsList",components:{ItemProduct:C},props:{},data(){return{search:"",products:[]}},computed:{filteredProducts(){if(this.search!==""){const a=new RegExp(this.search,"i");return this.products.filter(e=>a.test(e.title))}return this.products}},methods:{loadProducts(){const a="products.json";u.get(a).then(({data:t})=>{console.log(t)}).catch(t=>{console.log(t)})}},mounted(){this.loadProducts()}}),B={class:"goods box"},D=l("div",{class:"goods__box"},[l("div",{class:"catalog goods__card"},[m(` <ul class="catalog__list">\r
          <li\r
            class="catalog__item"\r
            v-for="product in filteredProducts"\r
            :key="product.id"\r
          >\r
            <ItemProduct\r
              :image="product.image"\r
              :price="product.price"\r
              :title="product.title"\r
              :content="product.content"\r
              :id="product.id"\r
            ></ItemProduct>\r
          </li>\r
        </ul> `)])],-1),A=[D];function I(a,t,e,i,c,r){return _(),d("div",B,A)}const L=o(j,[["render",I],["__file","D:/GB/vite-project/src/components/ProductsList.vue"]]),N=s({name:"CatalogPage",components:{ProductsList:L}}),V=n('<section class="navigation"><div class="navigation__wrapper"><h2 class="navigation__titel">Denim</h2><nav><ul class="navigation__list"><li class="navigation__item"><a class="navigation__link" href="./index.html">home /</a></li><li class="navigation__item"><a class="navigation__link" href="#">men /</a></li><li class="navigation__item"><a class="navigation__link navigation__link--active" href="#">Denim</a></li></ul></nav></div></section>',1),E=n('<section class="advantage"><div class="advantage__wrapp"><div class="advantage__delivery"><img class="advantage__pic" src="'+$+'" alt="delivery"><h2 class="advantage__titel">Free Delivery</h2><p class="advantage__text"> Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models. </p></div><div class="advantage__sales"><img class="advantage__pic" src="'+P+'" alt="sales"><h2 class="advantage__titel">Sales &amp; discounts</h2><p class="advantage__text"> Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models. </p></div><div class="advantage__assurance"><img class="advantage__pic" src="'+y+'" alt="assurance"><h2 class="advantage__titel">Quality assurance</h2><p class="advantage__text"> Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models. </p></div></div></section>',1);function F(a,t,e,i,c,r){const p=h("ProductsList");return _(),d(x,null,[V,f(p),E],64)}const W=o(N,[["render",F],["__file","D:/GB/vite-project/src/pages/CatalogPage.vue"]]);export{W as default};
