import TestParis from "../../data/TestParis/testParis";
import CommunesParis from '../../data/CommunesParis/communesParis';


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