const express = require("express");
const {
  getAllNotifications,
  createNotification,
  getNotificationById,
  updateNotification,
  deleteNotification,
  getAllPlantsNotifications
} = require("../controllers/NotificationController");
 
const router = express.Router();
 
router.route("/").get(getAllPlantsNotifications).post(createNotification);
router.route("/:id").get(getNotificationById).put(updateNotification).delete(deleteNotification);
router.route("/all").get(getAllPlantsNotifications)
 
module.exports = router;