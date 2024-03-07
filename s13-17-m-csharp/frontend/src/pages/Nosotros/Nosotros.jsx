import styles from './nosotros.module.css';
import Volver from '../../components/Volver/Volver';
import { Fade } from 'react-awesome-reveal';

export default function Nosotros() {
  return (
    <>
      <Volver title={'Volver'} />
      <div>
        <div className={styles.containerNosMain}>
          <Fade cascade triggerOnce="true" damping="0.1" >
            <span className={styles.titleNos}>
              Hola! Somos MediCita! En esta ocasión queremos contarles
              un poco sobre nosotros, nuestros objetivos, quienes somos
              y que es lo que hacemos, para poder tener un mejor
              acercamiento con ustedes!
            </span>
            <h1 className={styles.titleNosInfo}>Nuestro objetivo</h1>
            <p className={styles.textNosInfo}>
              En MediCita, nuestro principal objetivo es proporcionar un
              acceso fácil y conveniente a servicios médicos de calidad.
              Nos esforzamos por facilitar la búsqueda y programación de
              citas médicas, mejorando así la experiencia de los
              usuarios en la gestión de su salud. Queremos ser tu aliado
              en el cuidado de tu bienestar, ofreciendo una plataforma
              intuitiva y eficiente que conecte a pacientes con
              profesionales de la salud de confianza.
            </p>
            <h1 className={styles.titleNosInfo}>Quiénes somos</h1>
            <p className={styles.textNosInfo}>
              MediCita es un equipo comprometido de profesionales de la
              salud y expertos en tecnología que se unieron con la
              visión de transformar la manera en que accedemos a la
              atención médica. Nos enorgullece ser un puente entre
              pacientes y médicos, facilitando una conexión directa y
              simplificando el proceso de reserva de citas. Nuestra
              dedicación a la excelencia y la innovación nos impulsa a
              seguir mejorando y adaptándonos para satisfacer las
              necesidades cambiantes del mundo de la salud.
            </p>
            <h1 className={styles.titleNosInfo}>
              Valores que seguimos
            </h1>
            <p className={styles.textNosInfo}>
              En MediCita, nuestros valores son la base de todo lo que
              hacemos. Nos guiamos por la integridad, la transparencia y
              el respeto. Valoramos la accesibilidad a la atención
              médica y nos esforzamos por crear una comunidad en línea
              donde los usuarios se sientan seguros y respaldados en sus
              decisiones de salud. La confianza y la calidad son
              fundamentales para nosotros, y trabajamos incansablemente
              para mantener altos estándares en todos los aspectos de
              nuestro servicio.
            </p>
            <h1 className={styles.titleNosInfo}>Propósito</h1>
            <p className={styles.textNosInfo}>
              Nuestro propósito en MediCita es contribuir a un sistema
              de atención médica más eficiente y centrado en el
              paciente. Buscamos empoderar a las personas al
              proporcionarles herramientas para gestionar su salud de
              manera proactiva. Creemos en la importancia de la
              prevención y el acceso oportuno a la atención médica, y
              trabajamos cada día para hacer que ese propósito se
              convierta en una realidad para todos nuestros usuarios.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
}
