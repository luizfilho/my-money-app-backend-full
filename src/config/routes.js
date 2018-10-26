const express = require('express')
const auth = require('./auth')

module.exports = server => {
   
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)
    //Areas protegidas e que necessitam de Verificação
    const BillingCycle = require('../api/billingCycle/billingCycleServices')
    BillingCycle.register(protectedApi, '/billingCycles')

    const openApi = express.Router()
    server.use('/oapi',openApi)

    //Ares Livres sem Verificação
    const AuthService = require('../api/user/authService')
    openApi.post('/login',AuthService.login)
    openApi.post('/signup',AuthService.signup)
    openApi.post('/validateToken',AuthService.validateToken)
}