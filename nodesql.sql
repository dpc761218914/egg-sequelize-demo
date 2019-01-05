/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50713
Source Host           : localhost:3306
Source Database       : nodesql

Target Server Type    : MYSQL
Target Server Version : 50713
File Encoding         : 65001

Date: 2019-01-05 16:10:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES ('c2a1307l7ekjqj6l066', '1223213@qq.com', '1212', '2019-01-05 08:02:53', '2019-01-05 08:02:53');
INSERT INTO `admins` VALUES ('c2a1307l7ekjqj6l2x5', '1213@qq.com', '1212', '2019-01-05 08:02:57', '2019-01-05 08:02:57');
INSERT INTO `admins` VALUES ('c2a1307l9jcjqj6e59l', '123123213@qq.com', '1212', '2019-01-05 07:57:33', '2019-01-05 07:57:33');

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `created_at_beauty` varchar(255) NOT NULL,
  `updated_at_beauty` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('1', '111', '111', '2019-01-05 14:20:29', '2019-01-05 14:20:32', 'weq', 'qweq');
INSERT INTO `articles` VALUES ('c2a1307l11wjqj5n0vn', 'title122', 'content111', '2019-01-05 07:36:28', '2019-01-05 07:36:28', '2019-01-05 15:36:28', '2019-01-05 15:36:28');
INSERT INTO `articles` VALUES ('c2a1307l3fwjqj4ahsg', 'title111', 'content111', '2019-01-05 06:58:43', '2019-01-05 06:58:43', '2019-01-05 14:58:43', '2019-01-05 14:58:43');
INSERT INTO `articles` VALUES ('c2a1307l7uojqj4zh7f', 'title122', 'content111', '2019-01-05 07:18:09', '2019-01-05 07:18:09', '2019-01-05 15:18:09', '2019-01-05 15:18:09');
INSERT INTO `articles` VALUES ('c2a1307l7uojqj4zjd8', 'title122', 'content111', '2019-01-05 07:18:12', '2019-01-05 07:18:12', '2019-01-05 15:18:12', '2019-01-05 15:18:12');
INSERT INTO `articles` VALUES ('c2a1307l7uojqj4zjxv', 'title122', 'content111', '2019-01-05 07:18:13', '2019-01-05 07:18:13', '2019-01-05 15:18:13', '2019-01-05 15:18:13');
INSERT INTO `articles` VALUES ('c2a1307l7uojqj4zkai', 'title122', 'content111', '2019-01-05 07:18:13', '2019-01-05 07:18:13', '2019-01-05 15:18:13', '2019-01-05 15:18:13');
INSERT INTO `articles` VALUES ('c2a1307l7uojqj4zkjk', 'title122', 'content111', '2019-01-05 07:18:13', '2019-01-05 07:18:13', '2019-01-05 15:18:13', '2019-01-05 15:18:13');
INSERT INTO `articles` VALUES ('c2a1307l7uojqj4zktq', 'title122', 'content111', '2019-01-05 07:18:14', '2019-01-05 07:18:14', '2019-01-05 15:18:14', '2019-01-05 15:18:14');
INSERT INTO `articles` VALUES ('c2a1307l7uojqj4zl46', 'title122', 'content111', '2019-01-05 07:18:14', '2019-01-05 07:18:14', '2019-01-05 15:18:14', '2019-01-05 15:18:14');
INSERT INTO `articles` VALUES ('c2a1307l7uojqj4zlel', 'title122', 'content111', '2019-01-05 07:18:15', '2019-01-05 07:18:15', '2019-01-05 15:18:15', '2019-01-05 15:18:15');
INSERT INTO `articles` VALUES ('c2a1307l7uojqj4zlmw', 'title122', 'content111', '2019-01-05 07:18:15', '2019-01-05 07:18:15', '2019-01-05 15:18:15', '2019-01-05 15:18:15');
INSERT INTO `articles` VALUES ('c2a1307l96cjqj5s3w2', 'title122', 'content111', '2019-01-05 07:40:25', '2019-01-05 07:40:25', '2019-01-05 15:40:25', '2019-01-05 15:40:25');
