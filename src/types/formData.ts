interface IFormData {
  name: string,
  date: string,
  phone: string,
  email: string,
};

interface IUser extends IFormData {
  id: string;
}

export type { IFormData, IUser };
