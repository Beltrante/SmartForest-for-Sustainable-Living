import { Intents, NameStates, statesMap } from "../../Utils"
import { MachineState } from "../../MachineState"


/**
 * Concrete state class that will redefine prepare response and change state methods
 */
export class TipRequestNoLeavesState extends MachineState {
    /**
     * Using the received string prepares the appropriate json response by interacting with the dialogflow api
     */
    async prepareResponse(phrase: string): Promise<any> {
        //Parent class method returns the intent
        await super.prepareResponse(phrase)
        let intent: string = super.intentString
        switch (intent) {
            case Intents.yes_answer: {
                //ask dialogFlow for a more varied answer
                await super.prepareResponse("How can i get more leaves?")
                super.setNextState(statesMap.get(NameStates.UserPromptState)!)
                break;
            }
            case Intents.no_answer: {
                super.setAnswer("Okay, no problem. Can i do anything else for you?")
                super.setNextState(statesMap.get(NameStates.UserPromptState)!)
                break
            }
            default: {
                super.prepareResponseDefault("I'm waiting for you to tell me if you want tips on how to get more leaves or not")
                break;
            }
        }
        return super.finalResponse
    }
}
