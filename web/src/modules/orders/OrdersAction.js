import * as constants from '../../redux/commonConstant'

export function ordersCar(phone,orders){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'ordersCar',
        method: 'post',
        query: {phone},
        orders : orders
    }
}