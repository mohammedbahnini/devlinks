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
    avatarPath: string;
    firstName: string;
    lastName: string;
    email: string;
    getUserData: () => Promise<void>;
    changeTab: (value: string) => void;
    addEmptyPlatformValue: () => void,
    removePlatform: (value: string, index: number) => void;
    updatePlatform: (value: string, index: number) => Promise<void>;
    changeMode: (value: string) => void;
    setAvatarPath: (path: string) => void;
    setFirstName: (value: string) => void;
    setLastName: (value: string) => void;
    setEmail: (value: string) => void;
}


const mockGetData = async (): Promise<BasePlatformType[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [BasePlatforms[0], BasePlatforms[1], BasePlatforms[2]];
}
const init = await mockGetData();


export const Store = create<StoreType>()(
    (set, get) => ({
        platformsValues: [init[0].tag, init[1].tag, init[2].tag],
        mockupPlatforms: [...init],
        currentTab: 'profile',
        mode: 'preview',
        avatarPath: 'https://xsgames.co/randomusers/avatar.php?g=male',
        firstName: 'Ben',
        lastName: 'Wright',
        email: 'jhondoe@example.com',
        getUserData: async () => {
            set(() => ({ mockupPlatforms: [BasePlatforms[0], BasePlatforms[1], BasePlatforms[2]] }))
        },
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
                const newPlatforms = state.platformsValues?.filter((_, i) => i !== index);
                const newMockupPlatforms = state.mockupPlatforms.filter((_, i) => i !== index);

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
            set(() => ({ mode: value }))
        },
        setAvatarPath: (path) => {
            set(() => ({ avatarPath: path }))
        },
        setFirstName: (value) => {
            set(() => ({ firstName: value }))
        },
        setLastName: (value) => {
            set(() => ({ lastName: value }))
        },
        setEmail: (value) => {
            set(() => ({ email: value }))
        }
    }),

);