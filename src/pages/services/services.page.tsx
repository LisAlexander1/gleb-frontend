import MainLayout from '../../layouts/main-layout/main-layout.tsx';
import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import styles from './services.module.scss';
import {useState} from 'react';
import ServiceLinkRow from '../../components/service-link-row/service-link-row.tsx';
import ServiceLinksPage from './services-pages/service-links-page.tsx';

enum Category {
    consultations = 'consultations',
    usi = 'usi',
    analysis = 'analysis',
}

function ServicesPage() {
    const [category, setCategory] = useState<Category>(Category.consultations);
    return (
        <MainLayout>
            <BlockLayout className={styles.select_block}>
                <div className={styles.content_wrapper}>
                    <h1>Наши услуги</h1>
                    <div className={styles.select_row}>
                        <label className={styles.radio_container}>
                            <input onClick={() => setCategory(Category.consultations)}
                                   checked={category == Category.consultations} type="radio" name="type"/>
                            <h3>Консультации специалистов</h3>
                        </label>
                        <label className={styles.radio_container}>
                            <input onClick={() => setCategory(Category.usi)} checked={category == Category.usi}
                                   type="radio" name="type"/>
                            <h3>Узи</h3>
                        </label>
                        <label className={styles.radio_container}>
                            <input onClick={() => setCategory(Category.analysis)}
                                   checked={category == Category.analysis} type="radio" name="type"/>
                            <h3>Анализы</h3>
                        </label>
                    </div>
                </div>
            </BlockLayout>
            <BlockLayout className={styles.pages_block}>
                {category == Category.consultations && <ConsultationsPage/>}
                {category == Category.usi && <UsiPage/>}
                {category == Category.analysis && <AnalysisPage/>}
            </BlockLayout>
        </MainLayout>
    );
}

function ConsultationsPage() {
    return (
        <ServiceLinksPage header="Консультации специалистов">
            <ServiceLinkRow name="Консультации специалистов" to="spec"/>
            <ServiceLinkRow name="Консультации специалистов" to="spec"/>
            <ServiceLinkRow name="Консультации специалистов" to="spec"/>
            <ServiceLinkRow name="Консультации специалистов" to="spec"/>
        </ServiceLinksPage>
    )
}

function UsiPage() {
    return (
        <ServiceLinksPage header="Узи">
            <ServiceLinkRow name="Узи брюшной полости" to="spec"/>
            <ServiceLinkRow name="Узи брюшной полости" to="spec"/>
            <ServiceLinkRow name="Узи брюшной полости" to="spec"/>
            <ServiceLinkRow name="Узи брюшной полости" to="spec"/>
            <ServiceLinkRow name="Узи брюшной полости" to="spec"/>
        </ServiceLinksPage>
    )
}


function AnalysisPage() {
    return (
        <ServiceLinksPage header="Анализы">
            <ServiceLinkRow name="Анализ крови" to="spec"/>
            <ServiceLinkRow name="Анализ крови" to="spec"/>
            <ServiceLinkRow name="Анализ крови" to="spec"/>
            <ServiceLinkRow name="Анализ крови" to="spec"/>
            <ServiceLinkRow name="Анализ крови" to="spec"/>
            <ServiceLinkRow name="Анализ крови" to="spec"/>
            <ServiceLinkRow name="Анализ крови" to="spec"/>

        </ServiceLinksPage>
    )
}

export default ServicesPage;