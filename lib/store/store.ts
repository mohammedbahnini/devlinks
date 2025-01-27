import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { BasePlatformType } from '@/lib/schemas';
import { GetPlatformByTag } from '../functions';
import { BasePlatforms } from '../platforms';

type StoreType = {
    platformsValues: string[];
    mockupPlatforms: BasePlatformType[],
    currentTab: string;
    mode: 'editor' | 'preview',
    changeTab: (value: string) => void;
    addEmptyPlatformValue: () => void,
    removePlatform: (value: string, index: number) => void;
    updatePlatform: (value: string, index: number) => Promise<void>;
    changeMode: (value: string) => void;
}

export const Store = create<StoreType>()(
    (set, get) => ({
        platformsValues: [],
        mockupPlatforms: [BasePlatforms[0], BasePlatforms[1], BasePlatforms[2], BasePlatforms[3], BasePlatforms[4], BasePlatforms[5]],
        currentTab: 'profile',
        mode: 'preview',
        changeTab: (value) => {
            set((state) => ({ currentTab: value }))
        },
        addEmptyPlatformValue: () => {
            set((state) => {
                if (state.platformsValues.length === 0)
                    return { platformsValues: [''] }
                else
                    return { platformsValues: [...state.platformsValues, ''] }
            });
        },
        removePlatform: (value, index) => {

            set((state) => {
                const newPlatforms = state.platformsValues?.filter((platform, i) => i !== index);
                const newMockupPlatforms = state.mockupPlatforms.filter((platform, i) => i !== index);

                return {
                    platformsValues: newPlatforms ? [...newPlatforms] : [],
                    mockupPlatforms: newMockupPlatforms ? [...newMockupPlatforms] : [],
                }
            });
        },
        updatePlatform: async (value, index) => {


            set((state) => {

                let newMockupPlatforms: BasePlatformType[] = [];
                const newPlatforms = state.platformsValues?.map((platformValue, i) => {
                    if (i === index) return value;
                    else return platformValue;
                });


                const platfotmToAdd = GetPlatformByTag(value);
                // check if the base platforms contains the selecvted value

                if (platfotmToAdd) {

                    // check if the selected index exists to update the mockup platforms
                    if (state.mockupPlatforms[index]) {


                        newMockupPlatforms = state.mockupPlatforms.map((item, prevStateIndex) => {
                            if (prevStateIndex === index) {
                                return {
                                    ...platfotmToAdd
                                }
                            }
                            else {
                                return item;
                            }
                        })
                    }
                    else
                        newMockupPlatforms = [...state.mockupPlatforms, platfotmToAdd];
                }




                return { platformsValues: [...newPlatforms], mockupPlatforms: [...newMockupPlatforms] }
            })
        },
        changeMode: (value) => {
            set(() => {
                return { mode: value }
            })
        }
    }),

);