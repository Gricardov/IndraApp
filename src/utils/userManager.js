export function setUserLocal(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUserLocal() {
    try {
        return JSON.parse(localStorage.getItem('user'));
    } catch (error) {
        return undefined;
    }
}

export function removeUserLocal() {
    localStorage.removeItem('user');
}