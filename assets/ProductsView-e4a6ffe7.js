import{_ as d,b as m,a as _,m as h,r as p,o as a,c as o,d as t,F as u,h as f,e as v,w as g,t as i,f as C}from"./index-7dba7784.js";import{c as r}from"./cart-1e9d4506.js";import{A as b}from"./aos-015bf23a.js";const{VITE_URL:y,VITE_PATH:w}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy",MODE:"production",DEV:!1,PROD:!0,SSR:!1},x={data(){return{products:[],fullPage:!0}},methods:{getProducts(){const s=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,onCancel:this.onCancel});this.$http(`${y}/v2/api/${w}/products/all`).then(n=>{this.products=n.data.products,s.hide()})},...m(r,["getCart","addToCart","deleteItem","updateCartItem","deleteCartsItem"])},components:{RouterLink:_},computed:{...h(r,["carts","final_total","fullPage","loadingShow"])},mounted(){b.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:200,delay:300,duration:1e3,easing:"ease",once:!0,mirror:!1,anchorPlacement:"top-bottom"}),this.getProducts()}},P={class:"container"},$={class:"row"},k=t("h1",{class:"text-center py-4"},"星杯冰淇淋",-1),E={class:"col-md-12","data-aos":"fade-up"},T={class:"row"},L={class:"card border-0 position-relative"},R=["src"],S=t("div",{class:"content position-absolute d-flex justify-content-center align-items-center"},[t("h1",null,"商品資訊")],-1),V={class:"card-body pt-0 mb-6 bg-primary"},D={class:"mb-2 pt-3 text-center"},I={class:"card-text mb-2 text-center"},A=["onClick"];function N(s,n,O,B,c,M){const l=p("RouterLink");return a(),o("div",null,[t("div",P,[t("div",$,[k,t("div",E,[t("div",T,[(a(!0),o(u,null,f(c.products,e=>(a(),o("div",{class:"col-md-4",key:e.id},[t("div",L,[v(l,{to:`/products/${e.id}`},{default:g(()=>[t("img",{src:e.imageUrl,class:"card-img-top rounded-0 object-cover",height:"300",alt:"..."},null,8,R),S]),_:2},1032,["to"])]),t("div",V,[t("h4",D,i(e.title),1),t("p",I,"NT$ "+i(e.price),1),t("a",{href:"#",class:"text-nowrap btn btn-dark w-100 py-2 vl-parent",onClick:C(()=>s.addToCart(e.id),["prevent"])},"加入購物車 ",8,A)])]))),128))])])])])])}const H=d(x,[["render",N]]);export{H as default};
