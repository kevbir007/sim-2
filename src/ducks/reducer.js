import axios from 'axios';

const initialState = { /* 43G */
    ID: '',
    Username: '',
    Password: '',
    Property: '',
    Description: '',
    Address: '',
    City: '',
    State: '',
    Zip: '',
    Url: '',
    Loan: '',
    Monthly_Mortgage: '',
    Recommended_Rent: '',
    Desired_Rent: ''
}

const UPDATE_ID = 'UPDATE_ID';
const UPDATE_PAGE_ONE = 'UPDATE_PAGE_ONE';
const UPDATE_PAGE_TWO = 'UPDATE_PAGE_TWO';
const UPDATE_PAGE_THREE = 'UPDATE_PAGE_THREE';
const UPDATE_PAGE_FOUR = 'UPDATE_PAGE_FOUR';
const UPDATE_PAGE_FIVE = 'UPDATE_PAGE_FIVE';
const UPDATE_HOME = 'UPDATE_HOME';

function reducer( state = initialState, action ) { /* 43D */
    console.log(action.type)
    switch( action.type ){ /* 43E */

        case UPDATE_PAGE_ONE:
        console.log('reducer', action.payload)/* 43F */
        return Object.assign( {}, state, { Property: action.payload.property,  Description: action.payload.description });

        case UPDATE_PAGE_TWO:
        return Object.assign( {}, state, { Address: action.payload.address, City: action.payload.city, State: action.payload.state, Zip: action.payload.zip } );

        case UPDATE_PAGE_THREE:
        console.log(action.payload.url)
        return Object.assign( {}, state, { Url: action.payload.url });

        case UPDATE_PAGE_FOUR:
        return Object.assign( {}, state, { Loan: action.payload.loan, Monthly_Mortgage: action.payload.mortgage } );

        case UPDATE_PAGE_FIVE:
        return Object.assign( {}, state, { Recommended_Rent: action.payload.recommended_rent, Desired_Rent: action.payload.desiredRent } );

        case 'UPDATE_HOME_FULFILLED':
        console.log(action)
        return Object.assign( {}, state, { Username: action.payload[0].username, Password: action.payload[0].password, ID: action.payload[0].id });

        default: return state;
    }
}

export function updatePageOne( property, description ) {
    console.log('action', property)
    return {
        type: UPDATE_PAGE_ONE,
        payload: {property, description}
    };
}

export function updatePageTwo( address, city, state, zip ) {
    console.log(city)
    return {
        type: UPDATE_PAGE_TWO,
        payload: {address, city, state, zip}
    };
}

export function updatePageThree( url ) {
    console.log('url', url)
    return {
        type: UPDATE_PAGE_THREE,
        payload: {url}
    };
}

export function updatePageFour( loan, mortgage ) {
    return {
        type: UPDATE_PAGE_FOUR,
        payload: {loan, mortgage}
    };
}

export function updatePageFive( recommended_rent, desiredRent ) {
    console.log('something')
    return {
        type: UPDATE_PAGE_FIVE,
        payload: {recommended_rent, desiredRent}
    };
}

export function updateHome(username, password, history) {
    console.log(username, password)
    const request = axios.post(`/api/getuser`, {
        username,
        password
    })
    .then(function (response) {
        console.log(response);
        if(response.data[0]) {
            console.log(true)
            history.push('/dashboard')
            return response.data
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      
    return {
        type: UPDATE_HOME,
        payload: request
    }

}

export default reducer;