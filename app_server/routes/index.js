var express = require('express');
var router = express.Router();
const recipesMain = require('../controllers/main'); // Import the recipes controller
const servicesController = require('../controllers/coffee'); // Import the recipes controller
const servicesOthers = require('../controllers/others'); // Import the recipes controller

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CardioConnect' });
});

// Route for the recipes page
router.get('/services', servicesController.getServices); // Link to the recipes controller
router.get('/services/cleveland-clinic', servicesController.getService1);
router.get('/hospitals/mayo-clinic', servicesController.getService2);
router.get('/hospitals/mount-sinai-hospital', servicesController.getService3);
router.get('/hospitals/stanford-health-care', servicesController.getService4);
router.get('/hospitals/apollo-hospitals', servicesController.getService5);
router.get('/hospitals/fortis-escorts-heart-institute', servicesController.getService6);
router.get('/hospitals/narayana-health', servicesController.getService7);

// router.get('/services/cleveland-clinic', servicesController.getRecipe1); // Link to the recipes controller

// router.get('/recipes/mocha-frappe', recipesController.getRecipe2); // Link to the recipes controller

// router.get('/recipes/vegan-mocha', recipesController.getRecipe2); // Link to the recipes controller

router.get('/about',servicesOthers.getabout);
router.get('/contact',servicesOthers.getcontact); // Link to the recipes controller

// router.get('/login', recipesMain.getLogin); // Link to the recipes controller

// router.get('/register', recipesMain.getRegister); // Link to the recipes controller

// index.js
router.get('/services/countries', servicesController.getCountries);
router.get('/services/usa', servicesController.getUSA);
router.get('/services/canada', servicesController.getCanada);
router.get('/services/uk', servicesController.getUK);
router.get('/services/germany', servicesController.getGermany);
router.get('/services/india', servicesController.getIndia);


module.exports = router;
