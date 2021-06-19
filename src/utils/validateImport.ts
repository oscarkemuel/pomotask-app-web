import { validate } from 'uuid';

interface tasksInterface {
  title: string;
  date: string;
  points: number;
  description?: string;
  id: string;
}

function validateImports(tasks: string): boolean {
  const arrayTasks: tasksInterface[] = JSON.parse(tasks);
  let isValidate = true;

  try {
    for (let i = 0; i < arrayTasks.length; i += 1) {
      const task = arrayTasks[i];

      const isValidateUuid = validate(task.id);
      const isValidateTitle = task.title.length > 0;
      const isValidateDate = task.date.length > 0;

      if (!isValidateUuid || !isValidateTitle || !isValidateDate) {
        isValidate = false;
        break;
      }
    }
  } catch (error) {
    isValidate = false;
  }

  return isValidate;
}

export default validateImports;
