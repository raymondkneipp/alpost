import create from "zustand";

interface SocialsState {
	facebook: string;
	instagram: string;
	twitter: string;
	youtube: string;
	setSocials: (socials: {
		facebook: string;
		instagram: string;
		twitter: string;
		youtube: string;
	}) => void;
}

const useSocials = create<SocialsState>((set) => ({
	facebook: "",
	instagram: "",
	twitter: "",
	youtube: "",
	setSocials: (socials) => set((state) => ({ ...socials })),
}));

export default useSocials;
