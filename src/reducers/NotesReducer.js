const initialState = {
    list: [
        { title: 'Nota 1', body: 'testando 123' }
    ],
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_NOTE':

            break;
    }

    return state;
}