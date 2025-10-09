import PAGE_404 from '@assets/images/404Page.webp';
import bonnieAvatar from '@assets/images/bonnieAvatar.webp';
import gridImage4 from '@assets/images/gridImage-1.webp';
import gridImage1 from '@assets/images/gridImage-2.webp';
import gridImage3 from '@assets/images/gridImage-3.webp';
import gridImage2 from '@assets/images/gridImage-4.webp';
import karenAvatar from '@assets/images/karenAvatar.webp';
import lanaAvatar from '@assets/images/lanaAvatar.webp';
import LOGO from '@assets/images/Logo.svg';
import michealAvatar from '@assets/images/michealAvatar.webp';
import mainAvatar from '@assets/images/navAvatar.webp';
import neilAvatar from '@assets/images/neilAvatar.webp';
import thomasAvatar from '@assets/images/thomasAvatar.webp';
import WRONG_PAGE from '@assets/images/wrongPage.webp';

export const USER_AVATAR = [
    bonnieAvatar,
    karenAvatar,
    lanaAvatar,
    michealAvatar,
    neilAvatar,
    thomasAvatar,
] as const;

export const GRID_IMAGES = [
    gridImage1,
    gridImage2,
    gridImage3,
    gridImage4,
] as const;

export { LOGO, PAGE_404, WRONG_PAGE, mainAvatar };
