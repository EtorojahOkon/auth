exports.user = (req,res) => {
    res.status(200).send({status :"success", message : "Welcome to User area, " + req.user.email })
}

exports.staff = (req,res) => {
    res.status(200).send({status :"success", message : "Welcome to Staff area, " + req.user.email })
}

exports.managers = (req,res) => {
    res.status(200).send({status :"success", message : "Welcome to Manager area, " + req.user.email })
}

exports.admin = (req,res) => {
    res.status(200).send({status :"success", message : "Welcome to Admin area, " + req.user.email })
}