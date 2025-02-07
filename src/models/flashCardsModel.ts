import type { Action, Computed, Thunk } from 'easy-peasy';

export interface flashCard {
  type: 'text' | 'image' | 'translation';
  question: string;
  answer: string;
  imageSrc: string;
  tags: string[];
  url: string;
  image: string;
  ebbinghausValue: number;
  nextReinforcement: number;
  timesTyped: number;
  timesErrored: number;
}

export interface sessionTrainingData {
  flashCard: flashCard;
  numberOfTimesWritten: number;
  numberOfTimesWrittenFast: number;
  numberOfTimesWrittenWrong: number;
  lastTenTimesSpeed: number[];
}

export interface generatedData {
  flashCard: flashCard;
  sessionTrainingIndex: number;
}

export interface tag {
  key: string;
  index: number | undefined;
}

export interface flashCardActionModel {
  setLoadedFromStorage: Action<flashCardStoreStateModel>;
  updateLocalStorage: Action<flashCardStoreStateModel>;

  // Actions to add and remove cards from the active flash card set
  addFlashCard: Action<flashCardStoreStateModel, flashCard>;
  addEmptyFlashCard: Action<flashCardStoreStateModel>;
  removeFlashCard: Action<flashCardStoreStateModel, number>;
  editFlashCard: Action<
    flashCardStoreStateModel,
    { index: number; newFlashCard: flashCard }
  >;

  // Actions to add and remove tags from the tag set
  addTagFlashCard: Action<flashCardStoreStateModel, tag>;
  removeTagFlashCard: Action<flashCardStoreStateModel, tag>;

  // Actions to get and set the last daily training date of a set
  setNextDailyTraining: Action<flashCardStoreStateModel, Date>;

  setSessionTrainingData: Action<flashCardStoreStateModel>;
  addTimeSessionTrainingData: Action<flashCardStoreStateModel, number[]>;

  fetchUserData: Thunk<flashCardActionModel>;
}

export interface flashCardStoreStateModel {
  loadedFromStorage: boolean;

  // All current flash card sets
  flashCards: flashCard[];
  tags: { [key: string]: number[] };

  sessionTrainingData: sessionTrainingData[];

  nextTrainingDate: Date;

  // Number of flash cards to practice daily
  numberOfDailyFlashCards: number;

  activeFlashCards: Computed<flashCardStoreStateModel, flashCard[]>;

  percentageCompleted: Computed<flashCardStoreStateModel, number>;
}

export type FlashCardStoreModel = flashCardStoreStateModel &
  flashCardActionModel;
