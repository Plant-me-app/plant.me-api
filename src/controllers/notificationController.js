const notificationService = require("../services/notificationService");
const { getNotifications } = require("../utils/notifications");
 
exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await notificationService.getAllNotifications();
    res.json({ data: notifications, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createNotification = async (req, res) => {
  try {
    let notification = await notificationService.getAllNotifications();
    if (notification.length === 0) {
      notification = await notificationService.createNotification({...req.body, level: 0});
    }
    res.json({ data: notification, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getNotificationById = async (req, res) => {
  try {
    const notification = await notificationService.getNotificationById(req.params.id);
    res.json({ data: notification, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateNotification = async (req, res) => {
  try {
    const notification = await notificationService.updateNotification(req.params.id, req.body);
    res.json({ data: notification, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteNotification = async (req, res) => {
  try {
    const notification = await notificationService.deleteNotification(req.params.id);
    res.json({ data: notification, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPlantsNotifications = async (req, res) => {
    try {
      const notifications = await getNotifications();
      res.json({ data: notifications, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
