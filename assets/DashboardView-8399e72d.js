import{_ as r,R as u,a as h,r as a,o as _,c as p,d as e,e as n,w as c,j as m}from"./index-7dba7784.js";const{VITE_URL:f}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy",MODE:"production",DEV:!1,PROD:!0,SSR:!1},g={components:{RouterView:u,RouterLink:h},methods:{logout(){document.cookie=`allenToken=; expires=${new Date};`,this.$router.push("/login")},checkLogin(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)allenToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=s;const o=`${f}v2/api/user/check`;this.$http.post(o).then(t=>{console.log(s),t.data.success||this.$router.push("login")}).catch(t=>{console.dir(t),this.$router.push("/login")})}},mounted(){this.checkLogin();const s=document.querySelector("#toggle-btn"),o=document.querySelector("body");s.addEventListener("click",t=>{t.preventDefault(),o.classList.toggle("sidebar-toggled")})}},k={class:"d-flex"},b={class:"sidebar vh-100 border-end pt-3 d-flex bg-white flex-column"},v=e("div",{class:"px-4"},[e("strong",null,"星杯冰淇淋"),m("-後臺管理 ")],-1),x={class:"overflow-auto mt-3"},$=e("div",{class:"px-4"}," 首頁 ",-1),w=e("div",{class:"px-4"}," 產品管理 ",-1),R=e("div",{class:"px-4"}," 訂單管理 ",-1),V=e("div",{class:"px-4"}," 登出 ",-1),L=[V],y={class:"main"},E=e("div",{class:"bg-white w-100 border-bottom sticky-top"},[e("a",{href:"#",class:"d-inline-block py-3 px-4 border-end",id:"toggle-btn"},[e("i",{class:"bi bi-arrows-angle-expand"})])],-1);function T(s,o,t,D,B,l){const i=a("RouterLink"),d=a("RouterView");return _(),p("div",k,[e("aside",b,[v,e("div",x,[e("div",null,[n(i,{href:"#",class:"sidebar-link",to:"/"},{default:c(()=>[$]),_:1})]),e("div",null,[n(i,{href:"#",class:"sidebar-link",to:"/admin/products"},{default:c(()=>[w]),_:1})]),e("div",null,[n(i,{href:"#",class:"sidebar-link",to:"/admin/Orders"},{default:c(()=>[R]),_:1})])]),e("a",{href:"#",class:"mt-auto sidebar-link",onClick:o[0]||(o[0]=S=>l.logout())},L)]),e("main",y,[E,n(d)])])}const C=r(g,[["render",T]]);export{C as default};
