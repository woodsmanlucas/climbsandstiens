const router = require("express").Router();


// register a new guest
function register (req, res) {
    res.json({userId: "This should be a random token something is not right"})
}

// get info on a user
function getUser (req, res){
    res.json({userId: "This should be a user something is not right"})
}

// This will take form data not json so the photos of signature can be uploaded
// add the users info and signature to the database
function signPaperwork (req, res){
    let body = req.body
    console.log(body)
    res.send("Dont forget to finish this function")
}

// ban a user (perminate, or by date)
function banUser (req, res) {
    let body = req.body
    console.log(body)
    res.send("Dont forget to finish this function")
}

// start a user climbing
function climb (req, res) {
    let body = req.body
    console.log(body)
    res.send("Dont forget to finish this function")
}


// save this for last since it uses stripe
// Change a users monthly plan
function changeUserPlan (req, res){
    let body = req.body
    console.log(body)
    res.send("Dont forget to finish this function")
}

// save this for last since it uses stripe
// Add punches to a users pass
function addPunches (req, res){
    let body = req.body
    console.log(body)
    res.send("Dont forget to finish this function")
}

router.get('/register', register)
router.get('/', getUser)
router.post('/signPaperwork', signPaperwork)
router.put('/ban', banUser)
router.put('/changePlan', changeUserPlan)
router.put('/addPunches', addPunches)
router.post('/climb', climb)

module.exports = router