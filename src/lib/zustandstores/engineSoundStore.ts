import { create } from "zustand";

type EngineSoundTypes = {
  startEngine: () => void;
  volume: number;
  hasEngineStarted: boolean;
  setHasEngineStarted: (isAudioPlaying: boolean) => void;
};

export const useEngineSoundStore = create<EngineSoundTypes>()((set) => ({
  // startEngine: (audioRef) => {
  //   if (audioRef.current) {
  //     audioRef.current.setVolume(40);
  //     audioRef.current.play();
  //     set({ hasEngineStarted: true });
  //   }
  // },
  startEngine: () => console.log("started"),
  volume: 40,
  hasEngineStarted: false,
  setHasEngineStarted: (hasEngineStarted: boolean) => set({ hasEngineStarted }),
}));
