import { deflate } from "zlib";

//书写路由
function Router(){
    this.routes = {}
    this.currentHash = '';
}

var noop = function(){}

//路由的注册模块
Router.prototype.route = function(hash,cb){
    this.currentHash = hash
    this.routes[this.currentHash] = cb
}

//路由刷新
Router.prototype.refresh = function(){
    let hash  = location.hash || '#home_page'
    this.currentHash = hash
    this.routes[this.currentHash]()
}

//路由切换监听
Router.prototype.init = function(){
    window.addEventListener('load',this.refresh.bind(this))
    window.addEventListener('hashchange',this.refresh.bind(this))
}

//导出路由
export default Router