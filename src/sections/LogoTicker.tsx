import quantumLogo from '../../public/images/quantum.svg';
import acmeLogo from '../../public/images/acme-corp.svg';
import echoValleyLogo from '../../public/images/echo-valley.svg';
import pulseLogo from '../../public/images/pulse.svg';
import outsideLogo from '../../public/images/outside.svg';
import apexLogo from '../../public/images/apex.svg';
import celestialLogo from '../../public/images/celestial.svg';
import twiceLogo from '../../public/images/twice.svg';

const logos = [
    { name: 'Quantum', image: quantumLogo },
    { name: 'Acme Corp', image: acmeLogo },
    { name: 'Echo Valley', image: echoValleyLogo },
    { name: 'Pulse', image: pulseLogo },
    { name: 'Outside', image: outsideLogo },
    { name: 'Apex', image: apexLogo },
    { name: 'Celestial', image: celestialLogo },
    { name: 'Twice', image: twiceLogo },
];

export default function LogoTicker() {
    return <div>Logo Ticker</div>;
}
