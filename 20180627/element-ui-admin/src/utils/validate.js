export function isvalidUsername(str) {
    const valid_map = ['admin', 'editor', ]
    str = str.toLowerCase().trim();
    if (str && valid_map.indexOf(str) >= 0) {
        return true;
    }
    return false
}
export function isvalidEmail(str) {

}