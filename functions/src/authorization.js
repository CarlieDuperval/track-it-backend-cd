import admin from 'firebase-admin'

export const authorize = async ( res, req, next ) => {
    // verify the token
    const jwt = req.headers.authorization
if(!jwt){
    res.status(403).send("Unauthorized")
    return
}// if the user if verified, then 
try {
    const user = await admin.auth().verifyIdToken(jwt)
    // is like a local storage
    res.locals.user = user;
    next()
    
} catch (error) {
    res.status(403).send('Unautorized')
}
}