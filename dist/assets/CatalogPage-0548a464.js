import{d as l,_ as r,a as _,b as h,e as f,f as x,r as v,c as o,g as c,F as m,h as $,o as i,i as u,j as P,k as y,l as w}from"./index-4c4e099b.js";const b=l({name:"ItemProduct",components:{},props:{dataProps:{type:Object,default:()=>({})}}}),k=_('<div class="catalog__item-wrapper"><a href="#" class="catalog__image-wrapper"><img class="catalog__image" src="'+h+'" alt="product"></a><div class="catalog__hover"><div class="catalog__add-wrapper"><button class="btn-plain" type="button"><img class="btn-plain-icon" src="'+f+'" alt="bag" width="24" height="24"><span class="btn-plain-text">Add to Cart</span></button></div></div></div><div class="catalog__content"><p class="catalog__content-name">ellery x m&#39;o capsule</p><p class="catalog__content-text"> Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. </p><p class="catalog__content-price">$52.00</p></div>',2);function j(t,a,s,d,p,g){return k}const B=r(b,[["render",j],["__file","D:/GB/vite-project/src/components/ItemProduct.vue"]]),C=l({name:"ProductsList",components:{ItemProduct:B},props:{},data(){return{search:"",products:[]}},computed:{filteredProducts(){if(this.search!==""){const t=new RegExp(this.search,"i");return this.products.filter(s=>t.test(s.title))}return this.products}},methods:{loadProducts(){const t="products.json";console.log(t),x.get(t).then(({data:a})=>{console.log(a)}).catch(a=>{console.log(a)})}},mounted(){console.log("ok"),this.loadProducts()}}),D={class:"goods box"},L={class:"goods__box"},A={class:"catalog goods__card"},I={class:"catalog__list"};function E(t,a,s,d,p,g){const n=v("ItemProduct");return i(),o("div",D,[c("div",L,[c("div",A,[c("ul",I,[(i(!0),o(m,null,$(t.filteredProducts,e=>(i(),o("li",{class:"catalog__item",key:e.id},[u(n,{image:e.image,price:e.price,title:e.title,content:e.content,id:e.id},null,8,["image","price","title","content","id"])]))),128))])])])])}const F=r(C,[["render",E],["__file","D:/GB/vite-project/src/components/ProductsList.vue"]]),G=l({name:"CatalogPage",components:{ProductsList:F}}),N=_('<section class="navigation"><div class="navigation__wrapper"><h2 class="navigation__titel">Denim</h2><nav><ul class="navigation__list"><li class="navigation__item"><a class="navigation__link" href="./index.html">home /</a></li><li class="navigation__item"><a class="navigation__link" href="#">men /</a></li><li class="navigation__item"><a class="navigation__link navigation__link--active" href="#">Denim</a></li></ul></nav></div></section>',1),V=_('<section class="advantage"><div class="advantage__wrapp"><div class="advantage__delivery"><img class="advantage__pic" src="'+P+'" alt="delivery"><h2 class="advantage__titel">Free Delivery</h2><p class="advantage__text"> Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models. </p></div><div class="advantage__sales"><img class="advantage__pic" src="'+y+'" alt="sales"><h2 class="advantage__titel">Sales &amp; discounts</h2><p class="advantage__text"> Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models. </p></div><div class="advantage__assurance"><img class="advantage__pic" src="'+w+'" alt="assurance"><h2 class="advantage__titel">Quality assurance</h2><p class="advantage__text"> Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models. </p></div></div></section>',1);function W(t,a,s,d,p,g){const n=v("ProductsList");return i(),o(m,null,[N,u(n),V],64)}const O=r(G,[["render",W],["__file","D:/GB/vite-project/src/pages/CatalogPage.vue"]]);export{O as default};
