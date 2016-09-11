export default function (state=[], action) {
    console.log('Checked on cooking option')
    switch(action.type) {
        case "SKILL_CHECKED":
            return action.cookingSkilloption;
            break;
    }
    return state;
}
