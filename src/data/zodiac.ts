import aquarius from '../assets/aquarius.png';
import aries from '../assets/aries.png';
import cancer from '../assets/cancer.png';
import capricorn from '../assets/capricorn.png';
import gemini from '../assets/gemini.png';
import leo from '../assets/leo.png';
import libra from '../assets/libra.png';
import pisces from '../assets/pisces.png';
import sagittarius from '../assets/sagittarius.png';
import scorpio from '../assets/scorpio.png';
import taurus from '../assets/taurus.png';
import virgo from '../assets/virgo.png';

export interface ZodiacSign { label: string; value: string; dates: string; element: string; quality: string; tagline: string; description: string; image: string; }
export const zodiacSigns: ZodiacSign[] = [
 {label:'Aries',value:'aries',dates:'Mar 21 – Apr 19',element:'Fire',quality:'Cardinal',tagline:'The initiator',description:'Bold, energetic and ready to begin. Aries symbolism is associated with courage, initiative and momentum.',image:aries},
 {label:'Taurus',value:'taurus',dates:'Apr 20 – May 20',element:'Earth',quality:'Fixed',tagline:'The steady builder',description:'Grounded and patient. Taurus symbolism is associated with comfort, persistence and the beauty of the present.',image:taurus},
 {label:'Gemini',value:'gemini',dates:'May 21 – Jun 20',element:'Air',quality:'Mutable',tagline:'The curious mind',description:'Expressive and inquisitive. Gemini symbolism celebrates ideas, conversation and seeing more than one side.',image:gemini},
 {label:'Cancer',value:'cancer',dates:'Jun 21 – Jul 22',element:'Water',quality:'Cardinal',tagline:'The nurturer',description:'Intuitive and caring. Cancer symbolism points toward belonging, emotional awareness and the meaning of home.',image:cancer},
 {label:'Leo',value:'leo',dates:'Jul 23 – Aug 22',element:'Fire',quality:'Fixed',tagline:'The radiant creator',description:'Warm and expressive. Leo symbolism celebrates creativity, generosity and the confidence to be seen.',image:leo},
 {label:'Virgo',value:'virgo',dates:'Aug 23 – Sep 22',element:'Earth',quality:'Mutable',tagline:'The thoughtful craftsperson',description:'Observant and practical. Virgo symbolism is linked with thoughtful service, detail and steady improvement.',image:virgo},
 {label:'Libra',value:'libra',dates:'Sep 23 – Oct 22',element:'Air',quality:'Cardinal',tagline:'The harmonizer',description:'Diplomatic and relationship-minded. Libra symbolism explores balance, fairness, beauty and connection.',image:libra},
 {label:'Scorpio',value:'scorpio',dates:'Oct 23 – Nov 21',element:'Water',quality:'Fixed',tagline:'The deep diver',description:'Focused and perceptive. Scorpio symbolism reflects depth, transformation and the courage to look closer.',image:scorpio},
 {label:'Sagittarius',value:'sagittarius',dates:'Nov 22 – Dec 21',element:'Fire',quality:'Mutable',tagline:'The explorer',description:'Open-minded and adventurous. Sagittarius symbolism is associated with discovery, optimism and expanding horizons.',image:sagittarius},
 {label:'Capricorn',value:'capricorn',dates:'Dec 22 – Jan 19',element:'Earth',quality:'Cardinal',tagline:'The architect',description:'Disciplined and purposeful. Capricorn symbolism highlights long-term goals, responsibility and patient ambition.',image:capricorn},
 {label:'Aquarius',value:'aquarius',dates:'Jan 20 – Feb 18',element:'Air',quality:'Fixed',tagline:'The original thinker',description:'Independent and future-minded. Aquarius symbolism celebrates originality, community and fresh perspectives.',image:aquarius},
 {label:'Pisces',value:'pisces',dates:'Feb 19 – Mar 20',element:'Water',quality:'Mutable',tagline:'The dreamer',description:'Imaginative and empathetic. Pisces symbolism connects with intuition, creativity and compassion.',image:pisces},
];
