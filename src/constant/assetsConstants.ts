import PAGE_404 from '@assets/images/404Page.webp';
import bonnieAvatar from '@assets/images/bonnieAvatar.webp';
import gridImage5 from '@assets/images/gridImage-5.webp';
import gridImage6 from '@assets/images/gridImage-6.webp';
import gridImage7 from '@assets/images/gridImage-7.webp';
import gridImage8 from '@assets/images/gridImage-8.webp';
import karenAvatar from '@assets/images/karenAvatar.webp';
import lanaAvatar from '@assets/images/lanaAvatar.webp';
import LOGO from '@assets/images/Logo.svg';
import michealAvatar from '@assets/images/michealAvatar.webp';
import mainAvatar from '@assets/images/navAvatar.webp';
import neilAvatar from '@assets/images/neilAvatar.webp';
import thomasAvatar from '@assets/images/thomasAvatar.webp';
import WRONG_PAGE from '@assets/images/wrongPage.webp';

export const USER_AVATAR = [
    neilAvatar,
    bonnieAvatar,
    michealAvatar,
    thomasAvatar,
    lanaAvatar,
    karenAvatar,
] as const;

export const GRID_IMAGES = [
    gridImage5,
    gridImage6,
    gridImage7,
    gridImage8,
] as const;

export { LOGO, PAGE_404, WRONG_PAGE, mainAvatar };
