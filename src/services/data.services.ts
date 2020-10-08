import TestParis from '../../data/TestParis/testParis';
import CommunesParis from '../../data/CommunesParis/communesParis';
import Departments from '../../data/Departments/departments';
import France from '../../data/Country/france';


export const getTestParis = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!TestParis) {
      reject('No data found');
    }
    resolve(TestParis);
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