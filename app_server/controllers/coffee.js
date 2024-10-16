module.exports.getServices = (req, res) => {
    res.render('services', { title: 'Services' });
};
module.exports.getService1 = (req, res) => {
    res.render('service1', { title: 'Classic Mocha' });
};
module.exports.getService2 = (req, res) => {
    res.render('service2', { title: 'Mayo Clinic' });
};
module.exports.getService3 = (req, res) => {
    res.render('service3', { title: 'Mount Sinai Hospital' });
};
// app_server/controllers/coffee.js
module.exports.getService4 = (req, res) => {
    res.render('service4', { title: 'Stanford Health Care' });
};
module.exports.getService5 = (req, res) => {
  res.render('service5', { title: 'Apollo Hospitals' });
};
module.exports.getService6 = (req, res) => {
  res.render('service5', { title: 'Fortis Escorts Heart Institute' });
};
module.exports.getService7 = (req, res) => {
  res.render('service6', { title: 'Narayana Health Page' });
};

// coffee.js
module.exports.getCountries = (req, res) => {
    res.render('countries', { title: 'Countries' });
  };
  
  module.exports.getUSA = (req, res) => {
    res.render('usa', { title: 'Best Hospitals in USA' });
  };
  
  module.exports.getCanada = (req, res) => {
    res.render('canada', { title: 'Best Hospitals in Canada' });
  };
  
  module.exports.getUK = (req, res) => {
    res.render('uk', { title: 'Best Hospitals in UK' });
  };
  
  module.exports.getGermany = (req, res) => {
    res.render('germany', { title: 'Best Hospitals in Germany' });
  };
  module.exports.getIndia = (req, res) => {
    res.render('india', { title: 'Best Hospitals in India' });
  };