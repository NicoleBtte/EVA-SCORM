import { SCORM } from 'pipwerks-scorm-api-wrapper';

const scorm = new SCORM();

export const initializeScorm = () => {
  const success = scorm.init();
  if (success) {
    // La inicialización de SCORM fue exitosa
    console.log('SCORM initialized');
  } else {
    // La inicialización de SCORM falló
    console.log('Failed to initialize SCORM');
  }
};

export const saveScormData = (page) => {
  scorm.set('cmi.location', page);
  const success = scorm.save();
  if (success) {
    // Los datos de SCORM se guardaron correctamente
    console.log('SCORM data saved');
  } else {
    // Error al guardar los datos de SCORM
    console.log('Failed to save SCORM data');
  }
};

export const finishScorm = () => {
  const success = scorm.quit();
  if (success) {
    // SCORM finalizado correctamente
    console.log('SCORM finished');
  } else {
    // Error al finalizar SCORM
    console.log('Failed to finish SCORM');
  }
};

export const getStudentName = () => {
    return scorm.get('cmi.core.student_name');
};
