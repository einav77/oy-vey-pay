const router = require("express").Router();


const { addIncome, getIncomes } = require('../controllers/income');

router.post('/add-income/:userId', addIncome);
router.get('/get-incomes/:userId', getIncomes);


module.exports = router;
