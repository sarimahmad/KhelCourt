import ApiManager from "./ApiManager";
import Resources, { Singleton } from "./Resources";

class OrderServices extends Resources {
  authUser = {};
  routes = {
    deliveryBoyPendingOrders: "delivery_boy_pending_orders",
    deliveryBoyAcceptedOrders: "delivery_boy_accepted_orders",
    deliveryBoyDeliveredOrders: "delivery_boy_delivered_orders",
    deliveryBoyOrder: "delivery_boy_order",
    orderDetails: "order_details",
    awaitedOrders: "all_pending_orders",
    acceptOrder: "accept_order",
    startOrder: "start_order",
    orderCount: "order_count",
    markDeliver:'mark_delivered2'
  };

  constructor() {
    super(arguments);
  }

  setAuthUser(user) {
    if (user) {
      this.authUser = user;
    }
  }

  deliveryBoyPendingOrders = (payload) => {
    // ApiManager.removeAuth();
    return ApiManager.post(this.routes.deliveryBoyPendingOrders, payload);
  };
  deliveryBoyAcceptedOrders = (payload) => {
    // ApiManager.removeAuth();
    return ApiManager.post(this.routes.deliveryBoyAcceptedOrders, payload);
  };
  deliveryBoyDeliveredOrders = (payload) => {
    // ApiManager.removeAuth();
    return ApiManager.post(this.routes.deliveryBoyDeliveredOrders, payload);
  };
  deliveryBoyOrder = (payload) => {
    // ApiManager.removeAuth();
    return ApiManager.post(this.routes.deliveryBoyOrder, payload);
  };

  orderDetails = (payload) => {
    return ApiManager.post(this.routes.orderDetails, payload);
  };

  awaitedOrders = (payload) => {
    return ApiManager.post(this.routes.awaitedOrders, payload);
  };
  acceptOrder = (payload) => {
    return ApiManager.post(this.routes.acceptOrder, payload);
  };
  startOrder = (payload) => {
    return ApiManager.post(this.routes.startOrder, payload);
  };
  orderCount = (payload) => {
    return ApiManager.post(this.routes.orderCount, payload);
  };
  markDeliver = (payload) => {
    return ApiManager.post(this.routes.markDeliver, payload);
  };
}

export default Singleton(OrderServices);
