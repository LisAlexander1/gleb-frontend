import MainLayout from '../../layouts/main-layout/main-layout.tsx';
import {UNSAFE_ErrorResponseImpl, useParams} from 'react-router';
import {specialists} from '../../data/specialists.ts';
import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import styles from './specialist.module.scss';
import ServiceRow from '../../components/service-row/service-row.tsx';
import Button from '../../components/button/button.tsx';

function SpecialistPage() {
    const {slug} = useParams();
    const specialist = specialists.find((s) => s.slug === slug);
    if (!specialist) {
        throw new UNSAFE_ErrorResponseImpl(404, "Not Found", specialist, false)
    }
    return (
        <MainLayout>
            <BlockLayout>
                <div className={styles.grid}>
                    <div className={styles.photo_wrapper}>
                        <img src={specialist.photo}/>
                        <Button styleType="primary" size="large">Записаться</Button>
                    </div>
                    <div className={styles.column}>
                        <header className={styles.name_header}>
                            <h2>{specialist.lastName} {specialist.firstName} {specialist.surname}</h2>
                            <p className="text-big-regular">{specialist.post}</p>
                            <p>{specialist.experience} лет</p>
                        </header>
                        <div>
                            {specialist.services.map((s, i) => <ServiceRow key={i} cost={s.cost} name={s.name}/>)}
                        </div>
                        <div>
                            <h3>Область пракических интересов</h3>
                            <ul>
                                {specialist.practicalArea.map((pa, index) =>
                                    <li key={index} className={styles.practical_row}>{pa}</li>
                                )}
                            </ul>
                        </div>
                        <div>
                            <h2>Образование</h2>
                            {specialist.education.map((education, index) => (
                                <div className={styles.education_row} key={index}>
                                    <h3>{education.year}</h3>
                                    <span className="text-big-regular">{education.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </BlockLayout>
        </MainLayout>
    );
}

export default SpecialistPage;