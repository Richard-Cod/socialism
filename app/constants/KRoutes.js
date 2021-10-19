const KRoutes = {
    profile : "/profile",
    home : "/home",
    login : "/login",
    register : "/register",
    verifyemailVerify : (code) =>  `/verifyemail/verify/${code}`,
    verifyemailSend : `/verifyemail/send/`,
}

export {KRoutes}