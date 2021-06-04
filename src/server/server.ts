import {ESX} from "./esx";

ESX.RegisterServerCallback("onlySpectateMode:immaOnlySpectator", (source, cb) =>{
    cb(IsPlayerAceAllowed(source, "spectator"))
})

console.log("onlySpectateMode STARTED")
