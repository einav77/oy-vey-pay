const router = require("express").Router();


const { addIncome, getIncomes, updateIncome } = require('../controllers/income');

router.post('/add-income/:userId', addIncome);
router.get('/get-incomes/:userId', getIncomes);
router.patch('/update-incomes/:userId/:incomeId', updateIncome);



module.exports = router;
