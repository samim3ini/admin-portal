import axios from 'axios';

const API_Emp_URL = 'https://rjjunsawi4.execute-api.us-east-1.amazonaws.com/test/employees';
const API_ATT_URL = 'https://rjjunsawi4.execute-api.us-east-1.amazonaws.com/test/attendance';

export const fetchEmployees = async () => {
  return axios.get(API_Emp_URL);
};

export const addEmployee = async (employeeData: any) => {
  return axios.post(API_Emp_URL, employeeData, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const updateEmployee = async (employeeID: string, updatedData: any) => {
  return axios.put(`${API_Emp_URL}/${employeeID}`, updatedData, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deleteEmployee = async (employeeID: string) => {
  return axios.delete(`${API_Emp_URL}/${employeeID}`);
};

export const fetchAttendanceRecords = async () => {
    return axios.get(API_ATT_URL);
};
