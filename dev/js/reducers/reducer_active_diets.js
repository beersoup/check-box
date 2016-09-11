export default function (state=[], action) {
    console.log('Checked on diets option')
    switch(action.type) {
        case "DIETS_CHECKED":
            return action.dietsOption;
            break;
    }
    return state;
}

