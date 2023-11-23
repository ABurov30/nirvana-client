import { Radio } from "../../entities/Radios/types";

export interface TracksRowProps {
    tracks: Radio[]
    loadNext: () => void
    loadPrev: () => void
}