import ParisPoints from '../../data/ParisPoints/parisPoints';
import CommunesParis from '../../data/CommunesParis/communesParis';
import Departments from '../../data/Departments/departments';
import France from '../../data/Country/france';


export const getParisPoints = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!ParisPoints) {
      reject('No data found');
    }
    resolve(ParisPoints);
  });
};

export const getCommunesParis = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!CommunesParis) {
      reject('No data found');
    }
    resolve(CommunesParis);
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

export const getCountry = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!France) {
      reject('No data found');
    }
    resolve(France);
  });
}