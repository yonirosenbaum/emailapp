module.exports = (req, res, next) => {
    if (!req.user){
        return res.status(401).send({error: 'You must log in!'})
    }
    next()
}

// if req.user exists (ie the user has logged in with oauth) we want the request to be passed to
// the next middleware and if not we want the request to
// stop here with the error.


// You only want this function passed into some and not all routes
// therefore it is not used in index.js but imported
// to certain routes or one route (not sure yet
// havent finished the project yet)