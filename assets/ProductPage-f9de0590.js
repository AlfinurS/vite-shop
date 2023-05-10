import{d,a as i,_ as l,c as a,b as t,F as u,r as p,e as c,f as m,o as r,n as _}from"./index-27fb6622.js";const h=d({name:"ProductPage",components:{},data(){return{productId:this.$route.params.id,products:[]}},computed:{currentProduct(){const e=this.products.find(s=>s.id===+this.productId);return e||null}},methods:{loadProducts(){const e="products.json";i.get(e).then(({data:s})=>{this.products=s.products}).catch(s=>{console.log(s)})}},mounted(){this.loadProducts()}}),b={key:0},g={class:"carousel-wrap"},v={id:"myCarousel",class:"carousel slide","data-bs-ride":"carousel"},y=t("div",{class:"carousel-indicators"},[t("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),t("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"1","aria-label":"Slide 2"}),t("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"2","aria-label":"Slide 3"})],-1),P={class:"carousel-inner"},f=["src"],C=m('<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2),w={key:1},x=t("p",null,"Нет данных",-1),k=[x];function B(e,s,$,D,N,S){return e.currentProduct?(r(),a("div",b,[t("div",g,[t("div",v,[y,t("div",P,[(r(!0),a(u,null,p(e.currentProduct.collection,(o,n)=>(r(),a("div",{key:o,class:_(["carousel-item",{active:n===0}])},[t("img",{class:"bd-placeholder-img carousel__img",src:o,alt:"image",width:"597",height:"724"},null,8,f)],2))),128)),c(` <div class="carousel-item">\r
            <img\r
              class="bd-placeholder-img carousel__img"\r
              src="/img/new_product/men1.webp"\r
              alt="man coat"\r
              width="597"\r
              height="724"\r
            />\r
          </div>\r
          <div class="carousel-item">\r
            <img\r
              class="bd-placeholder-img carousel__img"\r
              :src="currentProduct.image"\r
              :alt="currentProduct.title"\r
              width="597"\r
              height="724"\r
            />\r
          </div> `)]),C])]),c(`     <div class="catalog__item-wrapper">\r
      <img\r
        class="catalog__image"\r
        :src="currentProduct.image"\r
        :alt="currentProduct.title"\r
      />\r
    </div> `)])):(r(),a("div",w,k))}const V=l(h,[["render",B],["__file","D:/GB/vite-project/src/pages/ProductPage.vue"]]);export{V as default};
