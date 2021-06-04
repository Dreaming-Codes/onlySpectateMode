import {ESX} from "./esx";

ESX.TriggerServerCallback("onlySpectateMode:immaOnlySpectator", (immaSpectator) => {
    if (immaSpectator) {
        setTick(() => {
            SetEntityVisible(PlayerPedId(), false, false);
            SetEntityCompletelyDisableCollision(PlayerPedId(), true, false);
            MumbleSetAudioInputDistance(0);

            [
                249, //PTT
                23, //ENTER (F)
                25, //AIM

                //START: WEAPONS_SELECTION
                158,
                159,
                160,
                161,
                162,
                163,
                164,
                165,
                12,
                13,
                14,
                15,
                16,
                17,
                //END: WEAPONS_SELECTION

                24, //ATTACK
                288, //PHONE
                289, //INVENTORY
                167, //INTERACTION MENU (F6)
                168, //RADIO (F7)

                //START: E
                40,
                46,
                51,
                54,
                86,
                103,
                119,
                153,
                184,
                206,
                355,
                356,
                //END: E

            ].forEach((key) => {
                DisableControlAction(0, key, true)
                DisableControlAction(2, key, true)
            })


        })
    }
})

console.log("onlySpectateMode STARTED")
