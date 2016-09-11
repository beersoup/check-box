export const skillchecked = (cookingSkilloption) => {
    console.log("Click on Cooking skill option: ", cookingSkilloption);
    return {
        type: "SKILL_CHECKED",
        cookingSkilloption
    }
};
export const dietschecked = (dietsOption) => {
    console.log("Click on Cooking diets option: ", dietsOption);
    return {
        type: "DIETS_CHECKED",
        dietsOption
    }
};
