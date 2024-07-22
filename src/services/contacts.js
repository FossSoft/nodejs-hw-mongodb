import { StudentsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = StudentsCollection.find();
  return contacts;
};

export const getContactById = async (studentId) => {
  const student = await StudentsCollection.findById(studentId);
  return student;
};
