import episode_1 from "../../public/assets/the_phantom_menance.jpg";
import episode_2 from "../../public/assets/attack_of_the_clones.jpg";
import episode_3 from "../../public/assets/revenge_of_the_sith.jpg";
import episode_4 from "../../public/assets/a_new_hope.jpg";
import epidose_5 from "../../public/assets/empire_strikes_back.jpg";
import episode_6 from "../../public/assets/return_of_the_jedi.jpg";
import star_wars from "../../public/assets/default.jpg";
import { StaticImageData } from "next/image";

const filmById:{ [key: number]: StaticImageData } = {
    1: episode_1,
    2: episode_2,
    3: episode_3,
    4: episode_4,
    5: epidose_5,
    6: episode_6,
}

export const getImageByEpisode = (episodeId: number) => {
    return filmById[episodeId] || star_wars;
};