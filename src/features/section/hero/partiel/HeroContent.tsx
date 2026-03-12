import { useTranslation } from 'react-i18next';
import { Button } from '../../../../components/ui/Button';
import { Icons } from '../../../../components/shared/Icons';
import { Badge } from '../../../../components/ui/Badge';

export const HeroContent = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-6 animate-fade-in">
            {/* Trusted Badge */}
            <Badge label={t('hero.trusted_care')} className="mb-0" />

            {/* Main Title */}
            <h1 className="text-h1 text-white">
                {t('hero.title_part1')} <span className="text-brand">{t('hero.title_part2')}</span> {t('hero.title_part3')}
            </h1>

            {/* Description */}
            <p className="text-white text-body">
                {t('hero.description')}
            </p>

            {/* CTA Button */}
            <div className="mt-4">
                <Button
                    href="#contact"
                    variant="pill"
                    size="lg"
                    icon={<Icons.ArrowRight size={16} />}
                >
                    {t('navbar.cta')}
                </Button>
            </div>
        </div>
    );
};
