
import Logo from '@/app/components/logo/logo';
import { Copyright } from '@mui/icons-material';
import DCard from '../../components/shared/DCard';
import { year } from '@/app/shared/library/common/constants';

export default function Footer() {
    return (
        <footer className={`footer borderRadius w100 sideSpace bottomSpace`}>
            <DCard className={`footerCard`} cardContentClass={`p0Important`}>
                <div className={`footerContent flex w100 spaceBetween`}>
                    <div className={`leftSide`}>
                        <Logo className={`footerLogo p0`} />
                    </div>
                    <div className={`rightSide`} style={{ paddingRight: 25 }}>
                        <div className={`copyright fontColor flex gap5`}>
                            Copyright <Copyright style={{ fontSize: 18, color: `var(--iconRight)` }} /> {year}
                        </div>
                    </div>
                </div>
            </DCard>
        </footer>
    )
}