const router = require('express').Router();
let Plan = require('../models/plan.model');


router.route('/all').get((req,res) => {
    Plan.find({}, function(err, plans) {
        plansArr = []
        plans.forEach((plan) => {
            plansArr.push(plan)
        })
        res.send(plansArr)
    })
})

router.route('/:id').get((req,res) => {
    Plan.findById(req.params.id)
        .then(plan => res.json(plan))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const cost = Number(req.body.cost);
    const description = req.body.description;

    const newPlan = new Plan({
        name, cost, description
    })

    newPlan.save()
        .then(() => res.json('Plan Added!'))
        .catch(err => console.log(err));
});

router.route('/update/:id').post((req, res) => {
    Plan.findById(req.params.id)
        .then(plan => {
            plan.name = req.body.name;
            plan.cost = Number(req.body.cost);
            plan.description = req.body.description;

            plan.save()
                .then(() => res.json('Plan Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req,res) => {
    Plan.findByIdAndDelete(req.params.id)
        .then(() => res.json('Plan Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;