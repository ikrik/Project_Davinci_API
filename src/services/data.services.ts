import ParisPoints from '../../data/Points/parisPoints';
import CommunesParis from '../../data/Communes/communesParis';
import Departments from '../../data/Departments/franceDepartments';
import France from '../../data/Regions/france';


export const getPoints = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!ParisPoints) {
      reject('No data found');
    }
    resolve(ParisPoints);
  });
};

export const getCommunes = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!CommunesParis) {
      reject('No data found');
    }
    resolve(CommunesParis);
  });
};

export const getDepIdCommIdByCoordinates = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve([{ id: 75056, "dept_id": 75 }]);
  });
};

export const getDepartments = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!Departments) {
      reject('No data found');
    }
    resolve(Departments);
  });
}

export const getRegion = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!France) {
      reject('No data found');
    }
    resolve(France);
  });
}