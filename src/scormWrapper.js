import { SCORM } from 'pipwerks-scorm-api-wrapper';


export const initializeScorm = () => {
  const success = SCORM.init();
  if (success) {
    // La inicialización de SCORM fue exitosa
    console.log('SCORM initialized');
  } else {
    // La inicialización de SCORM falló
    console.log('Failed to initialize SCORM');
  }
};

export const saveScormData = (page) => {
  SCORM.set('cmi.location', page);
  const success = SCORM.save();
  if (success) {
    // Los datos de SCORM se guardaron correctamente
    console.log('SCORM data saved');
  } else {
    // Error al guardar los datos de SCORM
    console.log('Failed to save SCORM data');
  }
};

export const finishScorm = () => {
  const success = SCORM.quit();
  if (success) {
    // SCORM finalizado correctamente
    console.log('SCORM finished');
  } else {
    // Error al finalizar SCORM
    console.log('Failed to finish SCORM');
  }
};

export const getStudentName = () => {
    var name = SCORM.get('cmi.core.student_name');
    return name;
};

export const saveStudentScore = (nota) => {
  SCORM.set('cmi.core.score.raw', nota);
  SCORM.set('cmi.core.lesson_status', 'completed');
  SCORM.save();
};
