export function validate_string(data, prefix, type = 0) {
    if (!data) {
        let pre = type == 0 ? 'Enter ' : ' Select'
        throw pre + prefix;
    } else if (typeof data !== "string") {
        throw prefix + " is not valid";
    }
}

export function chk_email(str) {
    if (!(/^[a-z_0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,3})$/.test(str))) {
        throw "Invalid Email";
    }
}