export const automata = (input) => {
    const states = {
        q0: { W: "q1", M: "q21", D: "q26", P: "q31", F: "q37", A: "q43" },
        q1: { M: "q2" },
        q2: { E: "q3", B: "q10", S: "q15" },
        q3: { S: "q4" },
        q4: { T: "q5" },
        q5: { R: "q6" },
        q6: { E: "q7" },
        q7: { N: "q8" },
        q8: { 9: "q9" },
        q10: { A: "q11" },
        q11: { J: "q12" },
        q12: { O: "q13" },
        q13: { S: "q14" },
        q15: { E: "q16" },
        q16: { P: "q17" },
        q17: { 6: "q18" },
        q18: { 5: "q19" },
        q19: { 0: "q20" },
        q21: { A: "q22" },
        q22: { B: "q23" },
        q23: { E: "q24" },
        q24: { 6: "q25" },
        q25: { 0: "q19" },
        q26: { E: "q27" },
        q27: { P: "q28" },
        q28: { O: "q29" },
        q29: { R: "q30" },
        q30: { T: "q34" },
        q31: { L: "q32" },
        q32: { A: "q33" },
        q33: { Y: "q34" },
        q34: { W: "q35" },
        q35: { M: "q36" },
        q36: { 0: "q50" },
        q37: { A: "q38" },
        q38: { S: "q39" },
        q39: { H: "q40" },
        q40: { I: "q41" },
        q41: { O: "q42" },
        q42: { N: "q48" },
        q43: { H: "q44", P: "q52" },
        q44: { O: "q45" },
        q45: { R: "q46" },
        q46: { R: "q47" },
        q47: { A: "q48" },
        q48: { W: "q49" },
        q49: { M: "q50" },
        q50: { 8: "q51" },
        q52: { P: "q53" },
        q53: { T: "q54" },
        q54: { E: "q55" },
        q55: { D: "q56" },
        q56: { A: "q57" },
        q57: { M: "q58" },
        q58: { I: "q59" },
        q59: { L: "q60" },
    };

    let currentState = "q0"
    let message = "q0"

    for (let i = 0; i < input.length; i++) {
        const currentChar = input.substring(i, i + 1)

        try {
            if (!states[currentState][currentChar]) {
                message = `${message} X`

                console.log({ success: false, msg: message });
                return { success: false, msg: message };
            }
        } catch (error) {
            message = `${message} X`

            console.log({ success: false, msg: message });
            return { success: false, msg: message };
        }
        currentState = states[currentState][currentChar];

        message = `${message} --> ${currentState}`
    }


    if (currentState === "q9" || currentState === "q14" || currentState === "q20" || currentState === "q51" || currentState === "q60") {
        console.log({ success: true, msg: message });

        return { success: true, msg: message };
    }
    message = `${message} X`

    console.log({ success: false, msg: message });
    return { success: false, msg: message };
}
