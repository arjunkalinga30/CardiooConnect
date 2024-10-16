module.exports.getabout = (req, res) => {
    res.render('about', { title: 'About' });
};
module.exports.getcontact = (req, res) => {
    res.render('contact', { title: 'Contact Us' });
};