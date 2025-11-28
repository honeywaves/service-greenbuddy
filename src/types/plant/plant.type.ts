export type Plant = {
  id: number;
  name: string;
  mood: string;
  lastActionAt: Date;
};

export type Plants = Plant[];

export enum PlantMood {
  HAPPY = 'happy',
  SAD = 'sad',
  ANGRY = 'angry',
  HUNGRY = 'hungry',
  THIRSTY = 'thirsty',
  SICK = 'sick',
  SLEEPING = 'sleeping',
}
