const router = require("express").Router();


const { addIncome, getIncomes, updateIncome , deleteIncome } = require('../controllers/income');

router.post('/add-income/:userId', addIncome);
router.get('/get-incomes/:userId', getIncomes);
router.patch('/update-incomes/:userId/:incomeId', updateIncome);
router.delete('/delete-incomes/:userId/:incomeId', deleteIncome );



module.exports = router;
