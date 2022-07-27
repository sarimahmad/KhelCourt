import ApiManager from "./ApiManager";
import Resources, { Singleton } from "./Resources";

class NotificationService extends Resources {
  authUser = {};
  routes = {
    deliveryBoyNotificationList: "delivery_boy_notifications_list",
  };

  constructor() {
    super(arguments);
  }

  setAuthUser(user) {
    if (user) {
      this.authUser = user;
    }
  }

  deliveryBoyNotificationList = (payload) => {
    return ApiManager.post(this.routes.deliveryBoyNotificationList, payload);
  };
}

export default Singleton(NotificationService);
