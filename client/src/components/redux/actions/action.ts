import { actionType } from "../../types/types"

export const action = (payload:any):actionType => {
    return {
        type: 'ACTION',
        payload,
    }
}
