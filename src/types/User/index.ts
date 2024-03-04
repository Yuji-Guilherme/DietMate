import { Food, Exercise, Preference } from '..';

interface UserContentObj<T> {
  title: string;
  content: T[];
}

interface UserDiet extends UserContentObj<Food> {}

interface UserWorkout extends UserContentObj<Exercise> {}

export interface User {
  username: string;
  preference?: Preference;
  diet?: { [key: string]: UserDiet };
  workout?: { [key: string]: UserWorkout };
}
