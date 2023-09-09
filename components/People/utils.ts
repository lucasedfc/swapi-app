import a_new_hope from "../../public/assets/a_new_hope.jpg";
import attack_of_the_clones from "../../public/assets/attack_of_the_clones.jpg";
import empire_strikes_back from "../../public/assets/empire_strikes_back.jpg";
import return_of_the_jedi from "../../public/assets/return_of_the_jedi.jpg";
import revenge_of_the_sith from "../../public/assets/revenge_of_the_sith.jpg";
import the_phantom_menance from "../../public/assets/the_phantom_menance.jpg";
import star_wars from "../../public/assets/star_wars.jpg";
import { StaticImageData } from "next/image";

const filmById:{ [key: number]: StaticImageData } = {
    1: the_phantom_menance,
    2: attack_of_the_clones,
    3: revenge_of_the_sith,
    4: a_new_hope,
    5: empire_strikes_back,
    6: return_of_the_jedi,
}

export const getImageByEpisode = (episodeID: number) => {
    return filmById[episodeID] || star_wars;
};