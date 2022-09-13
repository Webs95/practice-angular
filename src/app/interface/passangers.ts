import Children from './child';

interface Passanger {
  id: number;
  name: string;
  checkedIn: boolean;
  checkedInDate: number | null;
  children: Children[] | null;
}

export default Passanger;
