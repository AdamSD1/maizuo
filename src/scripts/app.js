/* 导入区域 */
//引入路由
import Router from './utils/router'
import header_nav_Controller from './controllers/header_nav'
import home_page_Controller from './controllers/home_page'
import login_Controller from './controllers/login'
import register_Controller from './controllers/register'
import film_hot_Controller from './controllers/film_hot'
import film_future_Controller from './controllers/film_future'
import cinema_list_Controller from './controllers/cinema_list'
import cinema_detail_Controller from './controllers/cinema_detail'
import cinema_film_Controller from './controllers/cinema_film'
import seat_Controller from './controllers/seat'
import order_Controller from './controllers/order'
import pay_Controller from './controllers/pay'
import wchat_pay_Controller from './controllers/wchat_pay'
import person_Controller from './controllers/person'



/* 使用区域 */
// 顶部和侧边直接使用
header_nav_Controller.render();

//测试座位
header_nav_Controller.seat()


// 将使用的页面都在路由中注册

const router = new Router()

//启动路由的监听
router.init()
//注册路由
router.route('#home_page',home_page_Controller.wrap)
router.route('#city',header_nav_Controller.cityAdd)
router.route('#login',login_Controller.render)
router.route('#register',register_Controller.render)
router.route('#film_hot',film_hot_Controller.render)
router.route('#film_future',film_future_Controller.render)
router.route('#cinema_list',cinema_list_Controller.render)
router.route('#cinema_detail',cinema_detail_Controller.render)
router.route('#cinema_film',cinema_film_Controller.render)
router.route('#seat',seat_Controller.render)
router.route('#order',order_Controller.render)
router.route('#pay',pay_Controller.render)
router.route('#wchat_pay',wchat_pay_Controller.render)
router.route('#person',person_Controller.render)

