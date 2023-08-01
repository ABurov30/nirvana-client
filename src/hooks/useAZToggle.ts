import { fetchFlags } from "../flags/fetchFlags";

export function useAZToggle () {
    for (let key in fetchFlags) {
        if (sessionStorage.getItem(key)) fetchFlags[key] = true
    }
}