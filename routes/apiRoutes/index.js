const router = require('express').Router();
const { validateZookeeper } = require('../../lib/zookeepers');
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;