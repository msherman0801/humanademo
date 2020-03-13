const router = require('express').Router();
let User = require('../models/user.model');
let Plan = require('../models/plan.model');

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id/addplan').post((req,res) => {
    Plan.find({'name': req.body.name})
        .then(plan => {
            User.findById(req.params.id)
                .then(user => {
                    user.plans.push(plan[0])
                    user.save()
                    res.json(user.plans)
                })
        })
        .catch(err => console.log(err))
})

router.route('/:id/myplans').get((req,res) => {

    User.findById(req.params.id)
        .then(user => res.json(user.plans))
        .catch(err => console.log(err))
})

router.route('/:id/myplans').delete((req,res) => {
    User.findById(req.params.id)
        .then(user => {
            for (var name in req.body) {
                user.plans = user.plans.filter(plan => plan._id != req.body[name])
            }
            user.save()
            res.json(user.plans)
        })
        .catch(err => console.log(err))

})


module.exports = router