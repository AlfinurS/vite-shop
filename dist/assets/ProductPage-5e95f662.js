import{d as n,a as d,_ as u,c as a,b as s,F as i,r as l,e as p,o,n as _}from"./index-d354c1ad.js";const b=n({name:"ProductPage",components:{},data(){return{productId:this.$route.params.id,products:[]}},computed:{currentProduct(){const t=this.products.find(e=>e.id===+this.productId);return t||null}},methods:{loadProducts(){const t="products.json";d.get(t).then(({data:e})=>{this.products=e.products}).catch(e=>{console.log(e)})},getImage(t){return`/vite-shop//img/new_product/${t}`}},mounted(){this.loadProducts()}}),h={key:0},m={class:"carousel-wrap"},g={id:"myCarousel",class:"carousel slide","data-bs-ride":"carousel"},v=s("div",{class:"carousel-indicators"},[s("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),s("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"1","aria-label":"Slide 2"}),s("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"2","aria-label":"Slide 3"})],-1),y={class:"carousel-inner"},P=["src"],f=p('<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2),C={key:1},$=s("p",null,"Нет данных",-1),k=[$];function x(t,e,B,D,I,S){return t.currentProduct?(o(),a("div",h,[s("div",m,[s("div",g,[v,s("div",y,[(o(!0),a(i,null,l(t.currentProduct.collection,(r,c)=>(o(),a("div",{key:r,class:_(["carousel-item",{active:c===0}])},[s("img",{class:"bd-placeholder-img carousel__img",src:t.getImage(r),alt:"image",width:"597",height:"724"},null,8,P)],2))),128))]),f])])])):(o(),a("div",C,k))}const F=u(b,[["render",x],["__file","D:/GB/vite-project/src/pages/ProductPage.vue"]]);export{F as default};
