import Gender from './Gender';

export default interface User {
  name: string;
  age: string;
  email: string;
  school: string;
  gender: Gender;
  description?: string;
  pictures?: string[];
}
